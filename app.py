"""
Flask Server for Multilingual Voice-Interactive Memory & Cognitive Game for Elderly & Dementia Care.
Supports English, Marathi (मराठी), Hindi (हिंदी), and North East Region (অসমীয়া / বাংলা).
"""

import os
import sys
import time
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

sys.path.insert(0, str(Path(__file__).parent / "backend"))
from game_engine import game_engine, ITEM_CATALOG, LANGUAGES

app = Flask(__name__, static_folder="static", static_url_path="/static")
CORS(app)

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
        "total_score": 0,
        "started_at": time.time()
    }

    return jsonify({
        "session_id": session_id,
        "lang": lang
    })


@app.route("/api/game/generate-round", methods=["POST"])
def generate_round():
    data = request.get_json(silent=True) or {}
    session_id = data.get("session_id", "")
    mode = data.get("mode", "spot_and_name")
    difficulty = int(data.get("difficulty", 1))
    lang = data.get("lang", "en")

    if session_id in sessions:
        sessions[session_id]["current_mode"] = mode
        sessions[session_id]["lang"] = lang

    round_data = game_engine.generate_round(mode=mode, difficulty=difficulty, lang=lang)
    return jsonify({"round": round_data})


@app.route("/api/voice/process-command", methods=["POST"])
def process_voice_command():
    data = request.get_json(silent=True) or {}
    transcript = data.get("transcript", "")
    lang = data.get("lang", "en")

    parsed = game_engine.parse_voice_command(transcript=transcript, lang=lang)
    return jsonify({"parsed": parsed})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print("=" * 65)
    print(" 🧠 Starting Multilingual Memory & Voice Game (Flask)...")
    print(f" 🌐 Access at: http://127.0.0.1:{port}")
    print("=" * 65)
    app.run(host="0.0.0.0", port=port, debug=True)
