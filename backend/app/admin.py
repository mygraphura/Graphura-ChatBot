from fastapi import APIRouter
import json
import os
from app.database import sessions_collection, interns_collection
from datetime import datetime

router = APIRouter()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TICKET_PATH = os.path.join(BASE_DIR, "tickets", "tickets.json")


@router.get("/tickets")
def get_all_tickets():
    with open(TICKET_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data


@router.put("/tickets/{ticket_id}/close")
def close_ticket(ticket_id: str):
    with open(TICKET_PATH, "r+", encoding="utf-8") as f:
        data = json.load(f)

        for ticket in data["tickets"]:
            if ticket["ticket_id"] == ticket_id:
                ticket["status"] = "closed"

        f.seek(0)
        json.dump(data, f, indent=4)
        f.truncate()

    return {"message": "Ticket closed successfully"}