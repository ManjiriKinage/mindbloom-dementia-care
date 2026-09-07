# 🧠 MindBloom — AI-Powered Cognitive Care & Dementia Assistant (North East Region)

[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=flat&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0+-000000?style=flat&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Voice%20Enabled-blue)](#)

An accessible, **AI-powered voice-interactive cognitive stimulation and dementia risk assessment platform** designed specifically for elderly individuals and dementia care in the **North Eastern Region (NER) of India**.

---

## 🩺 Clinical Framework & AI Adaptive Difficulty (Doctor's Perspective)

MindBloom maps gameplay metrics to standardized neurological cognitive screening tools (**MoCA / MMSE 30-Point Framework**). It measures **Reaction Latency**, **Hesitation Indices**, **Error Recovery**, and **Domain Accuracy** in real-time:

| Level | Clinical State & Dementia Triaging | MoCA Scale Proxy | Gameplay Adaptation |
|---|---|---|---|
| 🟢 **Level 1** | **Preserved Cognitive Function** (Normal Aging) | **26 – 30 / 30** | Full speed, 4–5 choices, subtle visual distractors |
| 🟡 **Level 2** | **Mild Cognitive Impairment (MCI) Signs** | **18 – 25 / 30** | 3–4 choices, standard pacing, gentle audio prompts |
| 🟠 **Level 3** | **Moderate Cognitive Decline Risk** | **10 – 17 / 30** | 2–3 big cards, highlighted audio-visual cues, longer retention |
| 🔴 **Level 4** | **Assisted Sensory Care** | **< 10 / 30** | 2 high-contrast choices, errorless learning, soothing prompts |

---

## ✨ Core Pillars & Features

1. 🎮 **Interactive Cognitive Modules**:
   - **Spot & Name (বস্তু চিনাক্তকৰণ)**: Object naming & visual recognition.
   - **Memory Recall (মনত ৰখা)**: Short-term visual retention & delayed recall.
   - **Match Pairs (যোৰ মিলোৱা)**: Working memory & executive function.
2. 📊 **Caregiver & Doctor Clinical Dashboard**:
   - Real-time **MoCA / MMSE equivalent cognitive score** (0–30 scale).
   - Domain performance breakdown bars (Visual Naming, Recall, Working Memory, Reaction Speed).
   - AI Neurological observations & doctor prescriptions.
   - One-click **Print / Export Medical Assessment Report** for district health workers.
3. ⏰ **Daily Routine & Reminders (PS Requirement E)**:
   - 💊 Morning & Night Medicine reminders with native voice alert.
   - 💧 Interactive **Hydration Tracker** (preventing confusion & delirium).
   - 🚶‍♂️ Daily activity & doctor appointment tracking.
4. 🗣️ **Multilingual Dual-Engine Voice Assistant**:
   - 16+ languages covering all 8 North Eastern States (Assam, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, Sikkim, Arunachal Pradesh) + Maharashtra (Marathi), Hindi, and English.
   - Spoken audio stream fallback ensuring speech works on every device without pre-installed voice packs.
5. 🌾 **Culturally Familiar North East Themes & Visuals**:
   - Traditional items: Gamusa (গামোচা), Japi (জাপি), Chai / Mizo Tea (চাহ / Thingpui), Kopou Orchid, Bamboo Flute, River Fish, Temple Bell.

---

## 🗺️ Supported State & Regional Languages

| State / Region | Languages Supported | Voice Guidance & Speech Recognition |
|---|---|---|
| **National / Core** | 🇬🇧 **English**, 🇮🇳 **हिंदी (Hindi)** | Spoken Voice Guidance & Speech Recognition |
| **Maharashtra** | 🚩 **मराठी (Marathi)** | Spoken Prompts & Voice Answers (*सफरचंद, फूल, किल्ली, इत्यादी*) |
| **Assam** | 🌿 **অসমীয়া (Assamese)**, **बड़ो (Bodo)** | Native Spoken Prompts (*আপেল, ফুল, চাবি, গামোচা / आफेल, बिबार*) |
| **Manipur** | 🌺 **মৈতৈলোন্ (Meitei / Manipuri)** | Native Prompts (*হৈ, লৈ, চাবি, ফি*) |
| **Tripura & Bengal** | 🌸 **বাংলা (Bengali)**, **Kokborok** | Native Prompts (*আপেল, ফুল, চাবি, গামছা / Khumthai, Khum, Risa*) |
| **Mizoram** | 🍃 **Mizo (Mizo ṭawng)** | Native Prompts (*Epel, Pâr, Chabi, Thingpui, Puan*) |
| **Meghalaya** | 🌲 **Khasi (Ka Ktien Khasi)**, **Garo (A·chik)** | Native Prompts (*Soh Phrun, Tiew, U Shabi, Ka Jainsem / Bibal*) |
| **Sikkim** | 🏔️ **नेपाली (Nepali)**, **Lepcha (ৰোং)**, **Bhutia** | Native Prompts (*स्याउ, फूल, साँचो, चिया, गम्छा*) |
| **Nagaland** | 🌄 **Ao**, **Angami (Tenyidie)**, **Sumi** | Native Prompts (*Narok, Parr, Apuh, Tsüngkotepsü*) |
| **Arunachal Pradesh** | ⛰️ **Nyishi**, **Adi**, **Galo** | Native Prompts (*Ayeng, Appun, Pupu, Gale*) |

## 🚀 Universal Cross-Platform Quick Start

MindBloom is **100% platform-independent** and runs immediately after cloning on **Windows**, **macOS**, **Linux**, **WSL**, **Raspberry Pi**, and **Docker**.

### 1. Clone the Repository
```bash
git clone https://github.com/ManjiriKinage/mindbloom-dementia-care.git
cd mindbloom-dementia-care
```

---

### 2. Choose Your Platform

#### 🪟 Windows (Command Prompt / PowerShell)
Double-click `start.bat` or run:
```cmd
start.bat
```
*Or using PowerShell:*
```powershell
.\start.ps1
```
*Or with Python:*
```cmd
python run.py --open-browser
```

#### 🍎 macOS
Make the script executable and run:
```bash
chmod +x start.sh
./start.sh
```
*Or with Python 3:*
```bash
python3 run.py --open-browser
```
> [!TIP]
> **macOS AirPlay Note**: macOS Monterey / Ventura / Sonoma uses port 5000 for AirPlay Receiver by default. The launcher (`run.py` / `start.sh`) **automatically detects this** and seamlessly shifts to port 5001 or you can pass `python3 run.py --port 5001`.

#### 🐧 Linux / WSL / Raspberry Pi
```bash
chmod +x start.sh
./start.sh
```
*Or using `make`:*
```bash
make dev
```

#### 🐳 Docker / Docker Compose (Any OS)
Run without needing local Python or pip installed:
```bash
docker compose up --build
```
Access at **[http://127.0.0.1:5000](http://127.0.0.1:5000)**.

---

### 3. Open in Your Browser
Visit **[http://127.0.0.1:5000](http://127.0.0.1:5000)** (or **http://127.0.0.1:5001** if port 5000 is occupied) to access the platform.

---

## 🛠️ CLI Options & Flexible Launching

The universal launcher `run.py` provides cross-platform arguments:

```bash
# Auto-launch your default browser
python3 run.py -b

# Run on a custom port
python3 run.py -p 8080

# Run with high-performance FastAPI backend
python3 run.py --fastapi

# Force verify/install dependencies
python3 run.py --install
```

---

## 📁 Project Structure

```text
├── run.py                  # Universal cross-platform launcher (Windows / macOS / Linux)
├── start.sh                # 1-click launch script for macOS & Linux
├── start.bat               # 1-click launch script for Windows CMD
├── start.ps1               # 1-click launch script for Windows PowerShell
├── Makefile                # Developer build & run automation
├── Dockerfile              # Containerized deployment specification
├── docker-compose.yml      # 1-command Docker Compose environment
├── app.py                  # Primary Flask backend server & clinical API routes
├── requirements.txt        # Universal cross-platform Python dependencies
├── LICENSE                 # MIT Open Source License
├── .gitignore              # Git ignore rules
├── .gitattributes          # Line ending normalization (LF/CRLF cross-OS)
├── .dockerignore           # Docker build exclusion rules
├── backend/
│   ├── __init__.py         # Package declaration
│   ├── game_engine.py      # Clinical assessment engine, adaptive levels & 16+ languages
│   └── main.py             # Optional FastAPI server implementation
└── static/
    ├── index.html          # Accessible UI, Doctor Dashboard & Reminders modals
    ├── css/
    │   └── style.css       # Tactile senior stylesheets, badges & print styles
    └── js/
        ├── app.js          # Cognitive state manager, level transitions & timer tracking
        └── voice.js        # Dual-engine Web Speech API & regional audio synthesizer
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
