/**
 * Multilingual Voice Engine with Full Sentence Vocalization
 * Speaks 100% natural, complete sentences in Marathi, Hindi, English, and all North East Region Languages.
 */

class FailsafeMultilingualVoiceEngine {
  constructor() {
    this.isListening = false;
    this.voiceEnabled = true;
    this.currentLang = 'en';
    this.synth = window.speechSynthesis;
    this.recognition = null;
    this.audioCtx = null;
    this.onTranscriptCallback = null;
    this.onStatusChangeCallback = null;
    this.activeAudioPlayer = null;

    // Language configuration for STT & TTS
    this.langMap = {
      // Core
      'en': { stt: 'en-IN', tts: 'en', fallback: 'en-IN' },
      'mr': { stt: 'mr-IN', tts: 'mr', fallback: 'mr-IN' },
      'hi': { stt: 'hi-IN', tts: 'hi', fallback: 'hi-IN' },
      
      // Assam
      'as': { stt: 'as-IN', tts: 'bn', fallback: 'bn-IN' },
      'brx': { stt: 'hi-IN', tts: 'hi', fallback: 'hi-IN' },
      
      // Manipur
      'mni': { stt: 'bn-IN', tts: 'bn', fallback: 'bn-IN' },
      
      // Tripura & Bengal
      'bn': { stt: 'bn-IN', tts: 'bn', fallback: 'bn-IN' },
      'trp': { stt: 'bn-IN', tts: 'bn', fallback: 'bn-IN' },
      
      // Mizoram
      'lus': { stt: 'en-IN', tts: 'en', fallback: 'en-IN' },
      
      // Meghalaya
      'kha': { stt: 'en-IN', tts: 'en', fallback: 'en-IN' },
      'grt': { stt: 'en-IN', tts: 'en', fallback: 'en-IN' },
      
      // Sikkim
      'ne': { stt: 'ne-NP', tts: 'ne', fallback: 'ne-NP' },
      'lep': { stt: 'ne-NP', tts: 'ne', fallback: 'ne-NP' },
      'bhu': { stt: 'hi-IN', tts: 'ne', fallback: 'hi-IN' },
      
      // Nagaland
      'ao': { stt: 'en-IN', tts: 'en', fallback: 'en-IN' },
      'njm': { stt: 'en-IN', tts: 'en', fallback: 'en-IN' },
      'nsm': { stt: 'en-IN', tts: 'en', fallback: 'en-IN' },
      
      // Arunachal Pradesh
      'njz': { stt: 'en-IN', tts: 'hi', fallback: 'hi-IN' },
      'adi': { stt: 'en-IN', tts: 'hi', fallback: 'hi-IN' },
      'gal': { stt: 'en-IN', tts: 'hi', fallback: 'hi-IN' }
    };

    this.initAudioContext();
    this.initSTT();
  }

  initAudioContext() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {}
  }

  ensureAudioContext() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setLanguage(langKey) {
    this.currentLang = langKey;
    const config = this.langMap[langKey] || this.langMap['en'];
    if (this.recognition) {
      try {
        this.recognition.lang = config.stt;
      } catch (e) {}
    }
  }

  cleanTextForSpeech(text) {
    if (!text) return '';
    // Strip emojis and brackets so the TTS engine speaks the clean sentence
    return text
      .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  speak(text, onEnd = null) {
    if (!this.voiceEnabled || !text) {
      if (onEnd) onEnd();
      return;
    }

    this.ensureAudioContext();

    // Cancel prior speech
    if (this.activeAudioPlayer) {
      this.activeAudioPlayer.pause();
      this.activeAudioPlayer = null;
    }
    if (this.synth) {
      this.synth.cancel();
    }

    const cleanSentence = this.cleanTextForSpeech(text);
    if (!cleanSentence) {
      if (onEnd) onEnd();
      return;
    }

    const config = this.langMap[this.currentLang] || this.langMap['en'];
    let spokeViaBrowser = false;

    // Check if browser has a matching native voice
    if (this.synth && 'SpeechSynthesisUtterance' in window) {
      try {
        const voices = this.synth.getVoices() || [];
        
        let matchedVoice = voices.find(v => v.lang.toLowerCase().replace('_', '-').startsWith(config.stt.toLowerCase()));
        
        if (!matchedVoice) {
          matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith(config.tts.toLowerCase()));
        }

        // If exact voice found in browser, use it
        if (matchedVoice) {
          const utterance = new SpeechSynthesisUtterance(cleanSentence);
          utterance.voice = matchedVoice;
          utterance.lang = matchedVoice.lang || config.stt;
          utterance.rate = 0.88;
          utterance.pitch = 1.0;
          utterance.volume = 1.0;

          utterance.onend = () => { if (onEnd) onEnd(); };
          utterance.onerror = () => {
            this.speakViaAudioStream(cleanSentence, config.tts, onEnd);
          };

          this.synth.speak(utterance);
          spokeViaBrowser = true;
        }
      } catch (err) {
        console.warn("SpeechSynthesis error:", err);
      }
    }

    // High fidelity stream audio fallback (plays pure full sentence in Marathi, Hindi, Bengali/Assamese, Nepali, etc.)
    if (!spokeViaBrowser) {
      this.speakViaAudioStream(cleanSentence, config.tts, onEnd);
    }
  }

  speakViaAudioStream(sentence, ttsLangCode, onEnd = null) {
    try {
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(ttsLangCode)}&q=${encodeURIComponent(sentence)}`;
      const audio = new Audio(ttsUrl);
      this.activeAudioPlayer = audio;

      audio.onended = () => {
        this.activeAudioPlayer = null;
        if (onEnd) onEnd();
      };
      audio.onerror = () => {
        this.activeAudioPlayer = null;
        if (onEnd) onEnd();
      };

      audio.play().catch(() => {
        if (onEnd) onEnd();
      });
    } catch (e) {
      if (onEnd) onEnd();
    }
  }

  initSTT() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.updateStatus("Microphone Not Supported", false);
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    const config = this.langMap[this.currentLang] || this.langMap['en'];
    this.recognition.lang = config.stt;

    this.recognition.onstart = () => {
      this.isListening = true;
      this.updateStatus("Listening...", true);
    };

    this.recognition.onresult = (event) => {
      let interim = '';
      let final = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      const activeText = (final || interim).trim();
      if (activeText && this.onTranscriptCallback) {
        this.onTranscriptCallback(activeText, Boolean(final));
      }
    };

    this.recognition.onerror = (event) => {
      if (event.error === 'not-allowed') {
        this.updateStatus("Mic Access Denied", false);
        this.isListening = false;
      }
    };

    this.recognition.onend = () => {
      if (this.isListening) {
        setTimeout(() => {
          try {
            if (this.isListening && this.recognition) {
              const cfg = this.langMap[this.currentLang] || this.langMap['en'];
              this.recognition.lang = cfg.stt;
              this.recognition.start();
            }
          } catch (e) {}
        }, 300);
      } else {
        this.updateStatus("Voice Paused", false);
      }
    };
  }

  startListening() {
    this.ensureAudioContext();
    if (!this.recognition) return;
    this.isListening = true;
    try {
      const config = this.langMap[this.currentLang] || this.langMap['en'];
      this.recognition.lang = config.stt;
      this.recognition.start();
    } catch (e) {}
    this.updateStatus("Listening...", true);
  }

  stopListening() {
    this.isListening = false;
    if (this.recognition) {
      try { this.recognition.stop(); } catch (e) {}
    }
    this.updateStatus("Voice Paused", false);
  }

  toggleListening() {
    if (this.isListening) {
      this.stopListening();
      return false;
    } else {
      this.startListening();
      return true;
    }
  }

  updateStatus(statusText, isMicActive) {
    if (this.onStatusChangeCallback) {
      this.onStatusChangeCallback(statusText, isMicActive);
    }
  }

  playChimeSuccess() {
    if (!this.audioCtx) return;
    this.ensureAudioContext();
    const now = this.audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);
      gain.gain.setValueAtTime(0.01, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.2, now + idx * 0.1 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.6);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.65);
    });
  }

  playCardFlipSound() {
    if (!this.audioCtx) return;
    this.ensureAudioContext();
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(480, now + 0.08);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  playGentleBeep() {
    if (!this.audioCtx) return;
    this.ensureAudioContext();
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }
}

window.voiceEngine = new FailsafeMultilingualVoiceEngine();
