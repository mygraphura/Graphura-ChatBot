from fastapi import APIRouter, Body, Header, HTTPException
from pydantic import BaseModel
from jose import jwt, JWTError
from app.llm import generate_response
from app.config import settings
from app.database import sessions_collection
from datetime import datetime

router = APIRouter()

# CHATBOT API

class ChatRequest(BaseModel):
    message: str
    role: str  # "intern" or "visitor" / "user"

@router.post("/")
async def chat(request: ChatRequest, authorization: str = Header(None)):
    role = request.role
    identifier = "unknown"

    # Persistent Session Check
    if authorization and authorization.startswith("Bearer "):
        token = authorization.split(" ")[1]
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
            identifier = payload.get("identifier")
            role = payload.get("role")
            
            # Update last activity in DB
            await sessions_collection.update_one(
                {"identifier": identifier},
                {"$set": {"last_active": datetime.utcnow()}}
            )
        except JWTError:
            pass # Fallback to request role if token invalid

    result = await generate_response(request.message, role)

    return {
        "response": result["response"],
        "confidence": result["confidence"],
        "user_role": role,
        "user_id": identifier
    }


# SIMPLE ADMIN LOGIN

ADMIN_EMAIL = "admin@graphura.ai"
ADMIN_PASSWORD = "Admin123"


@router.post("/admin/login")
def admin_login(data: dict = Body(...)):

    email = data.get("email")
    password = data.get("password")

    if email == ADMIN_EMAIL and password == ADMIN_PASSWORD:
        return {"success": True}

    return {"success": False}