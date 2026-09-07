"""
Flask Server for Multilingual Voice-Interactive Memory & Cognitive Assessment Platform
Tailored for Elderly & Dementia Care in the North Eastern Region (NER) & All India.
"""

import os
import sys
import time
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

from backend.game_engine import game_engine, ITEM_CATALOG, LANGUAGES

app = Flask(__name__, static_folder="static", static_url_path="/static")
CORS(app)

# In-memory session store with clinical metrics
sessions = {}


@app.route("/")
def index():
    return send_from_directory("static", "index.html")


@app.route("/api/languages", methods=["GET"])
def get_languages():
    return jsonify({"languages": LANGUAGES})


@app.route("/api/session/start", methods=["POST"])
def start_session():
    data = request.get_json(silent=True) or {}
    user_name = data.get("user_name", "Friend")
    initial_mode = data.get("initial_mode", "spot_and_name")
    lang = data.get("lang", "en")

    session_id = f"session_{int(time.time() * 1000)}"
    sessions[session_id] = {
        "user_name": user_name,
        "current_mode": initial_mode,
        "lang": lang,
        "clinical_level": 1,
        "total_score": 0,
        "total_rounds": 0,
        "correct_rounds": 0,
        "streak": 0,
        "history": [],
        "started_at": time.time()
    }

    initial_assessment = game_engine.compute_clinical_assessment(
        history=[],
        current_score=0,
        total_rounds=0,
        avg_latency_ms=0
    )

    return jsonify({
        "session_id": session_id,
        "lang": lang,
        "clinical_assessment": initial_assessment
    })


@app.route("/api/game/generate-round", methods=["POST"])
def generate_round():
    data = request.get_json(silent=True) or {}
    session_id = data.get("session_id", "")
    mode = data.get("mode", "spot_and_name")
    difficulty = int(data.get("difficulty", 1))
    lang = data.get("lang", "en")
    level = int(data.get("level", 1))

    if session_id in sessions:
        sessions[session_id]["current_mode"] = mode
        sessions[session_id]["lang"] = lang
        level = sessions[session_id].get("clinical_level", level)

    round_data = game_engine.generate_round(mode=mode, difficulty=difficulty, lang=lang, level=level)
    return jsonify({"round": round_data})


@app.route("/api/game/submit-answer", methods=["POST"])
def submit_answer():
    data = request.get_json(silent=True) or {}
    session_id = data.get("session_id", "")
    mode = data.get("mode", "spot_and_name")
    user_selection = data.get("user_selection")
    target_data = data.get("target_data")
    response_time_ms = int(data.get("response_time_ms", 0))

    session = sessions.get(session_id)
    eval_result = game_engine.evaluate_answer(mode, user_selection, target_data)
    is_correct = eval_result["is_correct"]

    # Calculate points based on accuracy and speed
    if is_correct:
        # Base 100 pts + speed bonus
        speed_bonus = max(0, min(50, int((5000 - response_time_ms) / 100))) if response_time_ms > 0 else 20
        points_earned = 100 + speed_bonus
    else:
        points_earned = 25  # Encouragement points for attempt (elderly-friendly)

    if session:
        session["total_rounds"] += 1
        session["total_score"] += points_earned
        if is_correct:
            session["correct_rounds"] += 1
            session["streak"] += 1
        else:
            session["streak"] = 0

        session["history"].append({
            "mode": mode,
            "is_correct": is_correct,
            "response_time_ms": response_time_ms,
            "level": session.get("clinical_level", 1),
            "timestamp": time.time()
        })

        # Dynamically evaluate clinical assessment & update clinical level
        assessment = game_engine.compute_clinical_assessment(
            history=session["history"],
            current_score=session["total_score"],
            total_rounds=session["total_rounds"],
            avg_latency_ms=response_time_ms
        )
        session["clinical_level"] = assessment["level"]
    else:
        assessment = game_engine.compute_clinical_assessment(
            history=[{"mode": mode, "is_correct": is_correct, "response_time_ms": response_time_ms}],
            current_score=points_earned,
            total_rounds=1,
            avg_latency_ms=response_time_ms
        )

    return jsonify({
        "evaluation": eval_result,
        "points_earned": points_earned,
        "total_score": session["total_score"] if session else points_earned,
        "clinical_assessment": assessment
    })


@app.route("/api/clinical/assessment", methods=["GET", "POST"])
def get_clinical_assessment():
    session_id = request.args.get("session_id") or (request.get_json(silent=True) or {}).get("session_id", "")
    session = sessions.get(session_id)

    if session:
        assessment = game_engine.compute_clinical_assessment(
            history=session["history"],
            current_score=session["total_score"],
            total_rounds=session["total_rounds"]
        )
    else:
        score = int(request.args.get("score", 0))
        assessment = game_engine.compute_clinical_assessment(
            history=[],
            current_score=score,
            total_rounds=max(1, score // 100) if score > 0 else 0
        )

    return jsonify({"assessment": assessment})


@app.route("/api/clinical/reminders", methods=["GET"])
def get_reminders():
    lang = request.args.get("lang", "en")
    reminders = game_engine.get_daily_reminders(lang)
    return jsonify({"reminders": reminders})


@app.route("/api/voice/process-command", methods=["POST"])
def process_voice_command():
    data = request.get_json(silent=True) or {}
    transcript = data.get("transcript", "")
    lang = data.get("lang", "en")

    parsed = game_engine.parse_voice_command(transcript=transcript, lang=lang)
    return jsonify({"parsed": parsed})


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    port = int(os.environ.get("PORT", 5000))
    print("=" * 70)
    print(" [MindBloom] North East Dementia Care & Memory Platform (Flask)")
    print(f" Access at: http://127.0.0.1:{port}")
    print("=" * 70)
    app.run(host="0.0.0.0", port=port, debug=True)
