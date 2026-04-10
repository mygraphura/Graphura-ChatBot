from fastapi import APIRouter, Body, Header, HTTPException
from pydantic import BaseModel
from jose import jwt, JWTError
import uuid
from app.llm import generate_response
from app.config import settings
from app.database import sessions_collection, chats_collection
from datetime import datetime

router = APIRouter()

# CHATBOT API

class ChatRequest(BaseModel):
    message: str
    role: str  # "intern" or "visitor" / "user"
    chat_id: str | None = None

@router.post("/")
async def chat(request: ChatRequest, authorization: str = Header(None)):
    role = request.role
    identifier = "unknown"
    chat_id = request.chat_id or str(uuid.uuid4())

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
            raise HTTPException(status_code=401, detail="Token expired or invalid")

    result = await generate_response(request.message, role)

    # Save to history if logged in
    if identifier != "unknown":
        # Save User Message
        await chats_collection.insert_one({
            "chat_id": chat_id,
            "identifier": identifier,
            "text": request.message,
            "sender": "user",
            "timestamp": datetime.utcnow()
        })
        # Save Bot Response
        await chats_collection.insert_one({
            "chat_id": chat_id,
            "identifier": identifier,
            "text": result["response"],
            "sender": "bot",
            "timestamp": datetime.utcnow()
        })

    return {
        "response": result["response"],
        "confidence": result["confidence"],
        "user_role": role,
        "user_id": identifier,
        "chat_id": chat_id
    }

@router.delete("/history/{chat_id}")
async def delete_chat(chat_id: str, authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")
    
    try:
        token = authorization.split(" ")[1]
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        identifier = payload.get("identifier")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    result = await chats_collection.delete_many({"chat_id": chat_id, "identifier": identifier})
    return {"success": True, "deleted_count": result.deleted_count}

@router.patch("/history/{chat_id}/pin")
async def toggle_pin_chat(chat_id: str, authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")
    
    try:
        token = authorization.split(" ")[1]
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        identifier = payload.get("identifier")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    # Find the current state of pinning for this session (from first message)
    first_msg = await chats_collection.find_one({"chat_id": chat_id, "identifier": identifier})
    if not first_msg:
        raise HTTPException(status_code=404, detail="Chat not found")
    
    new_pinned_state = not first_msg.get("pinned", False)
    
    # Update all messages in this session
    await chats_collection.update_many(
        {"chat_id": chat_id, "identifier": identifier},
        {"$set": {"pinned": new_pinned_state}}
    )
    
    return {"success": True, "pinned": new_pinned_state}

@router.get("/history")
async def get_history(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")
    
    try:
        token = authorization.split(" ")[1]
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        identifier = payload.get("identifier")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    # Aggregate to get unique chat sessions, include pinned status
    cursor = chats_collection.aggregate([
        {"$match": {"identifier": identifier}},
        {"$sort": {"timestamp": 1}},
        {"$group": {
            "_id": "$chat_id",
            "title": {"$first": "$text"},
            "timestamp": {"$first": "$timestamp"},
            "pinned": {"$first": "$pinned"}
        }},
        {"$sort": {"pinned": -1, "timestamp": -1}}  # Pinned chats first
    ])
    
    history = []
    async for doc in cursor:
        history.append({
            "id": doc["_id"],
            "title": doc["title"][:40] + "..." if len(doc["title"]) > 40 else doc["title"],
            "timestamp": doc["timestamp"],
            "pinned": doc.get("pinned", False)
        })
    return history

@router.get("/history/{chat_id}")
async def get_chat_messages(chat_id: str, authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")
    
    try:
        token = authorization.split(" ")[1]
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        identifier = payload.get("identifier")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    cursor = chats_collection.find({"chat_id": chat_id, "identifier": identifier}).sort("timestamp", 1)
    messages = []
    async for doc in cursor:
        messages.append({
            "id": str(doc["_id"]),
            "text": doc["text"],
            "sender": doc["sender"],
            "time": doc["timestamp"].strftime("%H:%M")
        })
    return messages


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