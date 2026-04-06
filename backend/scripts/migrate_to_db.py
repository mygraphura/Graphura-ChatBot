import asyncio
import json
import os
import sys
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Add the current directory to sys.path so we can import app.config
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

load_dotenv()

# We'll use the MONGO_URL from .env
MONGO_URL = os.getenv("MONGO_URL")
if not MONGO_URL:
    print("Error: MONGO_URL not found in .env file.")
    sys.exit(1)

client = AsyncIOMotorClient(MONGO_URL)
db = client.get_database("graphura_db")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
USERS_FILE = os.path.join(BASE_DIR, "knowledge_base", "users.json")
INTERN_IDS_FILE = os.path.join(BASE_DIR, "knowledge_base", "intern_ids.json")

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
            users_data = json.load(f).get("users", [])
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
            intern_ids = json.load(f).get("intern_ids", [])
            for intern_id in intern_ids:
                await db.interns.update_one(
                    {"intern_id": intern_id},
                    {"$set": {"intern_id": intern_id, "active": True}},
                    upsert=True
                )
        print(f"Successfully migrated {len(intern_ids)} intern IDs to the 'interns' collection.")
    else:
        print(f"Intern IDs file not found at {INTERN_IDS_FILE}")

    print("\nMigration completed successfully!")
    client.close()

if __name__ == "__main__":
    asyncio.run(migrate())
