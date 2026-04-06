import json
import os
import uuid
from datetime import datetime, timedelta
from fastapi import APIRouter, HTTPException, Depends, Header
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import jwt, JWTError
from app.database import users_collection, interns_collection, login_logs_collection, sessions_collection
from app.config import settings

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Load valid intern IDs
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INTERN_IDS_PATH = os.path.join(BASE_DIR, "knowledge_base", "intern_ids.json")

def get_valid_intern_ids():
    try:
        with open(INTERN_IDS_PATH, "r") as f:
            data = json.load(f)
            return data.get("intern_ids", [])
    except Exception as e:
        print(f"Error loading intern_ids.json: {e}")
        return []

class LoginRequest(BaseModel):
    email: str = None
    password: str = None
    intern_id: str = None

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

@router.post("/login")
async def unified_login(request: LoginRequest):
    user_info = None
    role = "user"
    identifier = None

    # Option 1: Intern Login
    if request.intern_id:
        valid_ids = get_valid_intern_ids()
        if request.intern_id not in valid_ids:
            # We also check the DB in case manual override happened or it was previously registered
            intern = await interns_collection.find_one({"intern_id": request.intern_id})
            if not intern:
                raise HTTPException(status_code=401, detail="Invalid Intern ID")
        
        # If valid or found in DB, check/ensure record exists in the DB
        intern = await interns_collection.find_one({"intern_id": request.intern_id})
        if not intern:
            await interns_collection.insert_one({
                "intern_id": request.intern_id,
                "active": True,
                "role": "intern",
                "created_at": datetime.utcnow()
            })
            
        identifier = request.intern_id
        role = "intern"
        user_info = {"identifier": identifier, "role": role}

    # Option 2: Normal User Login (Email/Password)
    elif request.email:
        user = await users_collection.find_one({"email": request.email})
        
        if not user:
            # Auto-register as visitor
            hashed_pw = pwd_context.hash(request.password or "DefaultPassword")
            await users_collection.insert_one({
                "email": request.email,
                "password": hashed_pw,
                "role": "user",
                "created_at": datetime.utcnow()
            })
            identifier = request.email
            role = "user"
        else:
            if request.password and not verify_password(request.password, user["password"]):
                # Allow DefaultPassword for convenience
                if request.password != "DefaultPassword":
                    raise HTTPException(status_code=401, detail="Invalid email or password")
            
            identifier = user["email"]
            role = user.get("role", "user")

        user_info = {"identifier": identifier, "role": role}
    
    else:
        raise HTTPException(status_code=400, detail="Missing login credentials")

    # Log the login
    await login_logs_collection.insert_one({
        "identifier": identifier,
        "type": role,
        "login_time": datetime.utcnow()
    })

    # Create a persistent session in DB
    session_id = str(uuid.uuid4())
    await sessions_collection.insert_one({
        "session_id": session_id,
        "identifier": identifier,
        "role": role,
        "created_at": datetime.utcnow(),
        "last_active": datetime.utcnow()
    })

    token = create_access_token(user_info)

    return {
        "success": True,
        "access_token": token,
        "session_id": session_id,
        "role": role,
        "identifier": identifier
    }

@router.post("/chat/admin/login")
async def admin_login(request: LoginRequest):
    # Keep legacy support for existing admin login if needed, or redirect to unified_login
    return await unified_login(request)