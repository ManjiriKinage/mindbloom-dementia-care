/**
 * Senior Memory Game & Clinical Dementia Care Platform App Coordinator
 * Full Native UI & Full-Sentence Voice Engine for all Indian States & Regional Languages
 * Doctor-Grade AI Adaptive Level, Cognitive Assessment Engine (MoCA/MMSE), & Senior Jigsaw Visuospatial Therapy
 */

const UI_STRINGS = {
  // Core
  en: {
    appTitle: "MindBloom",
    appSubtitle: "NER Dementia Cognitive Care",
    scoreLabel: "Score",
    voiceOn: "Voice: ON",
    voiceOff: "Voice: OFF",
    listening: "I am listening to you",
    voicePaused: "Microphone Paused",
    sayPrompt: "Say: <strong>'{name}'</strong> or tap picture",
    hearAgain: "Hear Again",
    nextBtn: "Next Question ➔",
    chooseGame: "Cognitive Stimulation Modules:",
    modeSpot: "🎯 Spot Item (Naming)",
    modeRecall: "🧠 Remember (Recall)",
    modeMatch: "🃏 Match Pairs (Working Memory)",
    modeRoutine: "🌅 Routine (Orientation)",
    modePuzzle: "🧩 Jigsaw (Visuospatial)",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Reminders",
    langHeading: "भाषा / Regional Language:",
    lblAdaptiveMode: "Adaptive Mode:",
    lblReactionSpeed: "Reaction Speed:",
    lblDementiaRisk: "Dementia Risk:",
    riskNormal: "Normal / Preserved",
    riskMci: "Early MCI Risk",
    riskMod: "Moderate Dementia Risk",
    riskHigh: "High Dementia Risk / Assisted Care",
    levelBadge1: "Level 1: Preserved",
    levelBadge2: "Level 2: Mild Decline",
    levelBadge3: "Level 3: Moderate Risk",
    levelBadge4: "Level 4: Assisted Care",
    puzzleThemeLabel: "🖼️ Choose Picture:",
    teaGarden: "🍵 Tea Garden",
    templeBell: "🛕 Temple Bell",
    kopouOrchid: "🌺 Kopou Orchid",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Assist Guide",
    shuffleBtn: "🔀 Shuffle Pieces",
    ghostBtn: "💡 Toggle Ghost Outline",
    restartBtn: "↻ Restart Puzzle",
    memoryNotice: "Look carefully at these items and remember them...",
    memoryRecallNow: "Which items did you see? Tap them below!",
    praiseDefault: "Wonderful job! You found it!",
    tryAgainDefault: "Take your time, please try again!",
    doctorModalTitle: "🩺 Clinical Cognitive & Dementia Assessment",
    doctorModalSubtitle: "AI Screening Report (MoCA/MMSE Framework for NER Healthcare)",
    doctorModalDone: "Close Dashboard",
    printReport: "🖨️ Print Clinical Report",
    remindersModalTitle: "⏰ Daily Routine & Elderly Care Reminders",
    remindersModalSubtitle: "Medicines, Hydration & Daily Activity Assistant",
    waterTrackerTitle: "Daily Hydration Tracker",
    waterTrackerSub: "Crucial for preventing delirium and cognitive confusion",
    logWaterBtn: "+ Log 1 Glass of Water Drank",
    scheduleTitle: "🕒 Today's Schedule",
    remindersDone: "Done"
  },
  mr: {
    appTitle: "माइंडब्लूम",
    appSubtitle: "ज्येष्ठ नागरिक स्मरण व डिमेंशिया काळजी",
    scoreLabel: "गुण",
    voiceOn: "आवाज: सुरू",
    voiceOff: "आवाज: बंद",
    listening: "मी तुमचे ऐकत आहे",
    voicePaused: "माईक थांबवला",
    sayPrompt: "बोला: <strong>'{name}'</strong> किंवा चित्रावर दाबा",
    hearAgain: "पुन्हा ऐका",
    nextBtn: "पुढील प्रश्न ➔",
    chooseGame: "संज्ञानात्मक खेळ निवडा:",
    modeSpot: "🎯 वस्तू ओळखा",
    modeRecall: "🧠 लक्षात ठेवा",
    modeMatch: "🃏 जोड्या लावा",
    modeRoutine: "🌅 दिनचर्या ओळखा",
    modePuzzle: "🧩 जिगसॉ पझल",
    cardBadge: "चित्र",
    doctorBtnText: "वैद्यकीय अहवाल",
    remindersBtnText: "स्मरणपत्रे",
    langHeading: "भाषा निवडा:",
    lblAdaptiveMode: "अनुकूलित स्तर:",
    lblReactionSpeed: "प्रतिक्रिया वेग:",
    lblDementiaRisk: "डिमेंशिया जोखीम:",
    riskNormal: "सामान्य / उत्तम स्मृती",
    riskMci: "सौम्य स्मृती घट (MCI)",
    riskMod: "मध्यम जोखीम",
    riskHigh: "साहाय्यक काळजी",
    levelBadge1: "स्तर १: उत्तम",
    levelBadge2: "स्तर २: सौम्य घट",
    levelBadge3: "स्तर ३: मध्यम जोखीम",
    levelBadge4: "स्तर ४: साहाय्यक काळजी",
    puzzleThemeLabel: "🖼️ चित्र निवडा:",
    teaGarden: "🍵 चहाची बाग",
    templeBell: "🛕 मंदिराची घंटा",
    kopouOrchid: "🌺 कोपौ ऑर्किड",
    moves: "चाली",
    time: "वेळ",
    pieces: "तुकडे",
    assistGuide: "मदत गाइड",
    shuffleBtn: "🔀 तुकडे पसरा",
    ghostBtn: "💡 मार्गदर्शक चित्र",
    restartBtn: "↻ पुन्हा सुरू करा",
    memoryNotice: "या वस्तू नीट पहा आणि लक्षात ठेवा...",
    memoryRecallNow: "तुम्ही कोणत्या वस्तू पाहिल्या होत्या? खाली निवडा!",
    praiseDefault: "खूप छान! तुम्ही बरोबर ओळखले!",
    tryAgainDefault: "सावकाश करा, पुन्हा एकदा प्रयत्न करा!",
    doctorModalTitle: "🩺 संज्ञानात्मक व डिमेंशिया मूल्यांकन अहवाल",
    doctorModalSubtitle: "AI स्क्रिनिंग अहवाल (MoCA/MMSE मानकानुसार)",
    doctorModalDone: "डॅशबोर्ड बंद करा",
    printReport: "🖨️ अहवाल प्रिंट करा",
    remindersModalTitle: "⏰ दिनचर्या आणि औषध स्मरणपत्रे",
    remindersModalSubtitle: "औषधे, पाणी आणि दैनंदिन दिनचर्या",
    waterTrackerTitle: "दैनिक पाणी ट्रॅकर",
    waterTrackerSub: "भ्रम आणि अशक्तपणा टाळण्यासाठी पाणी आवश्यक आहे",
    logWaterBtn: "+ १ ग्लास पाणी प्यायल्याची नोंद करा",
    scheduleTitle: "🕒 आजचे वेळापत्रक",
    remindersDone: "पूर्ण झाले"
  },
  hi: {
    appTitle: "माइंडब्लूम",
    appSubtitle: "स्मृति एवं डिमेंशिया देखभाल",
    scoreLabel: "स्कोर",
    voiceOn: "आवाज़: चालू",
    voiceOff: "आवाज़: बंद",
    listening: "मैं आपकी आवाज़ सुन रहा हूँ",
    voicePaused: "माइक रुका हुआ",
    sayPrompt: "बोलें: <strong>'{name}'</strong> या चित्र पर छुएं",
    hearAgain: "दोबारा सुनें",
    nextBtn: "अगला प्रश्न ➔",
    chooseGame: "खेल मॉड्यूल चुनें:",
    modeSpot: "🎯 वस्तु पहचानें",
    modeRecall: "🧠 याद रखें",
    modeMatch: "🃏 जोड़ी मिलाएं",
    modeRoutine: "🌅 दिनचर्या पहचानें",
    modePuzzle: "🧩 जिगसॉ पहेली",
    cardBadge: "कार्ड",
    doctorBtnText: "डॉक्टर रिपोर्ट",
    remindersBtnText: "रिमाइंडर",
    langHeading: "भाषा चुनें:",
    lblAdaptiveMode: "अनुकूली स्तर:",
    lblReactionSpeed: "प्रतिक्रिया गति:",
    lblDementiaRisk: "डिमेंशिया जोखिम:",
    riskNormal: "सामान्य / उत्तम स्मृति",
    riskMci: "प्रारंभिक एमसीआई",
    riskMod: "मध्यम जोखिम",
    riskHigh: "सहायक देखभाल",
    levelBadge1: "स्तर 1: सुरक्षित",
    levelBadge2: "स्तर 2: हल्का प्रभाव",
    levelBadge3: "स्तर 3: मध्यम जोखिम",
    levelBadge4: "स्तर 4: सहायक देखभाल",
    puzzleThemeLabel: "🖼️ चित्र चुनें:",
    teaGarden: "🍵 चाय का बागान",
    templeBell: "🛕 मंदिर की घंटी",
    kopouOrchid: "🌺 कपौ आर्किड",
    moves: "चालें",
    time: "समय",
    pieces: "टुकड़े",
    assistGuide: "सहायता गाइड",
    shuffleBtn: "🔀 टुकड़े बिखेरें",
    ghostBtn: "💡 रूपरेखा दिखाएं",
    restartBtn: "↻ दोबारा शुरू करें",
    memoryNotice: "इन वस्तुओं को ध्यान से देखें और याद रखें...",
    memoryRecallNow: "आपने कौन-सी वस्तुएं देखी थीं? नीचे छुएं!",
    praiseDefault: "बहुत बढ़िया! आपने बिल्कुल सही पहचाना!",
    tryAgainDefault: "आराम से दोबारा कोशिश करें!",
    doctorModalTitle: "🩺 संज्ञानात्मक एवं डिमेंशिया क्लिनिकल रिपोर्ट",
    doctorModalSubtitle: "AI स्क्रीनिंग रिपोर्ट (MoCA/MMSE मानक)",
    doctorModalDone: "डैशबोर्ड बंद करें",
    printReport: "🖨️ क्लिनिकल रिपोर्ट प्रिंट करें",
    remindersModalTitle: "⏰ दिनचर्या एवं दवा रिमाइंडर",
    remindersModalSubtitle: "दवाएं, जलपान एवं दैनिक गतिविधियां",
    waterTrackerTitle: "दैनिक जलपान ट्रैकर",
    waterTrackerSub: "स्मृति भ्रम से बचाव हेतु पर्याप्त पानी आवश्यक है",
    logWaterBtn: "+ 1 ग्लास पानी पीने का रिकॉर्ड करें",
    scheduleTitle: "🕒 आज की अनुसूची",
    remindersDone: "पूर्ण"
  },

  // Assam
  as: {
    appTitle: "মাইণ্ডব্লুম",
    appSubtitle: "স্মৃতি আৰু ডিমেনচিয়া যত্ন",
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
    modeRoutine: "🌅 ৰুটিন চিনাক্ত",
    modePuzzle: "🧩 ছবি জোৰা (পাজল)",
    cardBadge: "কাৰ্ড",
    doctorBtnText: "চিকিৎসক প্ৰতিবেদন",
    remindersBtnText: "স্মাৰক",
    langHeading: "ভাষা বাছক:",
    lblAdaptiveMode: "অভিযোজন স্তৰ:",
    lblReactionSpeed: "প্ৰতিক্ৰিয়াৰ গতি:",
    lblDementiaRisk: "ডিমেনচিয়া আশংকা:",
    riskNormal: "স্বাভাৱিক / সংৰক্ষিত",
    riskMci: "প্ৰাৰম্ভিক ক্ষয় (MCI)",
    riskMod: "মধ্যমীয়া আশংকা",
    riskHigh: "সহায়ক যত্ন",
    levelBadge1: "স্তৰ ১: সংৰক্ষিত",
    levelBadge2: "স্তৰ ২: মৃদু ক্ষয়",
    levelBadge3: "স্তৰ ৩: মধ্যমীয়া আশংকা",
    levelBadge4: "স্তৰ ৪: সহায়ক যত্ন",
    puzzleThemeLabel: "🖼️ ছবি বাছক:",
    teaGarden: "🍵 চাহ বাগান",
    templeBell: "🛕 মন্দিৰৰ ঘণ্টা",
    kopouOrchid: "🌺 কপৌ ফুল",
    moves: "পদক্ষেপ",
    time: "সময়",
    pieces: "টুকৰা",
    assistGuide: "সহায়ক গাইড",
    shuffleBtn: "🔀 খেলিমেলি কৰক",
    ghostBtn: "💡 অস্পষ্ট ছবি চাওক",
    restartBtn: "↻ পুনৰ আৰম্ভ কৰক",
    memoryNotice: "এই বস্তুবোৰ মনোযোগেৰে চাওক আৰু মনত ৰাখক...",
    memoryRecallNow: "আপুনি কি কি বস্তু দেখিছিল? তলত বাছক!",
    praiseDefault: "বৰ ধুনীয়া! আপুনি সঠিককৈ বাছিলে!",
    tryAgainDefault: "লাহে লাহে চেষ্টা কৰক, আকৌ চাওক!",
    doctorModalTitle: "🩺 ডিমেনচিয়া মূল্যায়ন আৰু চিকিৎসা প্ৰতিবেদন",
    doctorModalSubtitle: "AI পৰীক্ষা প্ৰতিবেদন (MoCA/MMSE পদ্ধতি)",
    doctorModalDone: "বন্ধ কৰক",
    printReport: "🖨️ প্ৰতিবেদন প্ৰিণ্ট কৰক",
    remindersModalTitle: "⏰ দিনচৰ্যা আৰু ঔষধ স্মাৰক",
    remindersModalSubtitle: "ঔষধ, পানী আৰু দৈনিক কামৰ তালিকা",
    waterTrackerTitle: "দৈনিক পানী খোৱাৰ হিচাপ",
    waterTrackerSub: "মানসিক বিভ্ৰান্তি ৰোধ কৰিবলৈ পানী অতি প্ৰয়োজন",
    logWaterBtn: "+ ১ গিলাচ পানী খোৱা লিপিবদ্ধ কৰক",
    scheduleTitle: "🕒 আজিৰ কাৰ্যসূচী",
    remindersDone: "সম্পন্ন"
  },
  brx: {
    appTitle: "गोसोआव लाखिनाय गेलेनाय",
    appSubtitle: "दिसार' जानायनि नायबिजिरनाय",
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
    modeRoutine: "🌅 नेम सायख'",
    modePuzzle: "🧩 सावगारि जरा",
    cardBadge: "कार्ड",
    doctorBtnText: "डाक्टर रिपोर्ट",
    remindersBtnText: "गोसोखांथि",
    langHeading: "राव सायख':",
    lblAdaptiveMode: "गेलेनाय थाखो:",
    lblReactionSpeed: "गोख्रैथि:",
    lblDementiaRisk: "गिखांनाय थाखो:",
    riskNormal: "मोजां / मोजां गोसो",
    riskMci: "एसेल' गोरोन्थि (MCI)",
    riskMod: "गेजेरारि गिनाय",
    riskHigh: "मदद नांगौ",
    levelBadge1: "थाखो 1: मोजां",
    levelBadge2: "थाखो 2: एसेल'",
    levelBadge3: "थाखो 3: गेजेरारि",
    levelBadge4: "थाखो 4: मदद",
    puzzleThemeLabel: "🖼️ सावगारि सायख':",
    teaGarden: "🍵 साहा बागान",
    templeBell: "🛕 घान्थि",
    kopouOrchid: "🌺 खपौ बिबार",
    moves: "थांखि",
    time: "सम",
    pieces: "टुकरा",
    assistGuide: "मदद",
    shuffleBtn: "🔀 बिखाव",
    ghostBtn: "💡 नुनो हानाय",
    restartBtn: "↻ फिन जागाय",
    memoryNotice: "बे बेसादफोरखौ गोसोआव लाखि...",
    memoryRecallNow: "नोंथाङा मा नुदोंमोन? गाहायाव सायख'!",
    praiseDefault: "जोबोर मोजां!",
    tryAgainDefault: "आरोबाव नाजा!",
    doctorModalTitle: "🩺 डाक्टर रिपोर्ट",
    doctorModalSubtitle: "AI रिपोर्ट",
    doctorModalDone: "बन्द खालाम",
    printReport: "🖨️ प्रिन्ट खालाम",
    remindersModalTitle: "⏰ मुलि गोसोखांथि",
    remindersModalSubtitle: "मुलि आरो दै लोंनाय",
    waterTrackerTitle: "दै लोंनाय",
    waterTrackerSub: "देहानि थाखाय दै लोंनाया गोनांथार",
    logWaterBtn: "+ 1 ग्लास दै लोंबाय",
    scheduleTitle: "🕒 दिनैनि फारिलाइ",
    remindersDone: "जाबाय"
  },

  // Manipur
  mni: {
    appTitle: "নীংশিং শান্নবা",
    appSubtitle: "দেমেনসিয়া লাইয়েংলোন",
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
    modeRoutine: "🌅 নোংমগী থবক",
    modePuzzle: "🧩 পজল শান্নবা",
    cardBadge: "কার্ড",
    doctorBtnText: "দোক্তর রির্পোট",
    remindersBtnText: "নীংশিংহন্নবা",
    langHeading: "লোন খনবীয়ু:",
    lblAdaptiveMode: "থাক:",
    lblReactionSpeed: "য়াংবা:",
    lblDementiaRisk: "অকিবা থাক:",
    riskNormal: "ফরে / নীংশিংলি",
    riskMci: "অহোম্বা খরা (MCI)",
    riskMod: "মরিংবা",
    riskHigh: "মতেং মথৌ তারি",
    levelBadge1: "থাক ১: ফরে",
    levelBadge2: "থাক ২: খরা হোই",
    levelBadge3: "থাক ৩: মরিংবা",
    levelBadge4: "থাক ৪: মতেং",
    puzzleThemeLabel: "🖼️ ফোতো খনবীয়ু:",
    teaGarden: "🍵 চা লমপাক",
    templeBell: "🛕 লাইশং ঘণ্টা",
    kopouOrchid: "🌺 কোপৌ লৈ",
    moves: "খোংথাং",
    time: "মতম",
    pieces: "মচেৎ",
    assistGuide: "মতেং",
    shuffleBtn: "🔀 য়ানশিনলু",
    ghostBtn: "💡 ময়েক",
    restartBtn: "↻ অমুক হৌগদবনি",
    memoryNotice: "পোৎলমশিংসি নীংশিংবীয়ু...",
    memoryRecallNow: "নহাক্না করি উখিবগে? মখাদা নমহল্লু!",
    praiseDefault: "য়াম্না ফরে!",
    tryAgainDefault: "তপ্না অমুক হোৎনবীয়ু!",
    doctorModalTitle: "🩺 দোক্তর রির্পোট",
    doctorModalSubtitle: "AI মোকা স্ক্রিনিং",
    doctorModalDone: "থিংজিল্লু",
    printReport: "🖨️ প্রিন্ট তৌবীয়ু",
    remindersModalTitle: "⏰ হিদা অমসুং ঈশিং",
    remindersModalSubtitle: "নুমিৎ খুদিংগী থবক",
    waterTrackerTitle: "ঈশিং থকপা",
    waterTrackerSub: "ঈশিং থকপনা পুকচেল ফহনগনি",
    logWaterBtn: "+ গ্লাস ১ ঈশিং থক্লে",
    scheduleTitle: "🕒 ঙসিগী থৌরম",
    remindersDone: "লোইরে"
  },

  // Tripura & Bengal
  bn: {
    appTitle: "মাইন্ডব্লুম",
    appSubtitle: "স্মৃতি ও ডিমেনশিয়া কেয়ার",
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
    modeRoutine: "🌅 দিনলিপি চেনা",
    modePuzzle: "🧩 ছবির ধাঁধা (পাজল)",
    cardBadge: "কার্ড",
    doctorBtnText: "ডাক্তারি রিপোর্ট",
    remindersBtnText: "স্মারক",
    langHeading: "ভাষা নির্বাচন করুন:",
    lblAdaptiveMode: "অ্যাডাপ্টিভ লেভেল:",
    lblReactionSpeed: "প্রতিক্রিয়া গতি:",
    lblDementiaRisk: "ডিমেনশিয়া ঝুঁকি:",
    riskNormal: "স্বাভাবিক / অক্ষুণ্ণ",
    riskMci: "প্রাথমিক ক্ষয় (MCI)",
    riskMod: "মাঝারি ঝুঁকি",
    riskHigh: "সহায়ক যত্ন প্রয়োজন",
    levelBadge1: "লেভেল ১: অক্ষুণ্ণ",
    levelBadge2: "লেভেল ২: মৃদু ঘাটতি",
    levelBadge3: "লেভেল ৩: মাঝারি ঝুঁকি",
    levelBadge4: "লেভেল ৪: সহায়ক যত্ন",
    puzzleThemeLabel: "🖼️ ছবি নির্বাচন করুন:",
    teaGarden: "🍵 চা বাগান",
    templeBell: "🛕 মন্দিরের ঘণ্টা",
    kopouOrchid: "🌺 কোপৌ অর্কিড",
    moves: "চাল",
    time: "সময়",
    pieces: "টুকরো",
    assistGuide: "সহায়ক রূপরেখা",
    shuffleBtn: "🔀 এলোমেলো করুন",
    ghostBtn: "💡 আবছা ছবি দেখুন",
    restartBtn: "↻ পুনরায় শুরু",
    memoryNotice: "এই জিনিসগুলি মনোযোগ দিয়ে দেখুন এবং মনে রাখুন...",
    memoryRecallNow: "আপনি কোন কোন জিনিস দেখেছিলেন? নিচে নির্বাচন করুন!",
    praiseDefault: "খুব সুন্দর! আপনি সঠিক উত্তর দিয়েছেন!",
    tryAgainDefault: "ধীরে ধীরে চেষ্টা করুন, আবার দেখুন!",
    doctorModalTitle: "🩺 ডিমেনশিয়া স্ক্রিনিং ও ক্লিনিকাল রিপোর্ট",
    doctorModalSubtitle: "AI স্ক্রিনিং রিপোর্ট (MoCA/MMSE কাঠামো)",
    doctorModalDone: "বন্ধ করুন",
    printReport: "🖨️ রিপোর্ট প্রিন্ট করুন",
    remindersModalTitle: "⏰ রুটিন ও ওষুধ স্মারক",
    remindersModalSubtitle: "ওষুধ, পানি ও দৈনন্দিন রুটিন",
    waterTrackerTitle: "দৈনিক পানি পান ট্র্যাকার",
    waterTrackerSub: "মানসিক বিভ্রান্তি এড়াতে পর্যাপ্ত জল পান জরুরি",
    logWaterBtn: "+ ১ গ্লাস জল পান রেকর্ড করুন",
    scheduleTitle: "🕒 আজকের সূচি",
    remindersDone: "সম্পন্ন"
  },
  trp: {
    appTitle: "Khorongo Tonmung",
    appSubtitle: "Dementia Care Tripura",
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
    modeRoutine: "🌅 Salbroni",
    modePuzzle: "🧩 Nokha puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Gwnang",
    langHeading: "Kok seok di:",
    lblAdaptiveMode: "Mode:",
    lblReactionSpeed: "Gokhri:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Kaham",
    riskMci: "Early MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Kaham",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Nokha seok di:",
    teaGarden: "🍵 Cha Bagan",
    templeBell: "🛕 Khang",
    kopouOrchid: "🌺 Kopou",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Restart",
    memoryNotice: "Abobo no khorongo ton di...",
    memoryRecallNow: "Tamo nuhkha? Baha chuk di!",
    praiseDefault: "Khamani kaham!",
    tryAgainDefault: "Tei naina di!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Screening",
    doctorModalDone: "Thwng di",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Botol tei twi",
    remindersModalSubtitle: "Salbroni khamani",
    waterTrackerTitle: "Twi nungmung",
    waterTrackerSub: "Twi nung di",
    logWaterBtn: "+ 1 Glass Twi",
    scheduleTitle: "🕒 Salbroni",
    remindersDone: "Done"
  },

  // Mizoram
  lus: {
    appTitle: "MindBloom",
    appSubtitle: "Mizoram Dementia Care",
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
    modeRoutine: "🌅 Nitin thil",
    modePuzzle: "🧩 Thlalak Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Hriattirna",
    langHeading: "Tawng thlang rawh:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Rang lam:",
    lblDementiaRisk: "Dementia Dinhmun:",
    riskNormal: "A tha / Hre reng thei",
    riskMci: "Tlem a theihnghilh (MCI)",
    riskMod: "Harsatna tawk",
    riskHigh: "Enkawl ngai",
    levelBadge1: "Level 1: A tha",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Enkawl ngai",
    puzzleThemeLabel: "🖼️ Thlalak thlang rawh:",
    teaGarden: "🍵 Thingpui huan",
    templeBell: "🛕 Biakin dar",
    kopouOrchid: "🌺 Kopou pangpar",
    moves: "Moves",
    time: "Hun",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Thlalak fiah lo",
    restartBtn: "↻ Tan tha leh",
    memoryNotice: "Heng thilte hi lo hre reng rawh le...",
    memoryRecallNow: "Khawi thilte nge i hmuh kha? Thlang rawh le!",
    praiseDefault: "A tha lutuk e!",
    tryAgainDefault: "Han ti nawn leh teh le!",
    doctorModalTitle: "🩺 Doctor Report & Assessment",
    doctorModalSubtitle: "AI Screening (MoCA/MMSE)",
    doctorModalDone: "Khar rawh",
    printReport: "🖨️ Print Report",
    remindersModalTitle: "⏰ Nitin hunbi & Damdawi",
    remindersModalSubtitle: "Damdawi, Tui in & Nitin hna",
    waterTrackerTitle: "Nitin Tui in zat",
    waterTrackerSub: "Tui in tam hi thluak tan a tha",
    logWaterBtn: "+ Tui no 1 ka in e",
    scheduleTitle: "🕒 Vawiin hunbi",
    remindersDone: "Done"
  },

  // Meghalaya
  kha: {
    appTitle: "Ka Jingkynmaw",
    appSubtitle: "Meghalaya Dementia Care",
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
    modeRoutine: "🌅 Man ka sngi",
    modePuzzle: "🧩 Jigsaw Dur",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Jingpynkynmaw",
    langHeading: "Jied ka Ktien:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Ka jingkloi:",
    lblDementiaRisk: "Dementia Risk:",
    riskNormal: "Bha Bha",
    riskMci: "Kynmaw khyndiat (MCI)",
    riskMod: "Shitom khyndiat",
    riskHigh: "Donkam jingiarap",
    levelBadge1: "Level 1: Bha",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Yarap",
    puzzleThemeLabel: "🖼️ Jied Dur:",
    teaGarden: "🍵 Kper Sha",
    templeBell: "🛕 Shakuria",
    kopouOrchid: "🌺 Kopou Tiew",
    moves: "Moves",
    time: "Por",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Dur syrngiew",
    restartBtn: "↻ Sdang biang",
    memoryNotice: "Kynmaw ia kine ki mar...",
    memoryRecallNow: "Kiei ki mar kiba phi la iohi? Jied na rum!",
    praiseDefault: "Bha shibun! Phi la shem beit!",
    tryAgainDefault: "Pyrshang biang pat!",
    doctorModalTitle: "🩺 Ka Kaiphot ka Jingkoit Jingkhiah",
    doctorModalSubtitle: "AI Screening Report",
    doctorModalDone: "Khang",
    printReport: "🖨️ Print Kaiphot",
    remindersModalTitle: "⏰ Dawai & Um dih",
    remindersModalSubtitle: "Dawai bad kam man ka sngi",
    waterTrackerTitle: "Dih Um man ka sngi",
    waterTrackerSub: "Ka um ka iarap ia ka jingmut jingpyrkhat",
    logWaterBtn: "+ Dih 1 khuri ka Um",
    scheduleTitle: "🕒 Ka por mynta ka sngi",
    remindersDone: "Dep"
  },
  grt: {
    appTitle: "Gisik Ra·ani Kal·ani",
    appSubtitle: "Garo Hills Dementia Care",
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
    modeRoutine: "🌅 Salanti kam",
    modePuzzle: "🧩 Noksa Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Gisik Ra·atani",
    langHeading: "Ku·sikko seokbo:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Gisik gong·ani:",
    lblDementiaRisk: "Dementia Risk:",
    riskNormal: "Namgipa",
    riskMci: "Early MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted Care",
    levelBadge1: "Level 1: Namgipa",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Dakchakani",
    puzzleThemeLabel: "🖼️ Noksako seokbo:",
    teaGarden: "🍵 Cha A·ba",
    templeBell: "🛕 Gong",
    kopouOrchid: "🌺 Kopou Bibal",
    moves: "Moves",
    time: "Sal",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Brinbo",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ A·bachengtai bo",
    memoryNotice: "Iarangko gisik ra·bo...",
    memoryRecallNow: "Na·a maiko nikaha? Dokbo!",
    praiseDefault: "Namgipa kam!",
    tryAgainDefault: "Ka·sinsine daktaina!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Assessment",
    doctorModalDone: "Chipbo",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Sam & Chi ringani",
    remindersModalSubtitle: "Salanti kam",
    waterTrackerTitle: "Chi ringani",
    waterTrackerSub: "Chi ringani bikroko rakkina namgipa",
    logWaterBtn: "+ 1 Glass Chi",
    scheduleTitle: "🕒 Da·alni kam",
    remindersDone: "Matchotaha"
  },

  // Sikkim
  ne: {
    appTitle: "स्मृति खेल",
    appSubtitle: "सिक्किम डिमेन्सिया केयर",
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
    modeRoutine: "🌅 दिनचर्या पहिचान",
    modePuzzle: "🧩 जिगस puzzle",
    cardBadge: "कार्ड",
    doctorBtnText: "डाक्टर रिपोर्ट",
    remindersBtnText: "रिमाइन्डर",
    langHeading: "भाषा छान्नुहोस्:",
    lblAdaptiveMode: "स्तर:",
    lblReactionSpeed: "प्रतिक्रिया गति:",
    lblDementiaRisk: "डिमेन्सिया जोखिम:",
    riskNormal: "सामान्य / स्वस्थ",
    riskMci: "प्रारम्भिक एमसीआई",
    riskMod: "मध्यम जोखिम",
    riskHigh: "हेरचाह आवश्यक",
    levelBadge1: "स्तर १: स्वस्थ",
    levelBadge2: "स्तर २: सामान्य घट",
    levelBadge3: "स्तर ३: मध्यम",
    levelBadge4: "स्तर ४: हेरचाह",
    puzzleThemeLabel: "🖼️ चित्र छान्नुहोस्:",
    teaGarden: "🍵 चिया बगान",
    templeBell: "🛕 मन्दिरको घण्टी",
    kopouOrchid: "🌺 कपौ सुनाखरी",
    moves: "चाल",
    time: "समय",
    pieces: "टुक्रा",
    assistGuide: "सहायता",
    shuffleBtn: "🔀 छर्नुहोस्",
    ghostBtn: "💡 पृष्ठभूमि हेर्नुहोस्",
    restartBtn: "↻ फेरि सुरु गर्नुहोस्",
    memoryNotice: "यी वस्तुहरू ध्यान दिएर हेर्नुहोस् र सम्झनुहोस्...",
    memoryRecallNow: "तपाईंले के के देख्नुभयो? तल छुनुहोस्!",
    praiseDefault: "धेरै राम्रो! तपाईंले सही चिन्नुभयो!",
    tryAgainDefault: "फेरि प्रयास गर्नुहोस्!",
    doctorModalTitle: "🩺 डिमेन्सिया तथा संज्ञानात्मक रिपोर्ट",
    doctorModalSubtitle: "AI स्क्रिनिङ रिपोर्ट",
    doctorModalDone: "बन्द गर्नुहोस्",
    printReport: "🖨️ रिपोर्ट प्रिन्ट गर्नुहोस्",
    remindersModalTitle: "⏰ औषधि तथा दिनचर्या रिमाइन्डर",
    remindersModalSubtitle: "औषधि, पानी र दैनिक कार्यहरू",
    waterTrackerTitle: "दैनिक पानी ट्र्याकर",
    waterTrackerSub: "पर्याप्त पानी पिउनाले स्मरणशक्ति ताजा रहन्छ",
    logWaterBtn: "+ १ गिलास पानी खाइयो",
    scheduleTitle: "🕒 आजको तालिका",
    remindersDone: "सम्पन्न"
  },
  lep: {
    appTitle: "ৰোং স্মৃতি খেল",
    appSubtitle: "Lepcha Care",
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
    modeRoutine: "🌅 Súng",
    modePuzzle: "🧩 Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Sem mat",
    langHeading: "Rongring:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Speed:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Ryu",
    riskMci: "MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Ryu",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Ríp zong:",
    teaGarden: "🍵 Chiya",
    templeBell: "🛕 Ghanti",
    kopouOrchid: "🌺 Kopou",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Restart",
    memoryNotice: "Sem mat o...",
    memoryRecallNow: "Shuk mat o!",
    praiseDefault: "Ryu!",
    tryAgainDefault: "Ryu li!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Screening",
    doctorModalDone: "Done",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Men & Ung",
    remindersModalSubtitle: "Daily routine",
    waterTrackerTitle: "Ung thuk",
    waterTrackerSub: "Ung thuk o",
    logWaterBtn: "+ 1 Glass Ung",
    scheduleTitle: "🕒 Today",
    remindersDone: "Done"
  },
  bhu: {
    appTitle: "དྲན་ཤེས་རྩེད་མོ",
    appSubtitle: "Bhutia Dementia Care",
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
    modeRoutine: "🌅 Nyin re",
    modePuzzle: "🧩 Ri mo puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Dran gso",
    langHeading: "Skad 'dems:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Speed:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Yag po",
    riskMci: "MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Yag po",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Ri mo:",
    teaGarden: "🍵 Ja zhing",
    templeBell: "🛕 Tilbu",
    kopouOrchid: "🌺 Kopou Meto",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Restart",
    memoryNotice: "Sem la zhog dang...",
    memoryRecallNow: "Gang mthong song? 'Dems dang!",
    praiseDefault: "Yag po byung song!",
    tryAgainDefault: "Yang skyar 'bad dang!",
    doctorModalTitle: "🩺 Sman pa'i bka' slob",
    doctorModalSubtitle: "AI Assessment",
    doctorModalDone: "Btsums",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Sman dang chu",
    remindersModalSubtitle: "Nyin re'i mdzad rim",
    waterTrackerTitle: "Chu 'thung ba",
    waterTrackerSub: "Chu 'thung na bde po yong",
    logWaterBtn: "+ Chu dkar yol 1",
    scheduleTitle: "🕒 De ring",
    remindersDone: "Grub song"
  },

  // Nagaland
  ao: {
    appTitle: "Shisatsü Asayamung",
    appSubtitle: "Nagaland Dementia Care",
    scoreLabel: "Point",
    voiceOn: "O: ON",
    voiceOff: "O: OFF",
    listening: "Ni ne o angara",
    voicePaused: "Mic mapung",
    sayPrompt: "Jembirang: <strong>'{name}'</strong>",
    hearAgain: "Tanaben anga",
    nextBtn: "Tanabuba ➔",
    chooseGame: "Asaya shimang:",
    modeSpot: "🎯 Busang",
    modeRecall: "🧠 Bilemtetang",
    modeMatch: "🃏 Medemdang",
    modeRoutine: "🌅 Anogo shia",
    modePuzzle: "🧩 Noksa Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Bilemtetdaktsüba",
    langHeading: "Oshi shimang:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Kara:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Tajung",
    riskMci: "MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Tajung",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Noksa shimang:",
    teaGarden: "🍵 Cha Garden",
    templeBell: "🛕 Chanu",
    kopouOrchid: "🌺 Kopou Narok",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Tanaben asaya",
    memoryNotice: "Item temji bilemtetang...",
    memoryRecallNow: "Koba item ngutet? Shimang!",
    praiseDefault: "Kanga tajung!",
    tryAgainDefault: "Tanaben merangang!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Screening",
    doctorModalDone: "Done",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Moza & Tzümong",
    remindersModalSubtitle: "Anogo shia mapa",
    waterTrackerTitle: "Tzü jembung",
    waterTrackerSub: "Tzü jembunga tajung",
    logWaterBtn: "+ 1 Glass Tzü",
    scheduleTitle: "🕒 Tanü mapa",
    remindersDone: "Tembangogo"
  },
  njm: {
    appTitle: "MindBloom",
    appSubtitle: "Angami Dementia Care",
    scoreLabel: "Point",
    voiceOn: "Die: ON",
    voiceOff: "Die: OFF",
    listening: "A die therie",
    voicePaused: "Mic khrie",
    sayPrompt: "Puo: <strong>'{name}'</strong>",
    hearAgain: "Thukuo tie",
    nextBtn: "Kidiakezvü ➔",
    chooseGame: "Chalie diacü:",
    modeSpot: "🎯 Ngulie",
    modeRecall: "🧠 Kemelhu",
    modeMatch: "🃏 Kethokethe",
    modeRoutine: "🌅 Dzükhe",
    modePuzzle: "🧩 Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Kemelhu",
    langHeading: "Die diacü:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Speed:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Vitho",
    riskMci: "MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Vitho",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Dur diacü:",
    teaGarden: "🍵 Dzüku kper",
    templeBell: "🛕 Kide",
    kopouOrchid: "🌺 Kopou",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Restart",
    memoryNotice: "Kemelhu tie...",
    memoryRecallNow: "Kiei ngulie? Ngulie tie!",
    praiseDefault: "Vitho shisha!",
    tryAgainDefault: "Se biang!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Assessment",
    doctorModalDone: "Done",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Dzümeng & Dzüh",
    remindersModalSubtitle: "Daily routine",
    waterTrackerTitle: "Dzüh thak",
    waterTrackerSub: "Dzüh thak tie",
    logWaterBtn: "+ 1 Glass Dzüh",
    scheduleTitle: "🕒 Today",
    remindersDone: "Done"
  },
  nsm: {
    appTitle: "MindBloom",
    appSubtitle: "Sumi Dementia Care",
    scoreLabel: "Point",
    voiceOn: "Atsü: ON",
    voiceOff: "Atsü: OFF",
    listening: "Atsü tsükolo",
    voicePaused: "Mic thuphe",
    sayPrompt: "Pi: <strong>'{name}'</strong>",
    hearAgain: "Shi tsu",
    nextBtn: "Kütani ➔",
    chooseGame: "Khumo thasü:",
    modeSpot: "🎯 Lho",
    modeRecall: "🧠 Kimthe",
    modeMatch: "🃏 Kheki",
    modeRoutine: "🌅 Ayeghi",
    modePuzzle: "🧩 Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Kimthe",
    langHeading: "Tsa thasü:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Speed:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Alhomu",
    riskMci: "MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Alhomu",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Picture thasü:",
    teaGarden: "🍵 Chah Bag",
    templeBell: "🛕 Ghati",
    kopouOrchid: "🌺 Kopou",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Restart",
    memoryNotice: "Kimthe lo...",
    memoryRecallNow: "Khushi ngulo? Lho lo!",
    praiseDefault: "Alhomu shalo!",
    tryAgainDefault: "Phishi lo!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Assessment",
    doctorModalDone: "Done",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Azha & Azü",
    remindersModalSubtitle: "Daily routine",
    waterTrackerTitle: "Azü shü",
    waterTrackerSub: "Azü shü lo",
    logWaterBtn: "+ 1 Glass Azü",
    scheduleTitle: "🕒 Today",
    remindersDone: "Done"
  },

  // Arunachal Pradesh
  njz: {
    appTitle: "MindBloom",
    appSubtitle: "Nyishi Dementia Care",
    scoreLabel: "Point",
    voiceOn: "Aag: ON",
    voiceOff: "Aag: OFF",
    listening: "Aag tat duna",
    voicePaused: "Mic duryab",
    sayPrompt: "Boto: <strong>'{name}'</strong>",
    hearAgain: "Leko tato",
    nextBtn: "Aaro he ➔",
    chooseGame: "Beri tabo:",
    modeSpot: "🎯 Paato",
    modeRecall: "🧠 Minto",
    modeMatch: "🃏 Aju aju",
    modeRoutine: "🌅 Alo rigo",
    modePuzzle: "🧩 Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Minto",
    langHeading: "Aag tabo:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Speed:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Aibe",
    riskMci: "MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Aibe",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Picture tabo:",
    teaGarden: "🍵 Cha Bori",
    templeBell: "🛕 Ghanti",
    kopouOrchid: "🌺 Kopou",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Restart",
    memoryNotice: "Minto toka...",
    memoryRecallNow: "No kape pa toka? Paato!",
    praiseDefault: "Aibelo!",
    tryAgainDefault: "Aibe luaika!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Assessment",
    doctorModalDone: "Done",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Si & Issi",
    remindersModalSubtitle: "Daily routine",
    waterTrackerTitle: "Issi ngi",
    waterTrackerSub: "Issi ngi toka",
    logWaterBtn: "+ 1 Glass Issi",
    scheduleTitle: "🕒 Today",
    remindersDone: "Done"
  },
  adi: {
    appTitle: "MindBloom",
    appSubtitle: "Adi Dementia Care",
    scoreLabel: "Point",
    voiceOn: "Gom: ON",
    voiceOff: "Gom: OFF",
    listening: "Gom tat duna",
    voicePaused: "Mic do·ne",
    sayPrompt: "Lubi: <strong>'{name}'</strong>",
    hearAgain: "Leko tatka",
    nextBtn: "Aro sok ➔",
    chooseGame: "Moman goka:",
    modeSpot: "🎯 Pabi",
    modeRecall: "🧠 Minbi",
    modeMatch: "🃏 Aju keka",
    modeRoutine: "🌅 Longe kam",
    modePuzzle: "🧩 Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Minbi",
    langHeading: "Gom goka:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Speed:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Aibe",
    riskMci: "MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Aibe",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Picture goka:",
    teaGarden: "🍵 Cha Bori",
    templeBell: "🛕 Ghanti",
    kopouOrchid: "🌺 Kopou",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Restart",
    memoryNotice: "Minbi toka...",
    memoryRecallNow: "No kape patoka? Pabi!",
    praiseDefault: "Aibelo!",
    tryAgainDefault: "Aibe luaika!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Assessment",
    doctorModalDone: "Done",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Si & Issi",
    remindersModalSubtitle: "Daily routine",
    waterTrackerTitle: "Issi ti",
    waterTrackerSub: "Issi ti toka",
    logWaterBtn: "+ 1 Glass Issi",
    scheduleTitle: "🕒 Today",
    remindersDone: "Done"
  },
  gal: {
    appTitle: "MindBloom",
    appSubtitle: "Galo Dementia Care",
    scoreLabel: "Point",
    voiceOn: "Gom: ON",
    voiceOff: "Gom: OFF",
    listening: "Gom tat duna",
    voicePaused: "Mic yage",
    sayPrompt: "Lubi: <strong>'{name}'</strong>",
    hearAgain: "Leko tatka",
    nextBtn: "Kone ➔",
    chooseGame: "Moman goka:",
    modeSpot: "🎯 Pabi",
    modeRecall: "🧠 Minbi",
    modeMatch: "🃏 Aju keka",
    modeRoutine: "🌅 Longe kam",
    modePuzzle: "🧩 Puzzle",
    cardBadge: "Card",
    doctorBtnText: "Doctor Report",
    remindersBtnText: "Minbi",
    langHeading: "Gom goka:",
    lblAdaptiveMode: "Level:",
    lblReactionSpeed: "Speed:",
    lblDementiaRisk: "Risk:",
    riskNormal: "Aibe",
    riskMci: "MCI",
    riskMod: "Moderate",
    riskHigh: "Assisted",
    levelBadge1: "Level 1: Aibe",
    levelBadge2: "Level 2: MCI",
    levelBadge3: "Level 3: Moderate",
    levelBadge4: "Level 4: Assisted",
    puzzleThemeLabel: "🖼️ Picture goka:",
    teaGarden: "🍵 Cha Bori",
    templeBell: "🛕 Ghanti",
    kopouOrchid: "🌺 Kopou",
    moves: "Moves",
    time: "Time",
    pieces: "Pieces",
    assistGuide: "Guide",
    shuffleBtn: "🔀 Shuffle",
    ghostBtn: "💡 Ghost outline",
    restartBtn: "↻ Restart",
    memoryNotice: "Minbi toka...",
    memoryRecallNow: "No kape patoka? Pabi!",
    praiseDefault: "Aibe!",
    tryAgainDefault: "Aibe tula!",
    doctorModalTitle: "🩺 Doctor Report",
    doctorModalSubtitle: "AI Assessment",
    doctorModalDone: "Done",
    printReport: "🖨️ Print",
    remindersModalTitle: "⏰ Si & Issi",
    remindersModalSubtitle: "Daily routine",
    waterTrackerTitle: "Issi ti",
    waterTrackerSub: "Issi ti toka",
    logWaterBtn: "+ 1 Glass Issi",
    scheduleTitle: "🕒 Today",
    remindersDone: "Done"
  }
};

const ITEM_NAMES_I18N = {
  apple: { en: "Apple", mr: "सफरचंद", hi: "सेब", as: "আপেল", brx: "आफेल", mni: "হৈ", bn: "আপেল", trp: "Khumthai", lus: "Epel", kha: "Soh Phrun", grt: "Bithe", ne: "स्याउ", lep: "Kúngtshu", bhu: "Kushut", ao: "Apel", njm: "Thesie", nsm: "Apel", njz: "Ayeng", adi: "Ayeng", gal: "Apel" },
  flower: { en: "Flower", mr: "फूल", hi: "फूल", as: "ফুল", brx: "बिबार", mni: "লৈ", bn: "ফুল", trp: "Khum", lus: "Pâr", kha: "Tiew", grt: "Bibal", ne: "फूल", lep: "Ríp", bhu: "Meto", ao: "Narok", njm: "Parr", nsm: "Apuh", njz: "Pupu", adi: "Appun", gal: "Appun" },
  key: { en: "Key", mr: "किल्ली", hi: "चाबी", as: "চাবি", brx: "साबि", mni: "চাবি", bn: "চাবি", trp: "Chabi", lus: "Chabi", kha: "U Shabi", grt: "Chabi", ne: "साँचो", lep: "Chabi", bhu: "Dimik", ao: "Chabi", njm: "Chabi", nsm: "Chabi", njz: "Chabi", adi: "Chabi", gal: "Chabi" },
  car: { en: "Car", mr: "गाडी", hi: "गाड़ी", as: "গাড়ী", brx: "गारि", mni: "গাড়ী", bn: "গাড়ী", trp: "Gari", lus: "Motor", kha: "Ka Kali", grt: "Gari", ne: "गाडी", lep: "Gadi", bhu: "Gadi", ao: "Gari", njm: "Gari", nsm: "Gari", njz: "Gari", adi: "Gari", gal: "Gari" },
  cat: { en: "Cat", mr: "मांजर", hi: "बिल्ली", as: "মেকুৰী", brx: "मावजि", mni: "হৌদোং", bn: "বিড়াল", trp: "Achim", lus: "Zawhte", kha: "Ka Miaw", grt: "Menggong", ne: "बिरालो", lep: "Alí", bhu: "Bili", ao: "Koli", njm: "Nyu", nsm: "Akusa", njz: "Misi", adi: "Kari", gal: "Kari" },
  cup: { en: "Cup of Tea", mr: "चहाचा कप", hi: "चाय का कप", as: "চাহৰ কাপ", brx: "साहा", mni: "চা", bn: "চায়ের কাপ", trp: "Cha", lus: "Thingpui", kha: "Ka Sha", grt: "Cha", ne: "चिया कप", lep: "Chiya", bhu: "Ja", ao: "Cha", njm: "Dzüku", nsm: "Chah", njz: "Cha", adi: "Cha", gal: "Cha" },
  sun: { en: "Sun", mr: "सूर्य", hi: "सूरज", as: "সূৰ্য্য", brx: "सान", mni: "নোংমাই", bn: "সূর্য", trp: "Sal", lus: "Ni", kha: "Ka Sngi", grt: "Sal", ne: "सूर्य", lep: "Sátsuk", bhu: "Nima", ao: "Anu", njm: "Nakhi", nsm: "Tsughu", njz: "Donyi", adi: "Donyi", gal: "Donyi" },
  bell: { en: "Bell", mr: "घंटा", hi: "घंटी", as: "ঘণ্টি", brx: "घान्थि", mni: "ঘণ্টা", bn: "ঘণ্টা", trp: "Khang", lus: "Dar", kha: "Ka Shakuria", grt: "Gong", ne: "घण्टी", lep: "Ghanti", bhu: "Tilbu", ao: "Chanu", njm: "Kide", nsm: "Ghati", njz: "Ghanti", adi: "Ghanti", gal: "Ghanti" },
  fish: { en: "Fish", mr: "मासा", hi: "मछली", as: "মাছ", brx: "ना", mni: "ঙা", bn: "মাছ", trp: "Aa", lus: "Nga", kha: "Ka Dohkha", grt: "Naa", ne: "माछा", lep: "Ngó", bhu: "Nya", ao: "Anük", njm: "Khu", nsm: "Khuno", njz: "Nge", adi: "Engo", gal: "Ngo" },
  bird: { en: "Bird", mr: "पक्षी", hi: "चिड़िया", as: "চৰাই", brx: "दाउ", mni: "উচেক", bn: "পাখি", trp: "Toksa", lus: "Vah", kha: "Ka Sim", grt: "Do·o", ne: "चरा", lep: "Fót", bhu: "Jhyap", ao: "Ozu", njm: "Pera", nsm: "Awulhu", njz: "Pappi", adi: "Pettang", gal: "Pettang" },
  gamusa: { en: "Traditional Scarf", mr: "उपरणे / शाल", hi: "गमछा / शॉल", as: "গামোচা", brx: "आर'नाइ", mni: "ফি", bn: "গামছা", trp: "Risa", lus: "Puan", kha: "Ka Jainsem", grt: "Dakmanda", ne: "गम्छा", lep: "Dumdem", bhu: "Khabden", ao: "Tsüngkotepsü", njm: "Lorakhwü", nsm: "Akhi", njz: "Gale", adi: "Gale", gal: "Galuk" }
};

const QUESTION_TEMPLATES_I18N = {
  find: {
    en: "Can you find the {name}?",
    mr: "तुम्ही {name} शोधू शकता का?",
    hi: "क्या आप {name} पहचान सकते हैं?",
    as: "আপুনি {name} বিচাৰি পাবনে?",
    brx: "नोंथाङा {name} खौ दिहुननो हागोन नामा?",
    mni: "নহাক্না {name} ফংবা ঙমব্রা?",
    bn: "আপনি কি {name} খুঁজে পাবেন?",
    trp: "Nung {name} no nuhba naiya de?",
    lus: "Khawngaihin {name} hi i zawng hmu thei em?",
    kha: "Phi lah ban shem ia ka {name}?",
    grt: "Na·a {name} ko man·genma?",
    ne: "के तपाईं {name} चिन्न सक्नुहुन्छ?",
    lep: "Kásu {name} ryu ma?",
    bhu: "Khyod {name} thsol thub bam?",
    ao: "Ne {name} busutet ma?",
    njm: "No {name} ngulie lho?",
    nsm: "Ni {name} lhoche shini?",
    njz: "No {name} pa toka?",
    adi: "No {name} em pa toka ye?",
    gal: "No {name} em pa laku ye?"
  },
  hint: {
    en: "Tap the picture or say the name aloud",
    mr: "चित्रावर दाबा किंवा मोठ्याने नाव बोला",
    hi: "चित्र पर छुएं या नाम बोलें",
    as: "ছবিত টিপক বা ডাঙৰকৈ নাম কওক",
    brx: "गाहायाव थु एबा गासै बुं",
    mni: "মখাদা নমহনবীযু নত্রগা মিং হায়বীয়ু",
    bn: "ছবিতে স্পর্শ করুন বা জোরে নাম বলুন",
    trp: "Kholoma chuk di o kok sa di",
    lus: "Thlalak hmet rawh le",
    kha: "Thaba ia ka dur lane ong ia ka",
    grt: "Noksaoniko dokbo",
    ne: "चित्रमा छुनुहोस् वा नाम भन्नुहोस्",
    lep: "Ríp mat o",
    bhu: "Ri mo la reg go",
    ao: "Noksa nung azüngang",
    njm: "Nu the therie",
    nsm: "Noksa phu lo",
    njz: "Toka aag lu to",
    adi: "Noksa goka",
    gal: "Noksa goka"
  }
};

const PUZZLE_THEMES_I18N = {
  tea_garden: {
    en: "Assam Tea Garden",
    mr: "आसाम चहाची बाग",
    hi: "असम चाय का बागान",
    as: "অসমৰ চাহ বাগান",
    brx: "साहा बागान",
    mni: "চা লমপাক",
    bn: "আসামের চা বাগান",
    trp: "Cha Bagan",
    lus: "Thingpui Huan",
    kha: "Kper Sha",
    grt: "Cha A·ba",
    ne: "चिया बगान",
    lep: "Chiya",
    bhu: "Ja zhing",
    ao: "Cha Garden",
    njm: "Dzüku kper",
    nsm: "Chah Bag",
    njz: "Cha Bori",
    adi: "Cha Bori",
    gal: "Cha Bori"
  },
  golden_bell: {
    en: "Golden Temple Bell",
    mr: "सुवर्ण मंदिराची घंटा",
    hi: "स्वर्ण मंदिर की घंटी",
    as: "সোণালী মন্দিৰৰ ঘণ্টা",
    brx: "मन्दिरनि घान्थि",
    mni: "লাইশংগী সোনাগী ঘণ্টা",
    bn: "মন্দিরের সোনার ঘণ্টা",
    trp: "Khang",
    lus: "Biakin Dar",
    kha: "Ka Shakuria Kynja Ksiar",
    grt: "Gong",
    ne: "मन्दिरको सुनौलो घण्टी",
    lep: "Ghanti",
    bhu: "Tilbu",
    ao: "Chanu",
    njm: "Kide",
    nsm: "Ghati",
    njz: "Ghanti",
    adi: "Ghanti",
    gal: "Ghanti"
  },
  kopou_orchid: {
    en: "Kopou Orchid",
    mr: "कोपौ ऑर्किड फूल",
    hi: "कपौ आर्किड पुष्प",
    as: "কপৌ ফুল",
    brx: "खपौ बिबार",
    mni: "কোপৌ লৈ",
    bn: "কোপৌ অর্কিড ফুল",
    trp: "Kopou",
    lus: "Kopou Pangpar",
    kha: "U Tiew Kopou",
    grt: "Kopou Bibal",
    ne: "कपौ सुनाखरी",
    lep: "Kopou",
    bhu: "Kopou Meto",
    ao: "Kopou Narok",
    njm: "Kopou",
    nsm: "Kopou",
    njz: "Kopou",
    adi: "Kopou",
    gal: "Kopou"
  }
};

const PUZZLE_PROMPTS_I18N = {
  instruction: {
    en: "🧩 {name} Jigsaw Puzzle",
    mr: "🧩 {name} - जिगसॉ पझल",
    hi: "🧩 {name} - जिगसॉ पहेली",
    as: "🧩 {name} - ছবি জোৰা খেল",
    brx: "🧩 {name} - सावगारि जरा",
    mni: "🧩 {name} - লাই পজল",
    bn: "🧩 {name} - জিগস পাজল",
    trp: "🧩 {name} - Puzzle",
    lus: "🧩 {name} - Thlalak Puzzle",
    kha: "🧩 {name} - Puzzle",
    grt: "🧩 {name} - Noksa Puzzle",
    ne: "🧩 {name} - जिगस पहेली",
    lep: "🧩 {name} - Puzzle",
    bhu: "🧩 {name} - Ri Puzzle",
    ao: "🧩 {name} - Noksa Puzzle",
    njm: "🧩 {name} - Puzzle",
    nsm: "🧩 {name} - Puzzle",
    njz: "🧩 {name} - Puzzle",
    adi: "🧩 {name} - Puzzle",
    gal: "🧩 {name} - Puzzle"
  },
  subtext: {
    en: "Drag the pieces to rebuild the peaceful picture",
    mr: "तुकडे जागेवर सरकवून सुंदर चित्र पूर्ण करा",
    hi: "टुकड़ों को सही जगह लगाकर चित्र पूरा करें",
    as: "টুকৰাবোৰ যথাস্থানত বহুৱাই শান্তিপূৰ্ণ ছবিখন গঢ়ক",
    brx: "टुकराफोरखौ मिलायना सावगारिखौ बानाय",
    mni: "লাই মচাফোর পানশন্দুনা লাই অমা শেম্মু",
    bn: "টুকরোগুলি সরিয়ে সুন্দর ছবিটি সম্পূর্ণ করুন",
    trp: "Noksa chuk di",
    lus: "Thlalak rem khawm rawh le",
    kha: "Pyniah ia ki bynta ban pyndep ia ka dur",
    grt: "Noksa ko rikbo",
    ne: "टुक्राहरू मिलाएर चित्र पूरा गर्नुहोस्",
    lep: "Ríp lyan o",
    bhu: "Ri la dzo",
    ao: "Noksa mejemang",
    njm: "Dur mezhie",
    nsm: "Noksa phu lo",
    njz: "Toka aag lu to",
    adi: "Noksa goka",
    gal: "Noksa goka"
  },
  tts: {
    en: "Please rebuild the {name} puzzle picture by moving the pieces.",
    mr: "कृपया तुकडे जोडून {name} चे चित्र पूर्ण करा.",
    hi: "कृपया टुकड़े जोड़कर {name} का चित्र पूरा करें।",
    as: "অনুগ্ৰহ কৰি টুকৰাবোৰ মিলাই {name}ৰ ছবিখন সম্পূৰ্ণ কৰক।",
    brx: "अननानै {name} नि सावगारिखौ जरा मिलायनानै आबुं खालाम।",
    mni: "চানবীদুনা {name} গী লাই অসি পুংশিন্দুনা লোইশিনবীযু।",
    bn: "অনুগ্রহ করে টুকরোগুলি মিলিয়ে {name} এর ছবিটি সম্পূর্ণ করুন।",
    trp: "{name} noksa chuk di.",
    lus: "Khawngaihin {name} thlalak hi rem khawm rawh le.",
    kha: "Sngewbha pyndep ia ka dur jong ka {name}.",
    grt: "{name} noksa ko rikbo.",
    ne: "कृपया टुक्राहरू जोडेर {name} को चित्र पूरा गर्नुहोस्।",
    lep: "{name} ríp lyan o.",
    bhu: "{name} ri la dzo.",
    ao: "{name} noksa mejemang.",
    njm: "{name} dur mezhie.",
    nsm: "{name} noksa phu lo.",
    njz: "{name} noksa toka.",
    adi: "{name} noksa goka.",
    gal: "{name} noksa goka."
  },
  praise: {
    en: "Wonderful visuospatial skill! You completed the puzzle!",
    mr: "खूप छान! तुम्ही जिगसॉ पझल यशस्वीरित्या पूर्ण केले!",
    hi: "बहुत बढ़िया! आपने जिगसॉ पहेली सफलतापूर्वक पूरी कर ली!",
    as: "চমৎকাৰ! আপুনি ছবি জোৰা খেলখন সুন্দৰকৈ সম্পূৰ্ণ কৰিলে!",
    brx: "जोबोर मोजां! नोंथाङा सावगारिखौ मिलायबाय!",
    mni: "য়াম্না ফরে! নহাক্না লাই পজল লোইশিনখ্রে!",
    bn: "চমৎকার! আপনি সফলভাবে জিগস পাজল সম্পূর্ণ করেছেন!",
    trp: "Khamani kaham! Nung puzzle chukbai!",
    lus: "A va ṭha em! Puzzle i rem zo ta!",
    kha: "Bha shibun! Phi la dep ia ka puzzle!",
    grt: "Nama! Na·a puzzle ko matchotaha!",
    ne: "धेरै राम्रो! तपाईंले जिगस पहेली पूरा गर्नुभयो!",
    lep: "Ashyót! Puzzle lyan talo!",
    bhu: "Legsho! Puzzle dzo song!",
    ao: "Tajungtiba! Puzzle tembangogo!",
    njm: "Kevi chie! Puzzle mezhie!",
    nsm: "Khulho kevi! Puzzle phu lo!",
    njz: "Ato nyima! Puzzle toka!",
    adi: "Aibelo! Puzzle goka!",
    gal: "Aibe! Puzzle goka!"
  }
};

class SimpleMindBloomApp {
  constructor() {
    this.currentLang = 'en';
    this.currentMode = 'spot_and_name';
    this.score = 0;
    this.sessionId = null;
    this.currentRound = null;
    this.roundStartTime = Date.now();
    this.currentLevel = 1;
    this.mocaScore = 28;
    this.dementiaRisk = "Normal / Preserved";
    this.isProcessing = false;
    this.waterGlassesDrank = 4;
    this.clinicalAssessment = null;

    // Recall & Match trackers
    this.recallSelected = new Set();
    this.recallTimer = null;
    this.cardPair = [];

    // Jigsaw Puzzle State
    this.puzzleRows = 2;
    this.puzzleCols = 2;
    this.jigsawPieces = [];
    this.horizontalEdges = [];
    this.verticalEdges = [];
    this.selectedJigsawGroup = null;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.originalJigsawPositions = [];
    this.puzzleMovesCount = 0;
    this.puzzleStartTime = null;
    this.puzzleTimerInterval = null;
    this.puzzleImageSrc = '/static/images/tea_garden.jpg';
    this.puzzleImageName = 'Assam Tea Garden';
    this.puzzleImage = new Image();
    this.showGhostGuide = true;
    this.puzzleCompleted = false;

    this.initElements();
    this.bindEvents();
    this.initJigsawEvents();
    this.startSession();
  }

  initElements() {
    this.appTitle = document.getElementById('appTitle');
    this.logoSub = document.getElementById('logoSub');
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.soundIcon = document.getElementById('soundIcon');
    this.levelBadge = document.getElementById('levelBadge');
    this.levelBadgeText = document.getElementById('levelBadgeText');
    this.mocaScoreEl = document.getElementById('mocaScore');
    this.mocaBadgeLabel = document.getElementById('mocaBadgeLabel');
    this.doctorBtnText = document.getElementById('doctorBtnText');
    this.remindersBtnText = document.getElementById('remindersBtnText');
    this.langHeading = document.getElementById('langHeading');

    this.lblAdaptiveMode = document.getElementById('lblAdaptiveMode');
    this.lblReactionSpeed = document.getElementById('lblReactionSpeed');
    this.lblDementiaRisk = document.getElementById('lblDementiaRisk');
    this.currentLevelText = document.getElementById('currentLevelText');
    this.reactionSpeedText = document.getElementById('reactionSpeedText');
    this.dementiaRiskText = document.getElementById('dementiaRiskText');

    this.voiceStatus = document.getElementById('voiceStatus');
    this.voiceTranscript = document.getElementById('voiceTranscript');
    this.mainQuestion = document.getElementById('mainQuestion');
    this.simpleHint = document.getElementById('simpleHint');
    this.hearAgainBtn = document.getElementById('hearAgainBtn');
    this.hearAgainText = document.getElementById('hearAgainText');
    this.memoryNotice = document.getElementById('memoryNotice');
    this.memoryNoticeText = document.getElementById('memoryNoticeText');
    this.countdownBar = document.getElementById('countdownBar');

    this.cardsGrid = document.getElementById('cardsGrid');
    this.feedbackBanner = document.getElementById('feedbackBanner');
    this.feedbackEmoji = document.getElementById('feedbackEmoji');
    this.feedbackText = document.getElementById('feedbackText');
    this.pointsEarnedBadge = document.getElementById('pointsEarnedBadge');
    this.nextBtn = document.getElementById('nextBtn');
    this.nextBtnText = document.getElementById('nextBtnText');
    this.chooseGameLabel = document.getElementById('chooseGameLabel');

    this.modeSpot = document.getElementById('modeSpot');
    this.modeRecall = document.getElementById('modeRecall');
    this.modeMatch = document.getElementById('modeMatch');
    this.modeRoutine = document.getElementById('modeRoutine');
    this.modePuzzle = document.getElementById('modePuzzle');
    this.nerSelect = document.getElementById('nerLanguageSelect');

    // Jigsaw Puzzle Elements
    this.puzzleContainer = document.getElementById('puzzleContainer');
    this.puzzleCanvas = document.getElementById('puzzleCanvas');
    this.puzzleCtx = this.puzzleCanvas ? this.puzzleCanvas.getContext('2d') : null;
    this.puzzleThemeLabel = document.getElementById('puzzleThemeLabel');
    this.chipTeaGarden = document.getElementById('chipTeaGarden');
    this.chipTempleBell = document.getElementById('chipTempleBell');
    this.chipKopouOrchid = document.getElementById('chipKopouOrchid');
    this.lblMoves = document.getElementById('lblMoves');
    this.lblTime = document.getElementById('lblTime');
    this.lblPieces = document.getElementById('lblPieces');
    this.lblGuide = document.getElementById('lblGuide');
    this.puzzleMoves = document.getElementById('puzzleMoves');
    this.puzzleTimer = document.getElementById('puzzleTimer');
    this.puzzlePiecesCount = document.getElementById('puzzlePiecesCount');
    this.puzzleGuideStatus = document.getElementById('puzzleGuideStatus');
    this.puzzleShuffleBtn = document.getElementById('puzzleShuffleBtn');
    this.puzzleHintToggleBtn = document.getElementById('puzzleHintToggleBtn');
    this.puzzleRestartBtn = document.getElementById('puzzleRestartBtn');

    // Modals
    this.doctorModalOverlay = document.getElementById('doctorModalOverlay');
    this.doctorInsightsBtn = document.getElementById('doctorInsightsBtn');
    this.closeDoctorModalBtn = document.getElementById('closeDoctorModalBtn');
    this.doneDoctorModalBtn = document.getElementById('doneDoctorModalBtn');
    this.printReportBtn = document.getElementById('printReportBtn');

    this.remindersModalOverlay = document.getElementById('remindersModalOverlay');
    this.dailyRemindersBtn = document.getElementById('dailyRemindersBtn');
    this.closeRemindersModalBtn = document.getElementById('closeRemindersModalBtn');
    this.doneRemindersModalBtn = document.getElementById('doneRemindersModalBtn');
    this.logWaterBtn = document.getElementById('logWaterBtn');
    this.waterGlassesCount = document.getElementById('waterGlassesCount');
    this.waterGlassesRow = document.getElementById('waterGlassesRow');
    this.remindersList = document.getElementById('remindersList');

    // Doctor modal inner fields
    this.modalMocaScore = document.getElementById('modalMocaScore');
    this.modalLevelPill = document.getElementById('modalLevelPill');
    this.modalRiskTag = document.getElementById('modalRiskTag');
    this.modalLatency = document.getElementById('modalLatency');
    this.modalLatencyHint = document.getElementById('modalLatencyHint');
    this.modalDomainBars = document.getElementById('modalDomainBars');
    this.modalFindings = document.getElementById('modalFindings');
    this.modalCaregiverAdvice = document.getElementById('modalCaregiverAdvice');
  }

  bindEvents() {
    // Quick Language Chips
    document.querySelectorAll('.lang-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = chip.getAttribute('data-lang');
        this.setLanguage(selected);
      });
    });

    // North East Regional Select Dropdown
    if (this.nerSelect) {
      this.nerSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val) {
          this.setLanguage(val);
        }
      });
    }

    // Voice sound toggle
    this.soundToggleBtn.addEventListener('click', () => {
      const isVoiceOn = window.voiceEngine.toggleVoice();
      this.soundToggleBtn.classList.toggle('active', isVoiceOn);
      this.soundIcon.textContent = isVoiceOn ? '🔊' : '🔇';
      this.updateVoiceStatusText();
    });

    // Hear Again Button
    this.hearAgainBtn.addEventListener('click', () => {
      if (this.currentMode === 'jigsaw_puzzle') {
        const themeName = this.getActivePuzzleThemeName();
        const ttsPrompt = (PUZZLE_PROMPTS_I18N.tts[this.currentLang] || PUZZLE_PROMPTS_I18N.tts['en']).replace('{name}', themeName);
        window.voiceEngine.speak(ttsPrompt);
      } else if (this.currentRound && this.currentRound.tts_prompt) {
        window.voiceEngine.speak(this.currentRound.tts_prompt);
      }
    });

    // Next Round Button
    this.nextBtn.addEventListener('click', () => {
      this.loadRound();
    });

    // Game Mode Pills
    [this.modeSpot, this.modeRecall, this.modeMatch, this.modeRoutine, this.modePuzzle].filter(Boolean).forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        this.currentMode = btn.getAttribute('data-mode');
        this.loadRound();
      });
    });

    // Doctor Modal
    this.doctorInsightsBtn.addEventListener('click', () => this.openDoctorModal());
    this.closeDoctorModalBtn.addEventListener('click', () => this.doctorModalOverlay.classList.add('hidden'));
    this.doneDoctorModalBtn.addEventListener('click', () => this.doctorModalOverlay.classList.add('hidden'));
    this.printReportBtn.addEventListener('click', () => window.print());

    // Reminders Modal
    this.dailyRemindersBtn.addEventListener('click', () => this.openRemindersModal());
    this.closeRemindersModalBtn.addEventListener('click', () => this.remindersModalOverlay.classList.add('hidden'));
    this.doneRemindersModalBtn.addEventListener('click', () => this.remindersModalOverlay.classList.add('hidden'));

    // Water tracker button
    this.logWaterBtn.addEventListener('click', () => {
      if (this.waterGlassesDrank < 8) {
        this.waterGlassesDrank += 1;
        this.updateWaterTrackerUI();
        window.voiceEngine.playChimeSuccess();
        const ui = this.getUIStrings();
        window.voiceEngine.speak(ui.praiseDefault);
      }
    });

    // Listen for voice recognition callbacks
    window.addEventListener('voice-recognized', (e) => {
      const transcript = e.detail.transcript;
      this.voiceTranscript.innerHTML = `Heard: "<strong>${transcript}</strong>"`;
      this.handleVoiceCommand(transcript);
    });
  }

  getUIStrings() {
    return UI_STRINGS[this.currentLang] || UI_STRINGS['en'];
  }

  async startSession() {
    try {
      const res = await fetch('/api/session/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_name: "Senior Friend",
          initial_mode: this.currentMode,
          lang: this.currentLang
        })
      });
      const data = await res.json();
      this.sessionId = data.session_id;
      if (data.clinical_assessment) {
        this.applyClinicalAssessment(data.clinical_assessment);
      }
      this.updateUILanguage();
      this.loadRound();
    } catch (e) {
      console.warn("Session initiation fallback:", e);
      this.updateUILanguage();
      this.loadRound();
    }
  }

  setLanguage(lang) {
    if (!lang) return;
    this.currentLang = lang;
    document.documentElement.lang = lang;

    // Sync quick chip active states
    document.querySelectorAll('.lang-chip').forEach(chip => {
      chip.classList.toggle('active', chip.getAttribute('data-lang') === lang);
    });

    // Sync dropdown select element
    if (this.nerSelect) {
      if (['en', 'mr', 'hi'].includes(lang)) {
        this.nerSelect.selectedIndex = 0;
      } else {
        this.nerSelect.value = lang;
      }
    }

    window.voiceEngine.setLanguage(lang);
    this.updateUILanguage();
    this.translateCurrentDOMInPlace();
    this.loadRound();
  }

  updateVoiceStatusText() {
    const ui = this.getUIStrings();
    if (this.voiceStatus) {
      this.voiceStatus.textContent = window.voiceEngine.voiceEnabled ? ui.listening : ui.voicePaused;
    }
  }

  updateUILanguage() {
    const ui = this.getUIStrings();

    if (this.appTitle) this.appTitle.textContent = ui.appTitle;
    if (this.logoSub) this.logoSub.textContent = ui.appSubtitle;
    if (this.doctorBtnText) this.doctorBtnText.textContent = ui.doctorBtnText;
    if (this.remindersBtnText) this.remindersBtnText.textContent = ui.remindersBtnText;
    if (this.langHeading) this.langHeading.textContent = ui.langHeading;

    if (this.lblAdaptiveMode) this.lblAdaptiveMode.textContent = ui.lblAdaptiveMode;
    if (this.lblReactionSpeed) this.lblReactionSpeed.textContent = ui.lblReactionSpeed;
    if (this.lblDementiaRisk) this.lblDementiaRisk.textContent = ui.lblDementiaRisk;

    if (this.levelBadgeText) {
      this.levelBadgeText.textContent = ui[`levelBadge${this.currentLevel}`] || `Level ${this.currentLevel}`;
    }
    if (this.currentLevelText) {
      const riskDesc = this.currentLevel === 1 ? ui.riskNormal : (this.currentLevel === 2 ? ui.riskMci : (this.currentLevel === 3 ? ui.riskMod : ui.riskHigh));
      this.currentLevelText.textContent = `Level ${this.currentLevel} (${riskDesc})`;
    }
    if (this.dementiaRiskText) {
      this.dementiaRiskText.textContent = this.currentLevel === 1 ? ui.riskNormal : (this.currentLevel === 2 ? ui.riskMci : (this.currentLevel === 3 ? ui.riskMod : ui.riskHigh));
    }

    this.updateVoiceStatusText();
    if (this.hearAgainText) this.hearAgainText.textContent = ui.hearAgain;
    if (this.nextBtnText) this.nextBtnText.textContent = ui.nextBtn;
    if (this.chooseGameLabel) this.chooseGameLabel.textContent = ui.chooseGame;

    if (this.modeSpot) this.modeSpot.textContent = ui.modeSpot;
    if (this.modeRecall) this.modeRecall.textContent = ui.modeRecall;
    if (this.modeMatch) this.modeMatch.textContent = ui.modeMatch;
    if (this.modeRoutine) this.modeRoutine.textContent = ui.modeRoutine;
    if (this.modePuzzle) this.modePuzzle.textContent = ui.modePuzzle;

    // Puzzle labels
    if (this.puzzleThemeLabel) this.puzzleThemeLabel.textContent = ui.puzzleThemeLabel;
    if (this.chipTeaGarden) this.chipTeaGarden.textContent = ui.teaGarden;
    if (this.chipTempleBell) this.chipTempleBell.textContent = ui.templeBell;
    if (this.chipKopouOrchid) this.chipKopouOrchid.textContent = ui.kopouOrchid;
    if (this.lblMoves) this.lblMoves.textContent = ui.moves;
    if (this.lblTime) this.lblTime.textContent = ui.time;
    if (this.lblPieces) this.lblPieces.textContent = ui.pieces;
    if (this.lblGuide) this.lblGuide.textContent = ui.assistGuide;
    if (this.puzzleShuffleBtn) this.puzzleShuffleBtn.textContent = ui.shuffleBtn;
    if (this.puzzleHintToggleBtn) this.puzzleHintToggleBtn.textContent = ui.ghostBtn;
    if (this.puzzleRestartBtn) this.puzzleRestartBtn.textContent = ui.restartBtn;
  }

  getActivePuzzleThemeId() {
    if (this.puzzleImageSrc && this.puzzleImageSrc.includes('golden_bell')) {
      return 'golden_bell';
    } else if (this.puzzleImageSrc && this.puzzleImageSrc.includes('kopou_orchid')) {
      return 'kopou_orchid';
    }
    return 'tea_garden';
  }

  getActivePuzzleThemeName() {
    const id = this.getActivePuzzleThemeId();
    const lang = this.currentLang;
    if (PUZZLE_THEMES_I18N[id]) {
      return PUZZLE_THEMES_I18N[id][lang] || PUZZLE_THEMES_I18N[id]['en'] || 'Puzzle';
    }
    return 'Puzzle';
  }

  translateCurrentDOMInPlace() {
    const ui = this.getUIStrings();

    // Translate any picture cards visible in the grid
    document.querySelectorAll('.picture-card').forEach(card => {
      const itemId = card.getAttribute('data-id');
      const cardIdx = card.getAttribute('data-card-index');
      const nameEl = card.querySelector('.card-name');

      if (nameEl) {
        if (itemId && ITEM_NAMES_I18N[itemId]) {
          const localizedName = ITEM_NAMES_I18N[itemId][this.currentLang] || ITEM_NAMES_I18N[itemId]['en'];
          nameEl.textContent = localizedName;
        } else if (cardIdx && card.classList.contains('card-hidden')) {
          nameEl.textContent = `${ui.cardBadge} ${cardIdx}`;
        }
      }
    });

    // Translate Active Question if in Spot or Routine mode
    if (this.currentRound && this.currentRound.target_item) {
      const itemId = this.currentRound.target_item.id;
      const targetName = (ITEM_NAMES_I18N[itemId] && ITEM_NAMES_I18N[itemId][this.currentLang]) || this.currentRound.target_item.name;
      const tpl = (QUESTION_TEMPLATES_I18N.find[this.currentLang] || QUESTION_TEMPLATES_I18N.find['en']).replace('{name}', targetName);
      const hintTpl = QUESTION_TEMPLATES_I18N.hint[this.currentLang] || QUESTION_TEMPLATES_I18N.hint['en'];

      if (this.mainQuestion && this.currentMode === 'spot_and_name') {
        this.mainQuestion.textContent = `${this.currentRound.target_item.emoji} ${tpl}`;
      }
      if (this.simpleHint) {
        this.simpleHint.textContent = hintTpl;
      }
      if (this.voiceTranscript) {
        this.voiceTranscript.innerHTML = ui.sayPrompt.replace('{name}', targetName);
      }
    }

    // Translate Puzzle Question, Hint, and Voice in place
    if (this.currentMode === 'jigsaw_puzzle') {
      const themeName = this.getActivePuzzleThemeName();
      const instrTpl = (PUZZLE_PROMPTS_I18N.instruction[this.currentLang] || PUZZLE_PROMPTS_I18N.instruction['en']).replace('{name}', themeName);
      const subTpl = PUZZLE_PROMPTS_I18N.subtext[this.currentLang] || PUZZLE_PROMPTS_I18N.subtext['en'];
      const ttsPrompt = (PUZZLE_PROMPTS_I18N.tts[this.currentLang] || PUZZLE_PROMPTS_I18N.tts['en']).replace('{name}', themeName);

      if (this.mainQuestion) this.mainQuestion.textContent = instrTpl;
      if (this.simpleHint) this.simpleHint.textContent = subTpl;
      if (this.voiceTranscript) {
        this.voiceTranscript.innerHTML = ui.sayPrompt ? ui.sayPrompt.replace('{name}', themeName) : `Listening: ${themeName}`;
      }
      window.voiceEngine.speak(ttsPrompt);
    }
  }

  async loadRound() {
    this.isProcessing = false;
    this.feedbackBanner.classList.add('hidden');
    this.memoryNotice.classList.add('hidden');
    this.recallSelected.clear();
    this.cardPair = [];
    this.roundStartTime = Date.now();

    // Toggle container visibility based on mode
    if (this.currentMode === 'jigsaw_puzzle') {
      this.cardsGrid.classList.add('hidden');
      this.puzzleContainer.classList.remove('hidden');
    } else {
      this.cardsGrid.classList.remove('hidden');
      this.puzzleContainer.classList.add('hidden');
    }

    try {
      const res = await fetch('/api/game/generate-round', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: this.sessionId,
          mode: this.currentMode,
          lang: this.currentLang,
          level: this.currentLevel,
          difficulty: this.currentLevel === 1 ? 2 : 1
        })
      });
      const data = await res.json();
      this.currentRound = data.round;
      this.renderCurrentMode();
    } catch (e) {
      console.warn("Round generation failed, using local generator", e);
    }
  }

  renderCurrentMode() {
    if (!this.currentRound) return;
    if (this.currentMode === 'spot_and_name') {
      this.renderSpot();
    } else if (this.currentMode === 'memory_recall') {
      this.renderRecall();
    } else if (this.currentMode === 'card_match') {
      this.renderMatch();
    } else if (this.currentMode === 'daily_routine') {
      this.renderRoutine();
    } else if (this.currentMode === 'jigsaw_puzzle') {
      this.renderJigsaw();
    }
  }

  /* =========================================================
     Mode 4: Daily Routine & Orientation Recall
     ========================================================= */

  renderRoutine() {
    const ui = this.getUIStrings();
    this.mainQuestion.textContent = this.currentRound.instruction;
    this.simpleHint.textContent = this.currentRound.subtext;
    window.voiceEngine.speak(this.currentRound.tts_prompt);

    this.cardsGrid.innerHTML = '';
    const choices = this.currentRound.choices || [];
    choices.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'picture-card';
      card.setAttribute('data-id', item.id);
      card.setAttribute('data-index', idx + 1);

      card.innerHTML = `
        <div class="card-emoji">${item.emoji}</div>
        <div class="card-name">${item.name}</div>
      `;

      card.addEventListener('click', () => this.handleSpotChoice(item.id, card));
      this.cardsGrid.appendChild(card);
    });
  }

  /* =========================================================
     Mode 1: Spot Item (Object Naming & Identification)
     ========================================================= */

  renderSpot() {
    const ui = this.getUIStrings();
    this.mainQuestion.textContent = this.currentRound.instruction;
    this.simpleHint.textContent = this.currentRound.subtext;
    this.voiceTranscript.innerHTML = ui.sayPrompt.replace('{name}', this.currentRound.target_item.name);
    window.voiceEngine.speak(this.currentRound.tts_prompt);

    this.cardsGrid.innerHTML = '';
    const choices = this.currentRound.choices || [];

    choices.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'picture-card';
      card.setAttribute('data-id', item.id);
      card.setAttribute('data-index', idx + 1);

      // In Level 4, highlight target subtly with gentle pulse for errorless care
      if (this.currentRound.clinical_level === 4 && item.id === this.currentRound.target_id) {
        card.classList.add('highlight-assist');
      }

      card.innerHTML = `
        <div class="card-emoji">${item.emoji}</div>
        <div class="card-name">${item.name}</div>
      `;

      card.addEventListener('click', () => this.handleSpotChoice(item.id, card));
      this.cardsGrid.appendChild(card);
    });
  }

  async handleSpotChoice(selectedId, cardElement) {
    if (this.isProcessing) return;
    this.isProcessing = true;

    const latencyMs = Date.now() - this.roundStartTime;
    const isCorrect = selectedId === this.currentRound.target_id;
    const praise = this.currentRound.praise || "Wonderful job!";
    const tryAgain = this.currentRound.try_again || "Please try again!";

    try {
      const res = await fetch('/api/game/submit-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: this.sessionId,
          mode: this.currentMode,
          user_selection: selectedId,
          target_data: this.currentRound.target_id,
          response_time_ms: latencyMs
        })
      });
      const data = await res.json();
      if (data.clinical_assessment) {
        this.applyClinicalAssessment(data.clinical_assessment);
      }
      this.pointsEarnedBadge.textContent = `+${data.points_earned || 100} pts`;
    } catch (e) {
      console.warn("Submit answer sync:", e);
    }

    if (isCorrect) {
      if (cardElement) cardElement.classList.add('selected-correct');
      window.voiceEngine.playChimeSuccess();

      this.feedbackEmoji.textContent = '🌟';
      this.feedbackText.textContent = praise;
      this.feedbackBanner.classList.remove('hidden');
      window.voiceEngine.speak(praise);
    } else {
      if (cardElement) {
        cardElement.classList.add('selected-wrong');
        setTimeout(() => cardElement.classList.remove('selected-wrong'), 600);
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
     Mode 2: Remember Items (Short-Term Delayed Recall)
     ========================================================= */

  renderRecall() {
    const ui = this.getUIStrings();
    const previewDuration = (this.currentRound.preview_duration_sec || 4) * 1000;

    this.mainQuestion.textContent = this.currentRound.instruction;
    this.simpleHint.textContent = this.currentRound.subtext;
    this.memoryNotice.classList.remove('hidden');
    this.memoryNoticeText.textContent = this.currentRound.subtext;

    if (this.countdownBar) {
      this.countdownBar.style.transition = 'none';
      this.countdownBar.style.width = '100%';
      setTimeout(() => {
        this.countdownBar.style.transition = `width ${previewDuration / 1000}s linear`;
        this.countdownBar.style.width = '0%';
      }, 50);
    }

    window.voiceEngine.speak(this.currentRound.tts_prompt);

    this.cardsGrid.innerHTML = '';
    const targets = this.currentRound.target_items || [];
    targets.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'picture-card selected-correct';
      card.innerHTML = `
        <div class="card-emoji">${item.emoji}</div>
        <div class="card-name">${item.name}</div>
      `;
      this.cardsGrid.appendChild(card);
    });

    clearTimeout(this.recallTimer);
    this.recallTimer = setTimeout(() => {
      this.showRecallChoices();
    }, previewDuration);
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
      card.className = 'picture-card';
      card.setAttribute('data-id', item.id);

      card.innerHTML = `
        <div class="card-emoji">${item.emoji}</div>
        <div class="card-name">${item.name}</div>
      `;

      card.addEventListener('click', () => {
        if (this.currentRound.target_ids.includes(item.id)) {
          this.recallSelected.add(item.id);
          card.classList.add('selected-correct');
          window.voiceEngine.playGentleBeep();

          if (this.recallSelected.size === this.currentRound.target_ids.length) {
            const latencyMs = Date.now() - this.roundStartTime;
            this.handleRecallSuccess(latencyMs);
          }
        } else {
          card.classList.add('selected-wrong');
          setTimeout(() => card.classList.remove('selected-wrong'), 600);
          window.voiceEngine.speak(this.currentRound.try_again || "Please try another item!");
        }
      });

      this.cardsGrid.appendChild(card);
    });
  }

  async handleRecallSuccess(latencyMs) {
    window.voiceEngine.playChimeSuccess();
    this.feedbackEmoji.textContent = '🎉';
    this.feedbackText.textContent = this.currentRound.recall_success;
    this.feedbackBanner.classList.remove('hidden');
    window.voiceEngine.speak(this.currentRound.recall_success);

    try {
      const res = await fetch('/api/game/submit-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: this.sessionId,
          mode: 'memory_recall',
          user_selection: Array.from(this.recallSelected),
          target_data: this.currentRound.target_ids,
          response_time_ms: latencyMs
        })
      });
      const data = await res.json();
      if (data.clinical_assessment) {
        this.applyClinicalAssessment(data.clinical_assessment);
      }
      this.pointsEarnedBadge.textContent = `+${data.points_earned || 120} pts`;
    } catch (e) {
      console.warn("Recall submit sync:", e);
    }
  }

  /* =========================================================
     Mode 3: Match Pairs (Working Memory & Executive Function)
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
      card.className = 'picture-card card-hidden';
      card.setAttribute('data-card-index', c.card_index);

      card.innerHTML = `
        <div class="card-emoji">❓</div>
        <div class="card-name">${ui.cardBadge} ${c.card_index}</div>
      `;

      card.addEventListener('click', () => {
        if (card.classList.contains('selected-correct') || this.cardPair.length >= 2) return;

        window.voiceEngine.playCardFlipSound();
        card.classList.remove('card-hidden');
        card.classList.add('card-flipped');
        card.innerHTML = `
          <div class="card-emoji">${c.emoji}</div>
          <div class="card-name">${c.name}</div>
        `;
        this.cardPair.push({ data: c, el: card });

        if (this.cardPair.length === 2) {
          const [first, second] = this.cardPair;
          if (first.data.item_id === second.data.item_id) {
            first.el.classList.add('selected-correct');
            second.el.classList.add('selected-correct');
            window.voiceEngine.playChimeSuccess();
            matchedCount += 1;
            this.cardPair = [];

            if (matchedCount >= this.currentRound.total_pairs) {
              const latencyMs = Date.now() - this.roundStartTime;
              this.handleMatchSuccess(latencyMs);
            } else {
              const pairMsg = (this.currentRound.pair_praise_template || "Great match! {name}!").replace('{name}', first.data.name);
              window.voiceEngine.speak(pairMsg);
            }
          } else {
            setTimeout(() => {
              first.el.classList.remove('card-flipped');
              first.el.classList.add('card-hidden');
              first.el.innerHTML = `
                <div class="card-emoji">❓</div>
                <div class="card-name">${ui.cardBadge} ${first.data.card_index}</div>
              `;
              second.el.classList.remove('card-flipped');
              second.el.classList.add('card-hidden');
              second.el.innerHTML = `
                <div class="card-emoji">❓</div>
                <div class="card-name">${ui.cardBadge} ${second.data.card_index}</div>
              `;
              this.cardPair = [];
            }, 1000);
          }
        }
      });

      this.cardsGrid.appendChild(card);
    });
  }

  async handleMatchSuccess(latencyMs) {
    this.feedbackEmoji.textContent = '🏆';
    this.feedbackText.textContent = this.currentRound.match_all_done;
    this.feedbackBanner.classList.remove('hidden');
    window.voiceEngine.speak(this.currentRound.match_all_done);

    try {
      const res = await fetch('/api/game/submit-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: this.sessionId,
          mode: 'card_match',
          user_selection: true,
          target_data: true,
          response_time_ms: latencyMs
        })
      });
      const data = await res.json();
      if (data.clinical_assessment) {
        this.applyClinicalAssessment(data.clinical_assessment);
      }
      this.pointsEarnedBadge.textContent = `+${data.points_earned || 150} pts`;
    } catch (e) {
      console.warn("Match submit sync:", e);
    }
  }

  /* =========================================================
     Mode 5: Senior Jigsaw Puzzle (Visuospatial & Constructional)
     ========================================================= */

  initJigsawEvents() {
    if (!this.puzzleCanvas) return;

    // Canvas size
    this.puzzleCanvas.width = 1200;
    this.puzzleCanvas.height = 720;
    this.puzzleBoardWidth = 800;
    this.puzzleBoardHeight = 450;
    this.puzzleBoardX = 200;
    this.puzzleBoardY = 90;

    // Theme Chips
    document.querySelectorAll('.theme-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.theme-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.puzzleImageSrc = chip.getAttribute('data-img');
        this.puzzleImageName = chip.getAttribute('data-name');

        const themeName = this.getActivePuzzleThemeName();
        const instrTpl = (PUZZLE_PROMPTS_I18N.instruction[this.currentLang] || PUZZLE_PROMPTS_I18N.instruction['en']).replace('{name}', themeName);
        const subTpl = PUZZLE_PROMPTS_I18N.subtext[this.currentLang] || PUZZLE_PROMPTS_I18N.subtext['en'];
        const ttsPrompt = (PUZZLE_PROMPTS_I18N.tts[this.currentLang] || PUZZLE_PROMPTS_I18N.tts['en']).replace('{name}', themeName);

        if (this.mainQuestion) this.mainQuestion.textContent = instrTpl;
        if (this.simpleHint) this.simpleHint.textContent = subTpl;
        if (this.voiceTranscript) {
          const ui = this.getUIStrings();
          this.voiceTranscript.innerHTML = ui.sayPrompt ? ui.sayPrompt.replace('{name}', themeName) : `Listening: ${themeName}`;
        }
        window.voiceEngine.speak(ttsPrompt);

        this.startJigsawPuzzle();
      });
    });

    // Control buttons
    if (this.puzzleShuffleBtn) {
      this.puzzleShuffleBtn.addEventListener('click', () => this.startJigsawPuzzle());
    }
    if (this.puzzleRestartBtn) {
      this.puzzleRestartBtn.addEventListener('click', () => this.startJigsawPuzzle());
    }
    if (this.puzzleHintToggleBtn) {
      this.puzzleHintToggleBtn.addEventListener('click', () => {
        this.showGhostGuide = !this.showGhostGuide;
        this.puzzleGuideStatus.textContent = this.showGhostGuide ? 'ON' : 'OFF';
        this.puzzleGuideStatus.style.color = this.showGhostGuide ? '#059669' : '#e11d48';
        this.drawJigsaw();
      });
    }

    // Pointer events for Canvas Drag & Snap
    this.puzzleCanvas.addEventListener('pointerdown', (e) => this.handlePuzzlePointerDown(e));
    this.puzzleCanvas.addEventListener('pointermove', (e) => this.handlePuzzlePointerMove(e));
    this.puzzleCanvas.addEventListener('pointerup', (e) => this.handlePuzzlePointerUp(e));
  }

  renderJigsaw() {
    const themeName = this.getActivePuzzleThemeName();
    const instrTpl = (PUZZLE_PROMPTS_I18N.instruction[this.currentLang] || PUZZLE_PROMPTS_I18N.instruction['en']).replace('{name}', themeName);
    const subTpl = PUZZLE_PROMPTS_I18N.subtext[this.currentLang] || PUZZLE_PROMPTS_I18N.subtext['en'];
    const ttsPrompt = (PUZZLE_PROMPTS_I18N.tts[this.currentLang] || PUZZLE_PROMPTS_I18N.tts['en']).replace('{name}', themeName);

    this.mainQuestion.textContent = (this.currentRound && this.currentRound.instruction) ? this.currentRound.instruction : instrTpl;
    this.simpleHint.textContent = (this.currentRound && this.currentRound.subtext) ? this.currentRound.subtext : subTpl;
    if (this.voiceTranscript) {
      const ui = this.getUIStrings();
      this.voiceTranscript.innerHTML = ui.sayPrompt ? ui.sayPrompt.replace('{name}', themeName) : `Listening: ${themeName}`;
    }

    const fullTts = (this.currentRound && this.currentRound.tts_prompt) ? this.currentRound.tts_prompt : ttsPrompt;
    window.voiceEngine.speak(fullTts);

    // Adapt piece count according to clinical Level (Level 4/3: 2x2 = 4 pcs, Level 2/1: 3x3 = 9 pcs)
    this.puzzleRows = (this.currentLevel >= 3) ? 2 : 3;
    this.puzzleCols = (this.currentLevel >= 3) ? 2 : 3;
    if (this.puzzlePiecesCount) this.puzzlePiecesCount.textContent = this.puzzleRows * this.puzzleCols;

    this.startJigsawPuzzle();
  }

  startJigsawPuzzle() {
    this.puzzleMovesCount = 0;
    this.puzzleMoves.textContent = "0";
    this.puzzleCompleted = false;
    this.selectedJigsawGroup = null;

    this.puzzlePieceWidth = this.puzzleBoardWidth / this.puzzleCols;
    this.puzzlePieceHeight = this.puzzleBoardHeight / this.puzzleRows;
    this.puzzleTabSize = Math.min(this.puzzlePieceWidth, this.puzzlePieceHeight) * 0.18;

    this.puzzleImage.src = this.puzzleImageSrc;
    this.puzzleImage.onload = () => {
      this.generatePuzzleEdges();
      this.createJigsawPieces();
      this.shuffleJigsawPieces();
      this.startJigsawTimer();
      this.drawJigsaw();
    };
  }

  startJigsawTimer() {
    clearInterval(this.puzzleTimerInterval);
    this.puzzleStartTime = Date.now();
    this.puzzleTimerInterval = setInterval(() => {
      if (!this.puzzleStartTime) return;
      const sec = Math.floor((Date.now() - this.puzzleStartTime) / 1000);
      const m = String(Math.floor(sec / 60)).padStart(2, '0');
      const s = String(sec % 60).padStart(2, '0');
      this.puzzleTimer.textContent = `${m}:${s}`;
    }, 1000);
  }

  generatePuzzleEdges() {
    this.horizontalEdges = [];
    this.verticalEdges = [];

    for (let r = 0; r <= this.puzzleRows; r++) {
      this.horizontalEdges[r] = [];
      for (let c = 0; c < this.puzzleCols; c++) {
        this.horizontalEdges[r][c] = (r === 0 || r === this.puzzleRows) ? 0 : (Math.random() < 0.5 ? 1 : -1);
      }
    }

    for (let r = 0; r < this.puzzleRows; r++) {
      this.verticalEdges[r] = [];
      for (let c = 0; c <= this.puzzleCols; c++) {
        this.verticalEdges[r][c] = (c === 0 || c === this.puzzleCols) ? 0 : (Math.random() < 0.5 ? 1 : -1);
      }
    }
  }

  createJigsawPieces() {
    this.jigsawPieces = [];
    let id = 0;

    for (let r = 0; r < this.puzzleRows; r++) {
      for (let c = 0; c < this.puzzleCols; c++) {
        this.jigsawPieces.push({
          id: id++,
          row: r,
          col: c,
          correctX: this.puzzleBoardX + c * this.puzzlePieceWidth,
          correctY: this.puzzleBoardY + r * this.puzzlePieceHeight,
          x: 0,
          y: 0,
          group: id,
          placed: false
        });
      }
    }
  }

  shuffleJigsawPieces() {
    const spreadPositions = [
      { x: 30, y: 50 },
      { x: 30, y: 250 },
      { x: 30, y: 460 },
      { x: 1010, y: 50 },
      { x: 1010, y: 250 },
      { x: 1010, y: 460 },
      { x: 340, y: 560 },
      { x: 620, y: 560 },
      { x: 880, y: 560 }
    ];

    spreadPositions.sort(() => Math.random() - 0.5);

    this.jigsawPieces.forEach((p, idx) => {
      p.x = spreadPositions[idx % spreadPositions.length].x;
      p.y = spreadPositions[idx % spreadPositions.length].y;
      p.group = p.id + 1;
      p.placed = false;
    });

    this.jigsawPieces.sort(() => Math.random() - 0.5);
  }

  drawJigsaw() {
    const ctx = this.puzzleCtx;
    if (!ctx) return;

    ctx.clearRect(0, 0, this.puzzleCanvas.width, this.puzzleCanvas.height);

    // Dark slate canvas background
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, this.puzzleCanvas.width, this.puzzleCanvas.height);

    // Board area
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(this.puzzleBoardX, this.puzzleBoardY, this.puzzleBoardWidth, this.puzzleBoardHeight);

    // Ghost Image Guide for elderly visual support
    if (this.showGhostGuide && this.puzzleImage.complete) {
      ctx.save();
      ctx.globalAlpha = 0.28;
      ctx.drawImage(this.puzzleImage, this.puzzleBoardX, this.puzzleBoardY, this.puzzleBoardWidth, this.puzzleBoardHeight);
      ctx.restore();
    }

    // Grid lines
    ctx.save();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 2;
    for (let r = 0; r < this.puzzleRows; r++) {
      for (let c = 0; c < this.puzzleCols; c++) {
        ctx.strokeRect(
          this.puzzleBoardX + c * this.puzzlePieceWidth,
          this.puzzleBoardY + r * this.puzzlePieceHeight,
          this.puzzlePieceWidth,
          this.puzzlePieceHeight
        );
      }
    }
    ctx.restore();

    // Draw pieces
    this.jigsawPieces.forEach(p => this.drawJigsawPiece(p));
  }

  createJigsawPiecePath(p) {
    const path = new Path2D();
    const x = p.x;
    const y = p.y;
    const w = this.puzzlePieceWidth;
    const h = this.puzzlePieceHeight;

    path.moveTo(x, y);

    // Top
    if (p.row === 0) {
      path.lineTo(x + w, y);
    } else {
      this.drawJigsawEdge(path, x, y, w, this.horizontalEdges[p.row][p.col], true);
    }

    // Right
    if (p.col === this.puzzleCols - 1) {
      path.lineTo(x + w, y + h);
    } else {
      this.drawJigsawEdge(path, x + w, y, h, this.verticalEdges[p.row][p.col + 1], false);
    }

    // Bottom
    if (p.row === this.puzzleRows - 1) {
      path.lineTo(x, y + h);
    } else {
      this.drawJigsawEdge(path, x + w, y + h, -w, this.horizontalEdges[p.row + 1][p.col], true);
    }

    // Left
    if (p.col === 0) {
      path.lineTo(x, y);
    } else {
      this.drawJigsawEdge(path, x, y + h, -h, this.verticalEdges[p.row][p.col], false);
    }

    path.closePath();
    return path;
  }

  drawJigsawEdge(path, x, y, len, outward, isHorizontal) {
    const dir = len >= 0 ? 1 : -1;
    const size = Math.abs(len);
    const start = size * 0.35;
    const end = size * 0.65;
    const center = size * 0.50;
    const tab = this.puzzleTabSize * outward;

    if (isHorizontal) {
      path.lineTo(x + dir * start, y);
      if (outward !== 0) {
        path.bezierCurveTo(
          x + dir * (size * 0.38), y,
          x + dir * (size * 0.38), y + tab,
          x + dir * center, y + tab
        );
        path.bezierCurveTo(
          x + dir * (size * 0.62), y + tab,
          x + dir * (size * 0.62), y,
          x + dir * end, y
        );
      }
      path.lineTo(x + dir * size, y);
    } else {
      path.lineTo(x, y + dir * start);
      if (outward !== 0) {
        path.bezierCurveTo(
          x, y + dir * (size * 0.38),
          x + tab, y + dir * (size * 0.38),
          x + tab, y + dir * center
        );
        path.bezierCurveTo(
          x + tab, y + dir * (size * 0.62),
          x, y + dir * (size * 0.62),
          x, y + dir * end
        );
      }
      path.lineTo(x, y + dir * size);
    }
  }

  drawJigsawPiece(piece) {
    const ctx = this.puzzleCtx;
    const path = this.createJigsawPiecePath(piece);

    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.6)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 4;
    ctx.clip(path);

    const imageX = piece.x - piece.col * this.puzzlePieceWidth;
    const imageY = piece.y - piece.row * this.puzzlePieceHeight;

    ctx.drawImage(this.puzzleImage, imageX, imageY, this.puzzleBoardWidth, this.puzzleBoardHeight);
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = piece.placed ? "rgba(16, 185, 129, 0.9)" : "rgba(255, 255, 255, 0.85)";
    ctx.lineWidth = piece.placed ? 3 : 2;
    ctx.stroke(path);
    ctx.restore();
  }

  getPuzzleCanvasMousePos(e) {
    const rect = this.puzzleCanvas.getBoundingClientRect();
    const scaleX = this.puzzleCanvas.width / rect.width;
    const scaleY = this.puzzleCanvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  handlePuzzlePointerDown(e) {
    if (this.puzzleCompleted) return;
    const mouse = this.getPuzzleCanvasMousePos(e);

    let selectedPiece = null;
    for (let i = this.jigsawPieces.length - 1; i >= 0; i--) {
      const p = this.jigsawPieces[i];
      const path = this.createJigsawPiecePath(p);
      if (this.puzzleCtx.isPointInPath(path, mouse.x, mouse.y)) {
        selectedPiece = p;
        break;
      }
    }

    if (!selectedPiece) return;

    this.selectedJigsawGroup = this.jigsawPieces.filter(p => p.group === selectedPiece.group);
    this.dragStartX = mouse.x;
    this.dragStartY = mouse.y;

    this.originalJigsawPositions = this.selectedJigsawGroup.map(p => ({
      piece: p,
      x: p.x,
      y: p.y
    }));

    // Bring selected group to front
    this.jigsawPieces = this.jigsawPieces.filter(p => p.group !== selectedPiece.group);
    this.jigsawPieces.push(...this.selectedJigsawGroup);

    this.puzzleCanvas.setPointerCapture(e.pointerId);
    this.drawJigsaw();
  }

  handlePuzzlePointerMove(e) {
    if (!this.selectedJigsawGroup) return;
    const mouse = this.getPuzzleCanvasMousePos(e);
    const dx = mouse.x - this.dragStartX;
    const dy = mouse.y - this.dragStartY;

    this.originalJigsawPositions.forEach(item => {
      item.piece.x = item.x + dx;
      item.piece.y = item.y + dy;
    });

    this.drawJigsaw();
  }

  handlePuzzlePointerUp(e) {
    if (!this.selectedJigsawGroup) return;

    this.puzzleMovesCount += 1;
    this.puzzleMoves.textContent = this.puzzleMovesCount;

    this.snapJigsawGroup();
    this.selectedJigsawGroup = null;
    this.originalJigsawPositions = [];

    this.drawJigsaw();
    this.checkJigsawCompleted();
  }

  snapJigsawGroup() {
    const ref = this.selectedJigsawGroup[0];
    const dist = Math.sqrt(Math.pow(ref.x - ref.correctX, 2) + Math.pow(ref.y - ref.correctY, 2));
    const snapDist = Math.min(this.puzzlePieceWidth, this.puzzlePieceHeight) * 0.45;

    if (dist <= snapDist) {
      const dx = ref.correctX - ref.x;
      const dy = ref.correctY - ref.y;

      this.selectedJigsawGroup.forEach(p => {
        p.x += dx;
        p.y += dy;
        p.placed = true;
      });

      window.voiceEngine.playGentleBeep();
      this.connectJigsawNeighbors(this.selectedJigsawGroup);
    }
  }

  connectJigsawNeighbors(group) {
    let changed = true;
    while (changed) {
      changed = false;
      for (const piece of group) {
        const neighbors = [
          { r: piece.row - 1, c: piece.col },
          { r: piece.row + 1, c: piece.col },
          { r: piece.row, c: piece.col - 1 },
          { r: piece.row, c: piece.col + 1 }
        ];

        for (const n of neighbors) {
          if (n.r < 0 || n.r >= this.puzzleRows || n.c < 0 || n.c >= this.puzzleCols) continue;
          const neighbor = this.jigsawPieces.find(p => p.row === n.r && p.col === n.c);
          if (neighbor && neighbor.placed && neighbor.group !== piece.group) {
            const oldGroup = neighbor.group;
            const newGroup = piece.group;
            this.jigsawPieces.forEach(p => {
              if (p.group === oldGroup) p.group = newGroup;
            });
            changed = true;
          }
        }
      }
    }
  }

  checkJigsawCompleted() {
    const isSolved = this.jigsawPieces.every(p => {
      return Math.abs(p.x - p.correctX) < 2 && Math.abs(p.y - p.correctY) < 2;
    });

    if (!isSolved || this.puzzleCompleted) return;

    this.puzzleCompleted = true;
    clearInterval(this.puzzleTimerInterval);

    window.voiceEngine.playChimeSuccess();
    const praise = (PUZZLE_PROMPTS_I18N.praise && PUZZLE_PROMPTS_I18N.praise[this.currentLang]) || (this.currentRound && this.currentRound.praise) || "Wonderful visuospatial skill! You completed the puzzle!";
    this.feedbackEmoji.textContent = '🎉';
    this.feedbackText.textContent = praise;
    this.feedbackBanner.classList.remove('hidden');
    window.voiceEngine.speak(praise);

    const completionSec = Math.floor((Date.now() - this.puzzleStartTime) / 1000);

    // Post to server for Clinical Score evaluation
    fetch('/api/game/submit-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: this.sessionId,
        mode: 'jigsaw_puzzle',
        user_selection: true,
        target_data: true,
        response_time_ms: completionSec * 1000
      })
    })
    .then(r => r.json())
    .then(data => {
      if (data.clinical_assessment) {
        this.applyClinicalAssessment(data.clinical_assessment);
      }
      this.pointsEarnedBadge.textContent = `+${data.points_earned || 200} pts`;
    })
    .catch(err => console.warn("Puzzle submit sync:", err));
  }

  /* =========================================================
     Clinical Assessment & Doctor Level Engine
     ========================================================= */

  applyClinicalAssessment(assessment) {
    if (!assessment) return;
    this.clinicalAssessment = assessment;
    this.currentLevel = assessment.level || 1;
    this.mocaScore = assessment.moca_score || 28;
    const ui = this.getUIStrings();
    this.dementiaRisk = this.currentLevel === 1 ? ui.riskNormal : (this.currentLevel === 2 ? ui.riskMci : (this.currentLevel === 3 ? ui.riskMod : ui.riskHigh));

    // Update Header Badges
    this.mocaScoreEl.textContent = this.mocaScore;
    this.levelBadge.className = `level-indicator-badge level-${this.currentLevel}`;
    this.levelBadgeText.textContent = ui[`levelBadge${this.currentLevel}`] || assessment.stage_name || `Level ${this.currentLevel}`;

    // Update Clinical Status Bar
    this.currentLevelText.textContent = `Level ${this.currentLevel} (${this.dementiaRisk})`;
    this.reactionSpeedText.textContent = `~${assessment.avg_response_sec || 2.4}s`;
    
    this.dementiaRiskText.textContent = this.dementiaRisk;
    this.dementiaRiskText.className = `status-val ${this.currentLevel === 1 ? 'risk-normal' : (this.currentLevel === 2 ? 'risk-mci' : (this.currentLevel === 3 ? 'risk-moderate' : 'risk-assisted'))}`;
  }

  openDoctorModal() {
    const a = this.clinicalAssessment || {
      moca_score: 28,
      level: 1,
      stage_name: "Level 1: Preserved Cognitive Function",
      dementia_risk: "Normal Age-Matched",
      avg_response_sec: 2.4,
      domain_bars: [
        { domain_name: "Object Identification & Naming", score_pct: 95 },
        { domain_name: "Short-Term Delayed Recall", score_pct: 85 },
        { domain_name: "Working Memory & Executive Function", score_pct: 90 },
        { domain_name: "Temporal Orientation & Routine Recall", score_pct: 92 },
        { domain_name: "Visuospatial & Constructional Ability", score_pct: 88 }
      ],
      clinical_finding: "Patient demonstrates sharp visual recognition and brisk reaction time (<2.5s). Visuospatial and naming domains intact.",
      caregiver_note: "Continue daily 15-minute cognitive stimulation, morning hydration, and light social conversations."
    };

    this.modalMocaScore.textContent = a.moca_score;
    this.modalLevelPill.textContent = a.stage_name;
    this.modalRiskTag.textContent = a.dementia_risk;
    this.modalLatency.innerHTML = `${a.avg_response_sec} <span class="unit">sec</span>`;
    this.modalFindings.textContent = a.clinical_finding;
    this.modalCaregiverAdvice.innerHTML = a.caregiver_note.split('. ').map(s => `• ${s}`).join('<br>');

    // Populate Domain Bars
    this.modalDomainBars.innerHTML = '';
    const bars = a.domain_bars || [];
    bars.forEach(b => {
      const item = document.createElement('div');
      item.className = 'domain-bar-item';
      item.innerHTML = `
        <div class="domain-bar-header">
          <span>${b.domain_name}</span>
          <span>${b.score_pct}%</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${b.score_pct}%"></div>
        </div>
      `;
      this.modalDomainBars.appendChild(item);
    });

    this.doctorModalOverlay.classList.remove('hidden');
  }

  /* =========================================================
     Daily Routine & Reminders Modal (PS Requirement E)
     ========================================================= */

  async openRemindersModal() {
    this.updateWaterTrackerUI();
    try {
      const res = await fetch(`/api/clinical/reminders?lang=${this.currentLang}`);
      const data = await res.json();
      this.renderRemindersList(data.reminders || []);
    } catch (e) {
      console.warn("Reminders fetch fallback:", e);
    }
    this.remindersModalOverlay.classList.remove('hidden');
  }

  updateWaterTrackerUI() {
    this.waterGlassesCount.textContent = this.waterGlassesDrank;
    this.waterGlassesRow.innerHTML = '';
    for (let i = 0; i < 8; i++) {
      const span = document.createElement('span');
      span.className = i < this.waterGlassesDrank ? 'glass filled' : 'glass';
      span.textContent = '🥛';
      this.waterGlassesRow.appendChild(span);
    }
  }

  renderRemindersList(reminders) {
    this.remindersList.innerHTML = '';
    reminders.forEach(r => {
      const item = document.createElement('div');
      item.className = 'reminder-item';
      item.innerHTML = `
        <div class="reminder-info">
          <span class="reminder-icon">${r.icon}</span>
          <div>
            <div class="reminder-text-title">${r.title}</div>
            <div class="reminder-time">⏰ ${r.time}</div>
          </div>
        </div>
        <button class="remind-speak-btn" data-tts="${r.tts_prompt}">
          🔊 Hear Alert
        </button>
      `;
      const btn = item.querySelector('.remind-speak-btn');
      btn.addEventListener('click', () => {
        window.voiceEngine.speak(r.tts_prompt);
      });
      this.remindersList.appendChild(item);
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
        const card = document.querySelector(`.picture-card[data-index="${parsed.matched_card_index}"], .picture-card[data-card-index="${parsed.matched_card_index}"]`);
        if (card) card.click();
      } else if (parsed.intent === 'select_item' && parsed.matched_item_id) {
        const card = document.querySelector(`.picture-card[data-id="${parsed.matched_item_id}"]`);
        if (card) card.click();
      }
    } catch (e) {
      console.warn("Voice command processing:", e);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new SimpleMindBloomApp();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/static/sw.js')
      .then(() => console.log('[MindBloom] Offline Service Worker active'))
      .catch(err => console.log('[MindBloom] SW registration note:', err));
  }
});
