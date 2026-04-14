import asyncio
import json
import os
import sys
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Path handling: The script is in backend/scripts/
# We want to find backend/knowledge_base/
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.dirname(SCRIPT_DIR)
KB_DIR = os.path.join(BACKEND_DIR, "knowledge_base")

# Load .env from backend/ directory
load_dotenv(os.path.join(BACKEND_DIR, ".env"))

# We'll use the MONGO_URL from .env
MONGO_URL = os.getenv("MONGO_URL")
if not MONGO_URL:
    print("Error: MONGO_URL not found in .env file.")
    sys.exit(1)

client = AsyncIOMotorClient(MONGO_URL)
db = client.get_database("graphura_db")

USERS_FILE = os.path.join(KB_DIR, "users.json")
INTERN_IDS_FILE = os.path.join(KB_DIR, "intern_ids.json")
MASTER_KB_FILE = os.path.join(KB_DIR, "master_kb.json")
TICKETS_FILE = os.path.join(BACKEND_DIR, "tickets", "tickets.json")

async def migrate():
    print(f"Connecting to MongoDB...")
    try:
        # Check connection
        await client.admin.command('ping')
        print("Connected to MongoDB successfully!")
    except Exception as e:
        print(f"Could not connect to MongoDB: {e}")
        return

    # Migrate Users
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, "r") as f:
            data = json.load(f)
            users_data = data.get("users", [])
            for user in users_data:
                # We use upsert=True to avoid duplicates if run multiple times
                await db.users.update_one(
                    {"email": user["email"]},
                    {"$set": user},
                    upsert=True
                )
        print(f"Successfully migrated {len(users_data)} users to the 'users' collection.")
    else:
        print(f"Users file not found at {USERS_FILE}")

    # Migrate Intern IDs
    if os.path.exists(INTERN_IDS_FILE):
        with open(INTERN_IDS_FILE, "r") as f:
            data = json.load(f)
            intern_ids = data.get("intern_ids", [])
            for intern_id in intern_ids:
                await db.interns.update_one(
                    {"intern_id": intern_id},
                    {"$set": {"intern_id": intern_id, "active": True}},
                    upsert=True
                )
        print(f"Successfully migrated {len(intern_ids)} intern IDs to the 'interns' collection.")
    else:
        print(f"Intern IDs file not found at {INTERN_IDS_FILE}")

    # Migrate Master KB
    if os.path.exists(MASTER_KB_FILE):
        with open(MASTER_KB_FILE, "r") as f:
            data = json.load(f)
            kb_data = data.get("faq", [])
            for item in kb_data:
                # Use question as the unique identifier for FAQ items
                await db.knowledge_base.update_one(
                    {"question": item["question"]},
                    {"$set": item},
                    upsert=True
                )
        print(f"Successfully migrated {len(kb_data)} KB items to the 'knowledge_base' collection.")
    else:
        print(f"Master KB file not found at {MASTER_KB_FILE}")

    # Migrate Tickets
    if os.path.exists(TICKETS_FILE):
        with open(TICKETS_FILE, "r") as f:
            data = json.load(f)
            tickets_data = data.get("tickets", [])
            for ticket in tickets_data:
                await db.tickets.update_one(
                    {"ticket_id": ticket["ticket_id"]},
                    {"$set": ticket},
                    upsert=True
                )
        print(f"Successfully migrated {len(tickets_data)} tickets to the 'tickets' collection.")
    else:
        print(f"Tickets file not found at {TICKETS_FILE}")

    print("\nMigration completed successfully!")
    client.close()

if __name__ == "__main__":
    asyncio.run(migrate())
