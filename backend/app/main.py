import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from app.chatbot import router as chatbot_router
from app.admin import router as admin_router
from app.auth import router as auth_router
from app.database import check_db_connection

#CREATE APP FIRST
app = FastAPI(
    title="Graphura AI Support System",
    version="1.0.0"
)

@app.on_event("startup")
async def startup_db_client():
    await check_db_connection()

# PATH SAFETY 
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) # /backend
PROJECT_ROOT = os.path.dirname(BASE_DIR)
FRONTEND_DIR = os.path.join(PROJECT_ROOT, "frontend", "dist")

# INCLUDE ROUTERS
app.include_router(chatbot_router, prefix="/chat", tags=["Chatbot"])
app.include_router(admin_router, prefix="/admin", tags=["Admin"])
app.include_router(auth_router, prefix="/auth", tags=["Auth"])

# SERVE STATIC FILES
app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")

# SERVE CHAT FRONTEND
@app.get("/")
def serve_frontend():
    return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))

# SERVE ADMIN DASHBOARD
@app.get("/admin-panel")
def serve_admin():
    return FileResponse(os.path.join(FRONTEND_DIR, "admin.html"))