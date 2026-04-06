import os
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio
from dotenv import load_dotenv

load_dotenv()

async def test_db():
    url = os.getenv("MONGO_URL")
    print(f"Connecting to: {url}")
    client = AsyncIOMotorClient(url, serverSelectionTimeoutMS=5000)
    try:
        await client.admin.command('ping')
        print("Connected successfully!")
    except Exception as e:
        print(f"Connection failed: {e}")

if __name__ == "__main__":
    asyncio.run(test_db())
