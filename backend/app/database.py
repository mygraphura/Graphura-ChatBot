from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

# Database Configuration
client = AsyncIOMotorClient(settings.MONGO_URL)
db = client.get_database("graphura_db")

# Collections
users_collection = db.users
interns_collection = db.interns
tickets_collection = db.tickets
kb_collection = db.knowledge_base
login_logs_collection = db.login_logs
sessions_collection = db.sessions

async def check_db_connection():
    try:
        await client.admin.command('ping')
        print("mongodb connected successfully")
        return True
    except Exception as e:
        print(f"Database connection error: {e}")
        return False
