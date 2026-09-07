# 🧠 MindBloom — Senior Cognitive & Memory Companion

[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=flat&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0+-000000?style=flat&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Voice%20Enabled-blue)](#)

An accessible, **voice-first multilingual cognitive stimulation game** designed specifically for elderly individuals, seniors, and dementia care. Featuring comprehensive **State-Wise Indian Language Support (Maharashtra, Hindi, and all 8 North East Region States)** with 100% native script voice recognition, spoken audio prompts, and high-contrast senior-friendly UI.

---

## ✨ Features

- 🎙️ **Voice-First Interactive Gameplay**: Answer questions simply by speaking into the microphone or tapping interactive buttons.
- 🗣️ **Dual-Engine Speech & Audio System**:
  - **Tier 1 (Browser Native TTS)**: Zero latency speech synthesizer.
  - **Tier 2 (High-Fidelity Audio Stream Fallback)**: Ensures languages like Marathi, Assamese, and regional dialects always speak aloud clearly on every operating system without requiring pre-installed voice packs.
- 🎮 **3 Cognitive Stimulation Game Modes**:
  1. **Spot & Name (ओळखा आणि सांगा)**: Object identification and naming.
  2. **Memory Match (लक्षात ठेवा)**: Short-term visual memory recall.
  3. **Word Recall (शब्द आठवा)**: Categorical recall and association.
- ♿ **Senior & Dementia-Friendly Design**: High-contrast, large typography, gentle warm visuals, and positive reinforcement feedback.
- 🗺️ **Comprehensive State & Regional Language Coverage**.

---

## 🗺️ Supported State & Regional Languages

| State / Region | Languages Supported | Voice Guidance & Speech Recognition |
|---|---|---|
| **National / Core** | 🇬🇧 **English**, 🇮🇳 **हिंदी (Hindi)** | Spoken Voice Guidance & Speech Recognition |
| **Maharashtra** | 🚩 **मराठी (Marathi)** | Spoken Prompts & Voice Answers (*सफरचंद, फूल, किल्ली, इत्यादी*) |
| **Assam** | 🌿 **অসমীয়া (Assamese)**, **बड़ो (Bodo)** | Native Spoken Prompts (*আপেল, ফুল, চাবি / आफेल, बिबार*) |
| **Manipur** | 🌺 **মৈতৈলোন্ (Meitei / Manipuri)** | Native Prompts (*হৈ, লৈ, চাবি*) |
| **Tripura & Bengal** | 🌸 **বাংলা (Bengali)**, **Kokborok** | Native Prompts (*আপেল, ফুল, চাবি / Khumthai, Khum*) |
| **Mizoram** | 🍃 **Mizo (Mizo ṭawng)** | Native Prompts (*Epel, Pâr, Chabi, Thingpui*) |
| **Meghalaya** | 🌲 **Khasi (Ka Ktien Khasi)**, **Garo (A·chik)** | Native Prompts (*Soh Phrun, Tiew, U Shabi / Bibal*) |
| **Sikkim** | 🏔️ **नेपाली (Nepali)**, **Lepcha (ৰোং)**, **Bhutia** | Native Prompts (*स्याउ, फूल, साँचो, चिया*) |
| **Nagaland** | 🌄 **Ao**, **Angami (Tenyidie)**, **Sumi** | Native Prompts (*Narok, Parr, Apuh*) |
| **Arunachal Pradesh** | ⛰️ **Nyishi**, **Adi**, **Galo** | Native Prompts (*Ayeng, Appun, Pupu*) |

---

## 🚀 Quick Start & Installation

Anyone can clone and run this project in just a few minutes.

### Prerequisites
- [Python 3.8+](https://www.python.org/downloads/)
- Any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari)

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/mindbloom-dementia-care.git
cd mindbloom-dementia-care
```

### 2. Create and Activate a Virtual Environment (Optional but Recommended)
- **Windows (Command Prompt / PowerShell):**
  ```bash
  python -m venv venv
  .\venv\Scripts\activate
  ```
- **macOS / Linux:**
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Application

Start the Flask server:
```bash
python app.py
```

### 5. Open in Your Browser
Visit **[http://127.0.0.1:5000](http://127.0.0.1:5000)** in your browser!

*(Optional: If you prefer running the FastAPI backend instead, run `python backend/main.py` and access `http://127.0.0.1:8000`)*

---

## 📁 Project Structure

```text
├── app.py                  # Primary Flask backend server & routing
├── requirements.txt        # Python package dependencies
├── LICENSE                 # MIT Open Source License
├── .gitignore              # Files and folders excluded from git tracking
├── .gitattributes          # Git line-ending normalization rules
├── backend/
│   ├── game_engine.py      # Core multilingual game logic, vocabularies & parsers
│   └── main.py             # Optional FastAPI server implementation
└── static/
    ├── index.html          # Accessible responsive single-page web app
    ├── css/
    │   └── style.css       # Senior-friendly high contrast stylesheets & animations
    └── js/
        ├── app.js          # Client-side state manager, UI controller & game loops
        └── voice.js        # Web Speech API & fallback audio streaming engine
```

---

## 🎙️ Microphone & Audio Permissions

1. When prompted by your browser, click **Allow** for microphone access to enable voice answers.
2. For optimal voice recognition accuracy, use **Google Chrome** or **Microsoft Edge** as they include full native Web Speech API support.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request if you would like to add more regional Indian dialects or cognitive mini-games.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
