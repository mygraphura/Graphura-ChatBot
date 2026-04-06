import json
import os
import re
import numpy as np
import uuid
from datetime import datetime
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from app.database import interns_collection, tickets_collection, login_logs_collection

# Load Model
model = SentenceTransformer("all-MiniLM-L6-v2")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KB_PATH = os.path.join(BASE_DIR, "knowledge_base", "master_kb.json")

# Loading KB
with open(KB_PATH, "r", encoding="utf-8") as f:
    knowledge_base = json.load(f)["faq"]

questions = [item["question"] for item in knowledge_base]
answers = [item["answer"] for item in knowledge_base]
question_embeddings = model.encode(questions)

GREETINGS = ["hi", "hello", "hey", "yo"]

# Memory
conversation_memory = {}
verified_interns = {}
pending_email_collection = {}


def normalize_text(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^\w\s/@]", "", text)
    return text.strip()


def save_ticket(question, role, confidence, intern_id=None, email=None):
    # This will be updated to use MongoDB later, for now we keep synchronous signature
    # or better, we'll refactor this to be async too when we do tickets
    ticket_id = "GRPH-" + str(uuid.uuid4())[:8].upper()
    return ticket_id


def is_valid_email(text):
    return re.match(r"[^@]+@[^@]+\.[^@]+", text)


async def generate_response(message: str, role: str):
    message_clean = normalize_text(message)

    # Intern Verification via MongoDB
    if role == "intern" and role not in verified_interns:
        intern = await interns_collection.find_one({"intern_id": message, "active": True})
        if intern:
            verified_interns[role] = message

            # Log the intern login
            await login_logs_collection.insert_one({
                "identifier": message,
                "type": "intern",
                "login_time": datetime.utcnow()
            })

            return {
                "response": "Intern ID verified successfully. You may now ask your queries.",
                "confidence": 100
            }
        else:
            return {
                "response": "Please provide your valid Intern ID to continue.",
                "confidence": 100
            }

    # Greeting
    if message_clean in GREETINGS:
        return {
            "response": "Hello! and Welcome to Graphura Support.",
            "confidence": 100
        }

    # Visitor Email Collection
    if role == "visitor" and pending_email_collection.get(role):
        if is_valid_email(message):
            last_question = conversation_memory[role]["last_question"]
            confidence = conversation_memory[role]["confidence"]

            ticket_id = save_ticket(
                last_question,
                role,
                confidence,
                email=message
            )

            pending_email_collection[role] = False

            return {
                "response": f"Ticket raised successfully.\nTicket ID: {ticket_id}",
                "confidence": 100
            }
        else:
            return {
                "response": "Please provide a valid email address.",
                "confidence": 100
            }

    # Escalation Trigger
    if any(word in message_clean.split() for word in ["raise", "ticket", "escalate"]):
        if role not in conversation_memory:
            return {"response": "No issue found to escalate.", "confidence": 100}

        last_question = conversation_memory[role]["last_question"]
        confidence = conversation_memory[role]["confidence"]

        if role == "intern":
            intern_id = verified_interns.get(role)
            ticket_id = save_ticket(
                last_question,
                role,
                confidence,
                intern_id=intern_id
            )
            return {
                "response": f"Ticket raised successfully.\nTicket ID: {ticket_id}",
                "confidence": 100
            }

        if role == "visitor":
            pending_email_collection[role] = True
            return {
                "response": "Please provide your email address so HR can contact you.",
                "confidence": 100
            }

    # KB Logic
    user_embedding = model.encode([message_clean])
    similarities = cosine_similarity(user_embedding, question_embeddings)

    best_index = np.argmax(similarities)
    best_score = float(similarities[0][best_index])
    confidence_percentage = round(best_score * 100, 2)

    conversation_memory[role] = {
        "last_question": message,
        "confidence": confidence_percentage
    }

    if best_score >= 0.70:
        return {
            "response": answers[best_index],
            "confidence": confidence_percentage
        }
    else:
        return {
            "response": f"{answers[best_index]}\n\nIf unresolved, you may raise a support ticket.",
            "confidence": confidence_percentage
        }