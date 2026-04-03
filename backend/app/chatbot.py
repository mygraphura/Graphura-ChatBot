from fastapi import APIRouter, Body
from pydantic import BaseModel
from app.llm import generate_response

router = APIRouter()

# CHATBOT API

class ChatRequest(BaseModel):
    message: str
    role: str  # "intern" or "client"


@router.post("/")
def chat(request: ChatRequest):
    result = generate_response(request.message, request.role)

    return {
        "response": result["response"],
        "confidence": result["confidence"]
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