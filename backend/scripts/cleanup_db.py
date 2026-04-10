import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

async def cleanup_db():
    url = os.getenv("MONGO_URL")
    client = AsyncIOMotorClient(url)
    db = client.get_database("graphura_db")
    
    # Drop the redundant 'messages' collection
    if "messages" in await db.list_collection_names():
        print("Dropping 'messages' collection...")
        await db.drop_collection("messages")
        print("Done.")
    else:
        print("'messages' collection not found.")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(cleanup_db())
