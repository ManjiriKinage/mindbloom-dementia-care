/**
 * Senior Memory Game App Coordinator
 * Full Native UI & Full-Sentence Voice Engine for all Indian States & Regional Languages
 */

const UI_STRINGS = {
  // Core
  en: {
    appTitle: "Memory Game",
    scoreLabel: "Score",
    voiceOn: "Voice: ON",
    voiceOff: "Voice: OFF",
    listening: "I am listening to you",
    voicePaused: "Microphone Paused",
    sayPrompt: "Say: <strong>'{name}'</strong> or tap picture",
    hearAgain: "Hear Again",
    nextBtn: "Next Question ➔",
    chooseGame: "Choose Game:",
    modeSpot: "🎯 Spot the Item",
    modeRecall: "🧠 Remember Items",
    modeMatch: "🃏 Match Pairs",
    cardBadge: "Card"
  },
  mr: {
    appTitle: "स्मरण खेळ",
    scoreLabel: "गुण",
    voiceOn: "आवाज: सुरू",
    voiceOff: "आवाज: बंद",
    listening: "मी तुमचे ऐकत आहे",
    voicePaused: "माईक थांबवला",
    sayPrompt: "बोला: <strong>'{name}'</strong> किंवा चित्रावर दाबा",
    hearAgain: "पुन्हा ऐका",
    nextBtn: "पुढील प्रश्न ➔",
    chooseGame: "खेळ निवडा:",
    modeSpot: "🎯 वस्तू ओळखा",
    modeRecall: "🧠 लक्षात ठेवा",
    modeMatch: "🃏 जोड्या लावा",
    cardBadge: "चित्र"
  },
  hi: {
    appTitle: "स्मृति खेल",
    scoreLabel: "स्कोर",
    voiceOn: "आवाज़: चालू",
    voiceOff: "आवाज़: बंद",
    listening: "मैं आपकी आवाज़ सुन रहा हूँ",
    voicePaused: "माइक रुका हुआ",
    sayPrompt: "बोलें: <strong>'{name}'</strong> या चित्र पर छुएं",
    hearAgain: "दोबारा सुनें",
    nextBtn: "अगला प्रश्न ➔",
    chooseGame: "खेल चुनें:",
    modeSpot: "🎯 वस्तु पहचानें",
    modeRecall: "🧠 याद रखें",
    modeMatch: "🃏 जोड़ी मिलाएं",
    cardBadge: "कार्ड"
  },

  // Assam
  as: {
    appTitle: "স্মৃতি খেল",
    scoreLabel: "নম্বৰ",
    voiceOn: "মাত: চালু",
    voiceOff: "মাত: বন্ধ",
    listening: "মই আপোনাৰ মাত শুনি আছোঁ",
    voicePaused: "মাইক বন্ধ",
    sayPrompt: "কওক: <strong>'{name}'</strong> বা ছবিত টিপক",
    hearAgain: "আকৌ শুনক",
    nextBtn: "পৰৱৰ্তী প্ৰশ্ন ➔",
    chooseGame: "খেল বাছক:",
    modeSpot: "🎯 বস্তু বাছক",
    modeRecall: "🧠 মনত ৰাখক",
    modeMatch: "🃏 জোৰা মিলাওক",
    cardBadge: "কাৰ্ড"
  },
  brx: {
    appTitle: "गोसोआव लाखिनाय गेलेनाय",
    scoreLabel: "अनजिमा",
    voiceOn: "राव: जागायबाय",
    voiceOff: "राव: बन्द",
    listening: "आं नोंथांनि रावखौ खोनासंनो दं",
    voicePaused: "माइक बन्द",
    sayPrompt: "बुं: <strong>'{name}'</strong> एबा गाहायाव थु",
    hearAgain: "आरोबाव खोनासं",
    nextBtn: "उननि सोंलु ➔",
    chooseGame: "गेलेनाय सायख':",
    modeSpot: "🎯 बेसाद दिहुन",
    modeRecall: "🧠 गोसोआव लाखि",
    modeMatch: "🃏 जरा मिलाय",
    cardBadge: "कार्ड"
  },

  // Manipur
  mni: {
    appTitle: "নীংশিং শান্নবা",
    scoreLabel: "পয়েন্ট",
    voiceOn: "খোল্লাক: য়াহল্লে",
    voiceOff: "খোল্লাক: থিংলে",
    listening: "নহাক্কী খোল্লাক তারি",
    voicePaused: "মাইক লেপলে",
    sayPrompt: "হায়বীয়ু: <strong>'{name}'</strong>",
    hearAgain: "অমুক তাউ",
    nextBtn: "তুংগী ৱাহং ➔",
    chooseGame: "শান্নবা খনবীয়ু:",
    modeSpot: "🎯 পোৎ থিবীয়ু",
    modeRecall: "🧠 নীংশিংবীয়ু",
    modeMatch: "🃏 মযোল মান্নহনবীযু",
    cardBadge: "কার্ড"
  },

  // Tripura & Bengal
  bn: {
    appTitle: "স্মৃতি খেলা",
    scoreLabel: "পয়েন্ট",
    voiceOn: "শব্দ: চালু",
    voiceOff: "শব্দ: বন্ধ",
    listening: "আমি আপনার কথা শুনছি",
    voicePaused: "মাইক বন্ধ",
    sayPrompt: "বলুন: <strong>'{name}'</strong> বা ছবিতে স্পর্শ করুন",
    hearAgain: "আবার শুনুন",
    nextBtn: "পরবর্তী প্রশ্ন ➔",
    chooseGame: "খেলা বাছুন:",
    modeSpot: "🎯 বস্তু খুঁজুন",
    modeRecall: "🧠 মনে রাখুন",
    modeMatch: "🃏 জোড়া মেলান",
    cardBadge: "কার্ড"
  },
  trp: {
    appTitle: "Khorongo Tonmung",
    scoreLabel: "Khamani",
    voiceOn: "Kok: ON",
    voiceOff: "Kok: OFF",
    listening: "Kok khna tongo",
    voicePaused: "Mic thwngo",
    sayPrompt: "Sa di: <strong>'{name}'</strong>",
    hearAgain: "Tei khna di",
    nextBtn: "Ulo tei ➔",
    chooseGame: "Kholoma di:",
    modeSpot: "🎯 Naina di",
    modeRecall: "🧠 Khorongo ton di",
    modeMatch: "🃏 Jora naina di",
    cardBadge: "Card"
  },

  // Mizoram
  lus: {
    appTitle: "Memory Game",
    scoreLabel: "Point",
    voiceOn: "Aw: ON",
    voiceOff: "Aw: OFF",
    listening: "I tawng ka ngaithla e",
    voicePaused: "Mic chawl",
    sayPrompt: "Ti rawh: <strong>'{name}'</strong>",
    hearAgain: "Ngaithla nawn",
    nextBtn: "A dawt leh ➔",
    chooseGame: "Game thlang rawh:",
    modeSpot: "🎯 Zawng rawh",
    modeRecall: "🧠 Hre reng rawh",
    modeMatch: "🃏 A inang zawng rawh",
    cardBadge: "Card"
  },

  // Meghalaya
  kha: {
    appTitle: "Ka Jingkynmaw",
    scoreLabel: "Point",
    voiceOn: "Sur: ON",
    voiceOff: "Sur: OFF",
    listening: "Nga sngap ia phi",
    voicePaused: "La pynsangeh",
    sayPrompt: "Ong: <strong>'{name}'</strong>",
    hearAgain: "Sngap biang",
    nextBtn: "Kaba bud ➔",
    chooseGame: "Jied ia ka game:",
    modeSpot: "🎯 Shem ia ka mar",
    modeRecall: "🧠 Kynmaw",
    modeMatch: "🃏 Pynsyriem",
    cardBadge: "Card"
  },
  grt: {
    appTitle: "Gisik Ra·ani Kal·ani",
    scoreLabel: "Point",
    voiceOn: "Ku·rang: ON",
    voiceOff: "Ku·rang: OFF",
    listening: "Ku·rangko knana",
    voicePaused: "Micko do·aha",
    sayPrompt: "Inbo: <strong>'{name}'</strong>",
    hearAgain: "Knatai bo",
    nextBtn: "Skanggipa ➔",
    chooseGame: "Kal·aniko seokbo:",
    modeSpot: "🎯 Am·bo",
    modeRecall: "🧠 Gisik ra·bo",
    modeMatch: "🃏 Apsangiparang",
    cardBadge: "Card"
  },

  // Sikkim
  ne: {
    appTitle: "स्मृति खेल",
    scoreLabel: "अङ्क",
    voiceOn: "आवाज: सुरु",
    voiceOff: "आवाज: बन्द",
    listening: "म तपाईंको आवाज सुन्दैछु",
    voicePaused: "माइक रोकियो",
    sayPrompt: "भन्नुहोस्: <strong>'{name}'</strong> वा छुनुहोस्",
    hearAgain: "फेरि सुन्नुहोस्",
    nextBtn: "अर्को प्रश्न ➔",
    chooseGame: "खेल छान्नुहोस्:",
    modeSpot: "🎯 वस्तु चिन्नुहोस्",
    modeRecall: "🧠 सम्झनुहोस्",
    modeMatch: "🃏 जोडी मिलाउनुहोस्",
    cardBadge: "कार्ड"
  },
  lep: {
    appTitle: "ৰোং স্মৃতি খেল",
    scoreLabel: "अङ्क",
    voiceOn: "Sur: ON",
    voiceOff: "Sur: OFF",
    listening: "Kásu shuk li",
    voicePaused: "Mic thám",
    sayPrompt: "Li o: <strong>'{name}'</strong>",
    hearAgain: "Ryu li",
    nextBtn: "স্যাক্পী ➔",
    chooseGame: "Kásu ryu:",
    modeSpot: "🎯 Shuk mat",
    modeRecall: "🧠 Sem mat",
    modeMatch: "🃏 Ríp zong",
    cardBadge: "Card"
  },
  bhu: {
    appTitle: "དྲན་ཤེས་རྩེད་མོ",
    scoreLabel: "Point",
    voiceOn: "Skad: ON",
    voiceOff: "Skad: OFF",
    listening: "Nyan gi yod",
    voicePaused: "Mic btsums song",
    sayPrompt: "Lab dang: <strong>'{name}'</strong>",
    hearAgain: "Nyan dang",
    nextBtn: "གོང་མ ➔",
    chooseGame: "Rtsed mo 'dems:",
    modeSpot: "🎯 Thsol dang",
    modeRecall: "🧠 Sem la zhog",
    modeMatch: "🃏 Dra bo",
    cardBadge: "Card"
  },

  // Nagaland
  ao: {
    appTitle: "Shisatsü Asayamung",
    scoreLabel: "Point",
    voiceOn: "O: ON",
    voiceOff: "O: OFF",
    listening: "Nang o angashidar",
    voicePaused: "Mic sota lir",
    sayPrompt: "Shiang: <strong>'{name}'</strong>",
    hearAgain: "Angashidi",
    nextBtn: "Tesülen ➔",
    chooseGame: "Asayamung shimang:",
    modeSpot: "🎯 Bushiang",
    modeRecall: "🧠 Bilemtetang",
    modeMatch: "🃏 Mesaoba bushiang",
    cardBadge: "Card"
  },
  njm: {
    appTitle: "Ketho Kemesa Game",
    scoreLabel: "Point",
    voiceOn: "O: ON",
    voiceOff: "O: OFF",
    listening: "Nko pu ngukha",
    voicePaused: "Mic thu",
    sayPrompt: "Pu die: <strong>'{name}'</strong>",
    hearAgain: "Ngukha biang",
    nextBtn: "Kevi za ➔",
    chooseGame: "Game jied:",
    modeSpot: "🎯 Ngu vi",
    modeRecall: "🧠 Kemesa",
    modeMatch: "🃏 Pu kevi",
    cardBadge: "Card"
  },
  nsm: {
    appTitle: "Akuxu Game",
    scoreLabel: "Point",
    voiceOn: "Tsa: ON",
    voiceOff: "Tsa: OFF",
    listening: "Nono pi ilo",
    voicePaused: "Mic tholo",
    sayPrompt: "Pi mlo: <strong>'{name}'</strong>",
    hearAgain: "Ntsulo",
    nextBtn: "Kughu zulo ➔",
    chooseGame: "Game thlang:",
    modeSpot: "🎯 Itha",
    modeRecall: "🧠 Kuxu",
    modeMatch: "🃏 Khughu",
    cardBadge: "Card"
  },

  // Arunachal Pradesh
  njz: {
    appTitle: "Nyishi Memory Game",
    scoreLabel: "Point",
    voiceOn: "Voice: ON",
    voiceOff: "Voice: OFF",
    listening: "No bopai",
    voicePaused: "Mic hami",
    sayPrompt: "Bopai: <strong>'{name}'</strong>",
    hearAgain: "Paka biang",
    nextBtn: "Ato nyima ➔",
    chooseGame: "Game paka:",
    modeSpot: "🎯 Nam paka",
    modeRecall: "🧠 Chini paka",
    modeMatch: "🃏 Paka to",
    cardBadge: "Card"
  },
  adi: {
    appTitle: "Adi Memory Game",
    scoreLabel: "Point",
    voiceOn: "Voice: ON",
    voiceOff: "Voice: OFF",
    listening: "No em luaika",
    voicePaused: "Mic toka",
    sayPrompt: "Luaika: <strong>'{name}'</strong>",
    hearAgain: "Aibe luaika",
    nextBtn: "Aibelo ➔",
    chooseGame: "Game toka:",
    modeSpot: "🎯 Pa toka",
    modeRecall: "🧠 Mitpan toka",
    modeMatch: "🃏 Aibe toka",
    cardBadge: "Card"
  },
  gal: {
    appTitle: "Galo Memory Game",
    scoreLabel: "Point",
    voiceOn: "Voice: ON",
    voiceOff: "Voice: OFF",
    listening: "No em luaika",
    voicePaused: "Mic laku",
    sayPrompt: "Luaika: <strong>'{name}'</strong>",
    hearAgain: "Aibe tula",
    nextBtn: "Aibe laku ➔",
    chooseGame: "Game to:",
    modeSpot: "🎯 Pa laku",
    modeRecall: "🧠 Minam to",
    modeMatch: "🃏 Aibe to",
    cardBadge: "Card"
  }
};

class SimpleMindBloomApp {
  constructor() {
    this.sessionId = null;
    this.currentMode = 'spot_and_name';
    this.currentLang = 'en';
    this.currentRound = null;
    this.score = 0;
    this.isProcessing = false;
    this.recallSelected = new Set();
    this.recallTimer = null;
    this.cardPair = [];

    this.initDOM();
    this.initEvents();
    this.initVoice();
    this.startSession();
  }

  initDOM() {
    // Header
    this.appTitle = document.getElementById('appTitle');
    this.scoreLabel = document.getElementById('scoreLabel');
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.soundIcon = document.getElementById('soundIcon');
    this.soundText = document.getElementById('soundText');
    this.gameScore = document.getElementById('gameScore');
    this.langButtons = document.querySelectorAll('.lang-chip, .lang-btn');
    this.nerLanguageSelect = document.getElementById('nerLanguageSelect');

    // Voice Banner
    this.micCircle = document.getElementById('micCircle');
    this.voiceStatus = document.getElementById('voiceStatus');
    this.voiceTranscript = document.getElementById('voiceTranscript');

    // Question Box
    this.mainQuestion = document.getElementById('mainQuestion');
    this.simpleHint = document.getElementById('simpleHint');
    this.hearAgainBtn = document.getElementById('hearAgainBtn');
    this.hearAgainText = document.getElementById('hearAgainText');

    // Board
    this.memoryNotice = document.getElementById('memoryNotice');
    this.memoryNoticeText = document.getElementById('memoryNoticeText');
    this.cardsGrid = document.getElementById('cardsGrid');
    this.feedbackBanner = document.getElementById('feedbackBanner');
    this.feedbackEmoji = document.getElementById('feedbackEmoji');
    this.feedbackText = document.getElementById('feedbackText');

    // Bottom
    this.nextBtn = document.getElementById('nextBtn');
    this.nextBtnText = document.getElementById('nextBtnText');
    this.chooseGameLabel = document.getElementById('chooseGameLabel');
    this.modePills = document.querySelectorAll('.mode-pill');
    this.modeSpot = document.getElementById('modeSpot');
    this.modeRecall = document.getElementById('modeRecall');
    this.modeMatch = document.getElementById('modeMatch');
  }

  initEvents() {
    // Primary Languages (English, Marathi, Hindi)
    this.langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (this.nerLanguageSelect) this.nerLanguageSelect.value = "";
        const lang = btn.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });

    // North East States Dropdown
    if (this.nerLanguageSelect) {
      this.nerLanguageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        if (lang) {
          this.langButtons.forEach(b => b.classList.remove('active'));
          this.setLanguage(lang);
        }
      });
    }

    // Sound Toggle
    this.soundToggleBtn.addEventListener('click', () => {
      window.voiceEngine.voiceEnabled = !window.voiceEngine.voiceEnabled;
      const on = window.voiceEngine.voiceEnabled;
      this.soundToggleBtn.classList.toggle('active', on);
      this.soundIcon.textContent = on ? '🔊' : '🔇';
      const ui = this.getUIStrings();
      this.soundText.textContent = on ? ui.voiceOn : ui.voiceOff;
      if (!on && window.speechSynthesis) window.speechSynthesis.cancel();
    });

    // Hear Again
    this.hearAgainBtn.addEventListener('click', () => {
      if (this.currentRound && this.currentRound.tts_prompt) {
        window.voiceEngine.speak(this.currentRound.tts_prompt);
      }
    });

    // Next Question
    this.nextBtn.addEventListener('click', () => {
      this.loadRound();
    });

    // Game Mode Pills
    this.modePills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.modePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.currentMode = pill.getAttribute('data-mode');
        this.loadRound();
      });
    });
  }

  getUIStrings() {
    return UI_STRINGS[this.currentLang] || UI_STRINGS['en'];
  }

  setLanguage(langKey) {
    this.currentLang = langKey;
    window.voiceEngine.setLanguage(langKey);
    this.updateUILanguage();
    this.loadRound();
  }

  updateUILanguage() {
    const ui = this.getUIStrings();
    this.appTitle.textContent = ui.appTitle;
    this.scoreLabel.textContent = ui.scoreLabel;
    this.soundText.textContent = window.voiceEngine.voiceEnabled ? ui.voiceOn : ui.voiceOff;
    this.hearAgainText.textContent = ui.hearAgain;
    this.nextBtnText.textContent = ui.nextBtn;
    this.chooseGameLabel.textContent = ui.chooseGame;
    this.modeSpot.textContent = ui.modeSpot;
    this.modeRecall.textContent = ui.modeRecall;
    this.modeMatch.textContent = ui.modeMatch;
  }

  initVoice() {
    window.voiceEngine.onStatusChangeCallback = (statusText, isListening) => {
      const ui = this.getUIStrings();
      this.voiceStatus.textContent = isListening ? ui.listening : ui.voicePaused;
      if (this.micCircle) {
        this.micCircle.style.background = isListening ? "#10b981" : "#475569";
      }
    };

    window.voiceEngine.onTranscriptCallback = (text, isFinal) => {
      this.voiceTranscript.innerHTML = `You said: <strong>"${text}"</strong>`;
      if (isFinal) {
        this.handleVoiceCommand(text);
      }
    };

    // Auto-listen on first tap
    document.addEventListener('click', () => {
      if (!window.voiceEngine.isListening && window.voiceEngine.recognition) {
        window.voiceEngine.startListening();
      }
    }, { once: true });
  }

  async startSession() {
    try {
      const res = await fetch('/api/session/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_name: 'Friend', initial_mode: this.currentMode, lang: this.currentLang })
      });
      const data = await res.json();
      this.sessionId = data.session_id;
    } catch (e) {
      this.sessionId = `session_${Date.now()}`;
    }
    this.loadRound();
  }

  async loadRound() {
    this.isProcessing = false;
    this.recallSelected.clear();
    this.cardPair = [];
    this.feedbackBanner.classList.add('hidden');
    this.memoryNotice.classList.add('hidden');

    try {
      const res = await fetch('/api/game/generate-round', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: this.sessionId,
          mode: this.currentMode,
          lang: this.currentLang,
          difficulty: 1
        })
      });
      const data = await res.json();
      this.currentRound = data.round;
      this.renderRound();
    } catch (e) {
      console.error(e);
    }
  }

  renderRound() {
    if (!this.currentRound) return;

    if (this.currentMode === 'spot_and_name') {
      this.renderSpot();
    } else if (this.currentMode === 'memory_recall') {
      this.renderRecall();
    } else if (this.currentMode === 'card_match') {
      this.renderMatch();
    }
  }

  /* =========================================================
     Mode 1: Spot the Item
     ========================================================= */

  renderSpot() {
    const target = this.currentRound.target_item;
    const ui = this.getUIStrings();

    this.mainQuestion.textContent = this.currentRound.instruction;
    this.simpleHint.textContent = this.currentRound.subtext;
    this.voiceTranscript.innerHTML = ui.sayPrompt.replace('{name}', target.name);
    window.voiceEngine.speak(this.currentRound.tts_prompt);

    this.cardsGrid.innerHTML = '';
    const choices = this.currentRound.choices || [];
    choices.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'big-card';
      card.setAttribute('data-id', item.id);
      card.setAttribute('data-index', idx + 1);

      card.innerHTML = `
        <span class="big-card-number">${ui.cardBadge} ${idx + 1}</span>
        <div class="big-card-emoji">${item.emoji}</div>
        <div class="big-card-label">${item.name}</div>
      `;

      card.addEventListener('click', () => this.checkSpotAnswer(item.id, card));
      this.cardsGrid.appendChild(card);
    });
  }

  async checkSpotAnswer(selectedId, cardElement) {
    if (this.isProcessing) return;
    this.isProcessing = true;

    const isCorrect = (selectedId === this.currentRound.target_id);
    const praise = this.currentRound.praise || "Wonderful job!";
    const tryAgain = this.currentRound.try_again || "Try again!";

    if (isCorrect) {
      if (cardElement) cardElement.classList.add('card-success');
      window.voiceEngine.playChimeSuccess();
      this.score += 100;
      this.gameScore.textContent = this.score;

      this.feedbackEmoji.textContent = '🌟';
      this.feedbackText.textContent = praise;
      this.feedbackBanner.classList.remove('hidden');
      window.voiceEngine.speak(praise);
    } else {
      if (cardElement) {
        cardElement.classList.add('card-retry');
        setTimeout(() => cardElement.classList.remove('card-retry'), 600);
      }
      window.voiceEngine.playGentleBeep();
      this.feedbackEmoji.textContent = '💡';
      this.feedbackText.textContent = tryAgain;
      this.feedbackBanner.classList.remove('hidden');
      window.voiceEngine.speak(tryAgain);
      this.isProcessing = false;
    }
  }

  /* =========================================================
     Mode 2: Remember Items
     ========================================================= */

  renderRecall() {
    const ui = this.getUIStrings();
    this.mainQuestion.textContent = this.currentRound.instruction;
    this.simpleHint.textContent = this.currentRound.subtext;
    this.memoryNotice.textContent = this.currentRound.subtext;
    this.memoryNotice.classList.remove('hidden');
    window.voiceEngine.speak(this.currentRound.tts_prompt);

    this.cardsGrid.innerHTML = '';
    const targets = this.currentRound.target_items || [];
    targets.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'big-card card-success';
      card.innerHTML = `
        <span class="big-card-number">${ui.cardBadge} ${idx + 1}</span>
        <div class="big-card-emoji">${item.emoji}</div>
        <div class="big-card-label">${item.name}</div>
      `;
      this.cardsGrid.appendChild(card);
    });

    clearTimeout(this.recallTimer);
    this.recallTimer = setTimeout(() => {
      this.showRecallChoices();
    }, 5000);
  }

  showRecallChoices() {
    const ui = this.getUIStrings();
    this.memoryNotice.classList.add('hidden');
    this.mainQuestion.textContent = this.currentRound.recall_prompt;
    this.simpleHint.textContent = ui.sayPrompt.replace('{name}', '');
    window.voiceEngine.speak(this.currentRound.recall_prompt);

    this.cardsGrid.innerHTML = '';
    const choices = this.currentRound.choices || [];
    choices.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'big-card';
      card.setAttribute('data-id', item.id);

      card.innerHTML = `
        <span class="big-card-number">${ui.cardBadge} ${idx + 1}</span>
        <div class="big-card-emoji">${item.emoji}</div>
        <div class="big-card-label">${item.name}</div>
      `;

      card.addEventListener('click', () => {
        if (this.currentRound.target_ids.includes(item.id)) {
          this.recallSelected.add(item.id);
          card.classList.add('card-success');
          window.voiceEngine.playGentleBeep();

          if (this.recallSelected.size === this.currentRound.target_ids.length) {
            window.voiceEngine.playChimeSuccess();
            this.score += 100;
            this.gameScore.textContent = this.score;
            this.feedbackEmoji.textContent = '🎉';
            this.feedbackText.textContent = this.currentRound.recall_success;
            this.feedbackBanner.classList.remove('hidden');
            window.voiceEngine.speak(this.currentRound.recall_success);
          }
        } else {
          card.classList.add('card-retry');
          setTimeout(() => card.classList.remove('card-retry'), 600);
          window.voiceEngine.speak(this.currentRound.try_again || "Try another one!");
        }
      });

      this.cardsGrid.appendChild(card);
    });
  }

  /* =========================================================
     Mode 3: Match Pairs
     ========================================================= */

  renderMatch() {
    const ui = this.getUIStrings();
    this.mainQuestion.textContent = this.currentRound.instruction;
    this.simpleHint.textContent = this.currentRound.subtext;
    window.voiceEngine.speak(this.currentRound.tts_prompt);

    this.cardsGrid.innerHTML = '';
    const cards = this.currentRound.cards || [];
    let matchedCount = 0;

    cards.forEach((c) => {
      const card = document.createElement('div');
      card.className = 'big-card';
      card.setAttribute('data-card-index', c.card_index);

      card.innerHTML = `
        <span class="big-card-number">${ui.cardBadge} ${c.card_index}</span>
        <div class="card-question-mark">❓</div>
        <div class="big-card-label">${ui.cardBadge} ${c.card_index}</div>
      `;

      card.addEventListener('click', () => {
        if (card.classList.contains('card-success') || this.cardPair.length >= 2) return;

        window.voiceEngine.playCardFlipSound();
        card.innerHTML = `
          <span class="big-card-number">${ui.cardBadge} ${c.card_index}</span>
          <div class="big-card-emoji">${c.emoji}</div>
          <div class="big-card-label">${c.name}</div>
        `;
        this.cardPair.push({ data: c, el: card });

        if (this.cardPair.length === 2) {
          const [first, second] = this.cardPair;
          if (first.data.item_id === second.data.item_id) {
            first.el.classList.add('card-success');
            second.el.classList.add('card-success');
            window.voiceEngine.playChimeSuccess();
            matchedCount += 1;
            this.cardPair = [];

            if (matchedCount >= this.currentRound.total_pairs) {
              this.score += 100;
              this.gameScore.textContent = this.score;
              this.feedbackEmoji.textContent = '🏆';
              this.feedbackText.textContent = this.currentRound.match_all_done;
              this.feedbackBanner.classList.remove('hidden');
              window.voiceEngine.speak(this.currentRound.match_all_done);
            } else {
              const pairMsg = (this.currentRound.pair_praise_template || "Great match! {name}!").replace('{name}', first.data.name);
              window.voiceEngine.speak(pairMsg);
            }
          } else {
            setTimeout(() => {
              first.el.innerHTML = `
                <span class="big-card-number">${ui.cardBadge} ${first.data.card_index}</span>
                <div class="card-question-mark">❓</div>
                <div class="big-card-label">${ui.cardBadge} ${first.data.card_index}</div>
              `;
              second.el.innerHTML = `
                <span class="big-card-number">${ui.cardBadge} ${second.data.card_index}</span>
                <div class="card-question-mark">❓</div>
                <div class="big-card-label">${ui.cardBadge} ${second.data.card_index}</div>
              `;
              this.cardPair = [];
            }, 1000);
          }
        }
      });

      this.cardsGrid.appendChild(card);
    });
  }

  /* =========================================================
     Voice Command Processing
     ========================================================= */

  async handleVoiceCommand(transcript) {
    try {
      const res = await fetch('/api/voice/process-command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript: transcript,
          lang: this.currentLang
        })
      });
      const data = await res.json();
      const parsed = data.parsed;

      if (parsed.intent === 'next_round') {
        this.loadRound();
      } else if (parsed.intent === 'repeat_instruction') {
        this.hearAgainBtn.click();
      } else if (parsed.intent === 'select_card_index' && parsed.matched_card_index) {
        const card = document.querySelector(`.big-card[data-index="${parsed.matched_card_index}"], .big-card[data-card-index="${parsed.matched_card_index}"]`);
        if (card) card.click();
      } else if (parsed.intent === 'select_item' && parsed.matched_item_id) {
        const card = document.querySelector(`.big-card[data-id="${parsed.matched_item_id}"]`);
        if (card) card.click();
      }
    } catch (e) {
      console.warn("Voice command processing:", e);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new SimpleMindBloomApp();
});
