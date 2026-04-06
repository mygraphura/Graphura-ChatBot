import os
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio
from dotenv import load_dotenv

load_dotenv()

async def test_db():
    url = os.getenv("MONGO_URL", "mongodb://localhost:27017/graphura_db")
    print(f"Connecting to: {url}")
    # Shorten timeouts to catch issues quickly
    client = AsyncIOMotorClient(
        url, 
        serverSelectionTimeoutMS=2000, 
        connectTimeoutMS=2000,
        socketTimeoutMS=2000
    )
    try:
        await asyncio.wait_for(client.admin.command('ping'), timeout=3.0)
        print("Connected successfully!")
    except asyncio.TimeoutError:
        print("Connection timed out (asyncio level)")
    except Exception as e:
        print(f"Connection failed: {e}")

if __name__ == "__main__":
    asyncio.run(test_db())
