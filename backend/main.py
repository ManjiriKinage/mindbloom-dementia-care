"""
FastAPI Server for Voice-Interactive Memory & Cognitive Assessment Game for Elderly Care.
"""

import os
import sys
import time
from typing import Dict, Any, List, Optional
from pathlib import Path

# Ensure backend and root directories are in sys.path
CURRENT_DIR = Path(__file__).resolve().parent
ROOT_DIR = CURRENT_DIR.parent
if str(CURRENT_DIR) not in sys.path:
    sys.path.insert(0, str(CURRENT_DIR))
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel

from game_engine import game_engine, ITEM_CATALOG

app = FastAPI(
    title="Elderly Memory & Cognitive Voice Game",
    description="Accessible voice-interactive cognitive stimulation game for dementia care",
    version="1.0.0"
)

# Enable CORS for local web interactions
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory session store
sessions: Dict[str, Dict[str, Any]] = {}


# Request / Response Models
class SessionStartRequest(BaseModel):
    user_name: Optional[str] = "Friend"
    initial_mode: Optional[str] = "spot_and_name"
    difficulty: Optional[int] = 1


class RoundRequest(BaseModel):
    session_id: str
    mode: str
    difficulty: Optional[int] = 1


class VoiceCommandRequest(BaseModel):
    session_id: str
    transcript: str
    current_round: Optional[Dict[str, Any]] = None


class SubmitAnswerRequest(BaseModel):
    session_id: str
    mode: str
    user_selection: Any
    target_data: Any
    response_time_ms: Optional[int] = 0


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "Elderly Memory Voice Game Engine",
        "items_in_catalog": len(ITEM_CATALOG)
    }


@app.get("/api/catalog")
def get_catalog():
    return {"catalog": ITEM_CATALOG}


@app.post("/api/session/start")
def start_session(req: SessionStartRequest):
    session_id = f"session_{int(time.time() * 1000)}"
    sessions[session_id] = {
        "user_name": req.user_name,
        "current_mode": req.initial_mode,
        "difficulty": req.difficulty,
        "total_rounds": 0,
        "correct_rounds": 0,
        "streak": 0,
        "total_score": 0,
        "history": [],
        "started_at": time.time()
    }
    return {
        "session_id": session_id,
        "message": f"Welcome, {req.user_name}! Let's exercise our memory together.",
        "welcome_tts": f"Hello {req.user_name}! I am your friendly memory companion. Say 'Let's play' or tap any button when you are ready!"
    }


@app.post("/api/game/generate-round")
def generate_round(req: RoundRequest):
    round_data = game_engine.generate_round(req.mode, req.difficulty or 1)
    
    # Save current active round in session if session exists
    if req.session_id in sessions:
        sessions[req.session_id]["current_round"] = round_data
        sessions[req.session_id]["current_mode"] = req.mode
        sessions[req.session_id]["difficulty"] = req.difficulty

    return {"round": round_data}


@app.post("/api/voice/process-command")
def process_voice_command(req: VoiceCommandRequest):
    session = sessions.get(req.session_id)
    current_round = req.current_round or (session.get("current_round") if session else None)
    
    parsed = game_engine.parse_voice_command(req.transcript, current_round)
    return {"parsed": parsed}


@app.post("/api/game/submit-answer")
def submit_answer(req: SubmitAnswerRequest):
    session = sessions.get(req.session_id)
    
    eval_result = game_engine.evaluate_answer(
        mode=req.mode,
        user_selection=req.user_selection,
        target_data=req.target_data
    )

    is_correct = eval_result["is_correct"]
    points_earned = 100 if is_correct else 20  # Always award encouragement points

    if session:
        session["total_rounds"] += 1
        if is_correct:
            session["correct_rounds"] += 1
            session["streak"] += 1
        else:
            session["streak"] = 0
        
        session["total_score"] += points_earned
        session["history"].append({
            "mode": req.mode,
            "is_correct": is_correct,
            "response_time_ms": req.response_time_ms,
            "timestamp": time.time()
        })

    stats = {
        "total_score": session["total_score"] if session else points_earned,
        "streak": session["streak"] if session else (1 if is_correct else 0),
        "total_rounds": session["total_rounds"] if session else 1,
        "correct_rounds": session["correct_rounds"] if session else (1 if is_correct else 0)
    }

    return {
        "evaluation": eval_result,
        "points_earned": points_earned,
        "stats": stats
    }


@app.get("/api/session/{session_id}/stats")
def get_session_stats(session_id: str):
    session = sessions.get(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    
    accuracy = 0
    if session["total_rounds"] > 0:
        accuracy = round((session["correct_rounds"] / session["total_rounds"]) * 100)

    return {
        "session_id": session_id,
        "user_name": session["user_name"],
        "total_score": session["total_score"],
        "total_rounds": session["total_rounds"],
        "correct_rounds": session["correct_rounds"],
        "accuracy_percent": accuracy,
        "streak": session["streak"],
        "duration_minutes": round((time.time() - session["started_at"]) / 60, 1)
    }


# Static files mount
static_dir = ROOT_DIR / "static"
if not static_dir.exists():
    static_dir.mkdir(parents=True, exist_ok=True)

app.mount("/static", StaticFiles(directory=str(static_dir)), name="static")


@app.get("/")
def serve_index():
    index_path = static_dir / "index.html"
    if index_path.exists():
        return FileResponse(str(index_path))
    return {"message": "Memory Game API is running. Frontend index.html will be available shortly."}


if __name__ == "__main__":
    import uvicorn
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", 8000))
    display_host = "127.0.0.1" if host == "0.0.0.0" else host
    print("=" * 60)
    print(" [MindBloom] Elderly Cognitive Voice Game Server (FastAPI)")
    print(f" Access at: http://{display_host}:{port}")
    print("=" * 60)
    uvicorn.run("backend.main:app" if ROOT_DIR in [Path(p) for p in sys.path] else "main:app", host=host, port=port, reload=True, app_dir=str(ROOT_DIR))
