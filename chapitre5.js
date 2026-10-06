// ==========================================
// 1. DÉFINITION DES DATA (10 PHRASES)
// ==========================================
const phrasesCh5 = [
  {
    id: 1,
    words: ["كِتَابٌ", "جَمِيلٌ"],
    cleanWords: ["كتاب جميل", "kitabun jamilun"],
    translation: "Un beau livre",
    audio: "audio/audios_ch5/kitabun_jamilun.m4a",
    image: "",
    timings: [0.0, 1.0]
  },
  {
    id: 2,
    words: ["بَيْتٌ", "كَبِيرٌ"],
    cleanWords: ["بيت كبير", "baytun kabirun"],
    translation: "Une grande maison",
    audio: "audio/audios_ch5/baytun_kabirun.m4a",
    image: "",
    timings: [0.0, 1.0]
  },
  {
    id: 3,
    words: ["بِنْتٌ", "صَغِيرَةٌ"],
    cleanWords: ["بنت صغيرة", "bintun saghiratun"],
    translation: "Une petite fille",
    audio: "audio/audios_ch5/bintun_saghiratun.m4a",
    image: "",
    timings: [0.0, 1.0]
  },
  {
    id: 4,
    words: ["الْوَلَدُ", "ذَكِيٌّ"],
    cleanWords: ["الولد ذكي", "al waladu zakiyyun"],
    translation: "Le garçon est intelligent",
    audio: "audio/audios_ch5/al_waladu_zakiyyun.m4a",
    image: "",
    timings: [0.0, 1.0]
  },
  {
    id: 5,
    words: ["الشَّمْسُ", "مُشْرِقَةٌ"],
    cleanWords: ["الشمس مشريقة", "ash shamsu mushriqatun"],
    translation: "Le soleil est brillant",
    audio: "audio/audios_ch5/ash_shamsu_mushriqatun.m4a",
    image: "",
    timings: [0.0, 1.0]
  },
  {
    id: 6,
    words: ["الْمَاءُ", "بَارِدٌ"],
    cleanWords: ["الماء بارد", "al mau baridun"],
    translation: "L'eau est froide",
    audio: "audio/audios_ch5/al_mau_baridun.m4a",
    image: "",
    timings: [0.0, 1.0]
  },
  {
    id: 7,
    words: ["هٰذَا", "مُعَلِّمٌ"],
    cleanWords: ["هذا معلم", "hadha muallimun"],
    translation: "C'est un enseignant",
    audio: "audio/audios_ch5/hadha_muallimun.m4a",
    image: "",
    timings: [0.0, 0.9]
  },
  {
    id: 8,
    words: ["هٰذِهِ", "طَالِبَةٌ"],
    cleanWords: ["هذه طالبة", "hadhihi talibatun"],
    translation: "C'est une étudiante",
    audio: "audio/audios_ch5/hadhihi_talibatun.m4a",
    image: "",
    timings: [0.0, 0.9]
  },
  {
    id: 9,
    words: ["الْبَابُ", "مَفْتُوحٌ"],
    cleanWords: ["الباب مفتوح", "al babu maftuhun"],
    translation: "La porte est ouverte",
    audio: "audio/audios_ch5/al_babu_maftuhun.m4a",
    image: "",
    timings: [0.0, 1.0]
  },
  {
    id: 10,
    words: ["الرَّجُلُ", "طَوِيلٌ"],
    cleanWords: ["الرجل طويل", "ar rajulu tawilun"],
    translation: "L'homme est grand",
    audio: "audio/audios_ch5/ar_rajulu_tawilun.m4a",
    image: "",
    timings: [0.0, 1.0]
  }
];

let currentIndexCh5 = 0;
let currentAudioCh5 = new Audio();
let testIndexCh5 = 0;
let testAudioCh5 = new Audio();
let recognitionCh5 = null;

// Variables pour l'analyse des résultats du test
let testScoreJusteCh5 = 0;
let testScoreFauxCh5 = 0;
let currentQuestionAnsweredCh5 = false;

// Fichiers audio de feedback
const audioJusteCh5 = new Audio('reponse_juste.m4a');
const audioFausseCh5 = new Audio('reponse_fausse.m4a');

// ==========================================
// 2. INITIALISATION SÉCURISÉE DE L'INTERFACE
// ==========================================
function initChapitre5() {
  if (!document.getElementById('ch5-dynamic-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'ch5-dynamic-styles';
    styleElement.textContent = `
      .workshop-card {
        background: #ffffff;
        width: 100%;
        max-width: 600px;
        margin: 20px auto;
        border-radius: 16px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        padding: 25px;
        text-align: center;
        box-sizing: border-box;
      }
      .header-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #e2e8f0;
        padding-bottom: 12px;
        margin-bottom: 20px;
        flex-wrap: wrap;
        gap: 10px;
      }
      .badge-counter {
        background-color: #e0f2fe;
        color: #0284c7;
        font-weight: bold;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.9rem;
      }
      .btn-home {
        background-color: #f1f5f9;
        color: #475569;
        border: 1px solid #cbd5e1;
        padding: 6px 12px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        font-size: 0.85rem;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        transition: background 0.2s;
      }
      .btn-home:hover {
        background-color: #e2e8f0;
        color: #1e293b;
      }
      .image-container {
        width: 100%;
        height: 200px;
        background-color: #f8fafc;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        overflow: hidden;
        border: 1px solid #e2e8f0;
      }
      .image-container img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
      }
      .arabic-container {
        direction: rtl;
        font-size: 2.5rem;
        font-family: 'Traditional Arabic', 'Amiri', serif;
        font-weight: bold;
        margin: 20px 0;
        min-height: 60px;
      }
      .word-ch5 {
        padding: 2px 8px;
        border-radius: 8px;
        transition: background-color 0.2s, color 0.2s, transform 0.2s;
        display: inline-block;
        color: #1e293b;
      }
      .word-ch5.active {
        background-color: #10b981;
        color: #ffffff;
        transform: scale(1.1);
        box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
      }
      .translation-container {
        margin: 15px 0 25px 0;
        min-height: 30px;
      }
      .translation-text {
        font-size: 1.1rem;
        color: #475569;
        font-style: italic;
      }
      .controls {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .btn-ch5 {
        border: none;
        padding: 10px 16px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s, transform 0.1s;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .btn-ch5:active { transform: scale(0.96); }
      .btn-play { background-color: #10b981; color: white; font-size: 1.05rem; }
      .btn-play:hover { background-color: #059669; }
      .btn-nav { background-color: #f1f5f9; color: #334155; }
      .btn-nav:hover { background-color: #e2e8f0; }
      .btn-toggle { background-color: #fffbeb; color: #d97706; border: 1px dashed #fcd34d; }
      
      .section-switch {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-bottom: 15px;
      }
      .btn-switch {
        padding: 8px 14px;
        border-radius: 8px;
        border: 1px solid #cbd5e1;
        background: #f8fafc;
        font-weight: 600;
        cursor: pointer;
        font-size: 0.9rem;
      }
      .btn-switch.active-tab {
        background: #0284c7;
        color: white;
        border-color: #0284c7;
      }
      .test-actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
      }
      .btn-mic-test { background-color: #8b5cf6; color: white; font-size: 1.05rem; justify-content: center; }
      .btn-mic-test:hover { background-color: #7c3aed; }
      .btn-mic-test.recording { background-color: #ef4444; animation: pulse 1.5s infinite; }
      .btn-success-test { background-color: #10b981; color: white; font-size: 1.05rem; justify-content: center; }
      .btn-success-test:hover { background-color: #059669; }
      .btn-retry-test { background-color: #f59e0b; color: white; justify-content: center; }
      .btn-retry-test:hover { background-color: #d97706; }
      .btn-correction-test { background-color: #64748b; color: white; justify-content: center; }
      .btn-correction-test:hover { background-color: #475569; }

      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.03); box-shadow: 0 0 15px rgba(239, 68, 68, 0.5); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(styleElement);
  }

  let targetContainer = document.getElementById('atelier-lecture') || document.getElementById('contenu-chapitre-5');
  if (!targetContainer) {
    targetContainer = document.createElement('div');
    targetContainer.id = 'contenu-chapitre-5';
    document.body.appendChild(targetContainer);
  }

  targetContainer.innerHTML = `
    <div class="section-switch">
      <button class="btn-switch active-tab" id="tab-train-ch5" onclick="switchCh5Tab('train')">📖 1. Entraînement</button>
      <button class="btn-switch" id="tab-test-ch5" onclick="switchCh5Tab('test')">🎯 2. Tester sa compréhension</button>
    </div>

    <!-- PARTIE 1 : ENTRAÎNEMENT -->
    <div id="module-train-ch5" class="workshop-card">
      <div class="header-bar">
        <button class="btn-home" onclick="returnToMainMenu()">🏠 Menu principal</button>
        <h3 style="margin:0; color:#0f172a;">📖 Entraînement</h3>
        <span class="badge-counter" id="counter-ch5">1 / 10</span>
      </div>

      <div class="image-container" id="image-container-ch5" style="display: none;">
        <img id="card-image-ch5" src="" alt="Illustration">
      </div>

      <div class="arabic-container" id="arabic-text-ch5"></div>

      <div class="translation-container">
        <span class="translation-text" id="translation-ch5"></span>
      </div>

      <div class="controls">
        <button class="btn-ch5 btn-nav" id="btn-prev-ch5">⬅️ Précédent</button>
        <button class="btn-ch5 btn-play" id="btn-play-ch5">▶️ Top Départ</button>
        <button class="btn-ch5 btn-nav" id="btn-next-ch5">Suivant ➡️</button>
      </div>

      <div style="margin-top: 15px;">
        <button class="btn-ch5 btn-toggle" id="btn-toggle-ch5">👁️ Masquer / Afficher la traduction</button>
      </div>
    </div>

    <!-- PARTIE 2 : TESTER SA COMPRÉHENSION -->
    <div id="module-test-ch5" class="workshop-card" style="display: none;">
      <div class="header-bar">
        <button class="btn-home" onclick="returnToMainMenu()">🏠 Menu principal</button>
        <h3 style="margin:0; color:#0f172a;">🎯 Teste ta lecture</h3>
        <span class="badge-counter" id="test-counter-ch5">1 / 10</span>
      </div>

      <div id="test-active-content">
        <p style="color: #475569; font-size: 0.95rem; margin-bottom: 5px;">Lis la phrase ci-dessous à voix haute dans le micro :</p>
        <p id="mic-status-ch5" style="font-size: 0.85rem; color: #64748b; min-height: 20px; margin-bottom: 10px;"></p>

        <div class="arabic-container" id="test-arabic-text-ch5"></div>

        <div class="translation-container" id="test-translation-container-ch5" style="display: none;">
          <span class="translation-text" id="test-translation-ch5" style="color: #047857; font-weight: bold;"></span>
        </div>

        <div class="test-actions" id="test-buttons-initial">
          <button class="btn-ch5 btn-mic-test" id="btn-mic-ch5" onclick="toggleSpeechRecognitionCh5()">🎤 Parler (Lire la phrase)</button>
          <button class="btn-ch5 btn-success-test" onclick="handleTestSuccess()">✅ J'ai réussi ! (Forcer)</button>
          <div style="display: flex; gap: 10px;">
            <button class="btn-ch5 btn-retry-test" style="flex:1;" onclick="handleTestRetry()">🔄 Relire</button>
            <button class="btn-ch5 btn-correction-test" style="flex:1;" onclick="handleTestCorrection()">👁️ Correction (Écouter / Voir)</button>
          </div>
        </div>

        <div class="test-actions" id="test-buttons-next" style="display: none;">
          <button class="btn-ch5 btn-play" onclick="nextTestPhrase()">Passer à la suite ➡️</button>
        </div>
      </div>

      <!-- BLOC DE BILAN FINAL (Affiché à la fin des 10 questions) -->
      <div id="test-results-summary" style="display: none; text-align: center; padding: 20px 0;">
        <h3 style="color: #0f172a; margin-bottom: 15px;">📊 Bilan de votre test</h3>
        <p style="font-size: 1.1rem; margin-bottom: 10px; color: #10b981; font-weight: bold;">
          ✅ Réponses justes : <span id="score-juste-val">0</span> / 10
        </p>
        <p style="font-size: 1.1rem; margin-bottom: 25px; color: #ef4444; font-weight: bold;">
          ❌ Réponses fausses / à revoir : <span id="score-faux-val">0</span> / 10
        </p>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
          <button class="btn-ch5 btn-play" onclick="restartTestCh5()">🔄 Recommencer le test</button>
          <button class="btn-ch5 btn-nav" onclick="returnToMainMenu()">🏠 Retour au menu</button>
        </div>
      </div>
    </div>
  `;

  const btnPrev = document.getElementById('btn-prev-ch5');
  const btnNext = document.getElementById('btn-next-ch5');
  const btnPlay = document.getElementById('btn-play-ch5');
  const btnToggle = document.getElementById('btn-toggle-ch5');

  if (btnPrev) btnPrev.addEventListener('click', () => changePhraseCh5(-1));
  if (btnNext) btnNext.addEventListener('click', () => changePhraseCh5(1));
  if (btnPlay) btnPlay.addEventListener('click', playAudioCh5);
  if (btnToggle) btnToggle.addEventListener('click', toggleTranslationCh5);

  loadPhraseCh5(currentIndexCh5);
  loadTestPhraseCh5(testIndexCh5);
  initSpeechRecognitionCh5();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChapitre5);
} else {
  initChapitre5();
}

// ==========================================
// 3. FONCTIONS LOGIQUES - PARTIE 1
// ==========================================
function loadPhraseCh5(index) {
  const item = phrasesCh5[index];
  if (!item) return;

  const counter = document.getElementById('counter-ch5');
  if (counter) counter.innerText = `${index + 1} / ${phrasesCh5.length}`;

  const translation = document.getElementById('translation-ch5');
  if (translation) translation.innerText = item.translation;

  const imgContainer = document.getElementById('image-container-ch5');
  const cardImage = document.getElementById('card-image-ch5');
  if (imgContainer && cardImage) {
    if (item.image && item.image.trim() !== "") {
      cardImage.src = item.image;
      imgContainer.style.display = 'flex';
    } else {
      cardImage.src = '';
      imgContainer.style.display = 'none';
    }
  }

  const container = document.getElementById('arabic-text-ch5');
  if (container) {
    container.innerHTML = '';
    item.words.forEach((word, wIndex) => {
      const span = document.createElement('span');
      span.className = 'word-ch5';
      span.id = `word-ch5-${wIndex}`;
      span.innerText = word + ' ';
      container.appendChild(span);
    });
  }

  currentAudioCh5.src = item.audio;
  currentAudioCh5.load();

  currentAudioCh5.ontimeupdate = () => {
    const currentTime = currentAudioCh5.currentTime;
    const timings = item.timings;

    item.words.forEach((_, wIndex) => {
      const el = document.getElementById(`word-ch5-${wIndex}`);
      if (!el) return;
      const startTime = timings[wIndex];
      const nextTime = timings[wIndex + 1] || currentAudioCh5.duration || 99;

      if (currentTime >= startTime && currentTime < nextTime) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  };

  currentAudioCh5.onended = () => {
    item.words.forEach((_, wIndex) => {
      const el = document.getElementById(`word-ch5-${wIndex}`);
      if (el) el.classList.remove('active');
    });
  };
}

function playAudioCh5() {
  currentAudioCh5.currentTime = 0;
  currentAudioCh5.play().catch(e => console.log("Erreur de lecture : ", e));
}

function changePhraseCh5(step) {
  currentAudioCh5.pause();
  currentIndexCh5 += step;

  if (currentIndexCh5 < 0) currentIndexCh5 = phrasesCh5.length - 1;
  if (currentIndexCh5 >= phrasesCh5.length) currentIndexCh5 = 0;

  loadPhraseCh5(currentIndexCh5);
}

function toggleTranslationCh5() {
  const el = document.getElementById('translation-ch5');
  if (el) {
    el.style.visibility = (el.style.visibility === 'hidden') ? 'visible' : 'hidden';
  }
}

// ==========================================
// 4. FONCTIONS RECONNAISSANCE VOCALE (MICRO)
// ==========================================
function initSpeechRecognitionCh5() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn("La reconnaissance vocale n'est pas supportée par ce navigateur.");
    return;
  }

  recognitionCh5 = new SpeechRecognition();
  recognitionCh5.lang = 'ar-SA';
  recognitionCh5.interimResults = false;
  recognitionCh5.maxAlternatives = 3;

  recognitionCh5.onstart = () => {
    const btnMic = document.getElementById('btn-mic-ch5');
    const status = document.getElementById('mic-status-ch5');
    if (btnMic) {
      btnMic.classList.add('recording');
      btnMic.innerText = "Listening... Parlez maintenant 🔴";
    }
    if (status) status.innerText = "Écoute en cours...";
  };

  recognitionCh5.onresult = (event) => {
    const speechResult = event.results[0][0].transcript.trim();
    const status = document.getElementById('mic-status-ch5');

    const currentItem = phrasesCh5[testIndexCh5];
    let matched = false;
    
    currentItem.cleanWords.forEach(cw => {
      if (speechResult.includes(cw) || cw.includes(speechResult) || speechResult === cw) {
        matched = true;
      }
    });

    if (matched) {
      // ✅ BONNE RÉPONSE
      if (status) status.innerHTML = `<span style="color: #10b981; font-weight: bold;">Sahhih (صحيح) ! Vous avez dit : "${speechResult}"</span>`;

      audioJusteCh5.currentTime = 0;
      audioJusteCh5.play().catch(e => console.log("Erreur lecture audio juste:", e));

      setTimeout(() => {
        handleTestSuccess();
      }, 1000);
    } else {
      // ❌ MAUVAISE RÉPONSE
      if (status) status.innerHTML = `<span style="color: #ef4444; font-weight: bold;">Essayez encore. Vous avez dit : "${speechResult}"</span>`;

      audioFausseCh5.currentTime = 0;
      audioFausseCh5.play().catch(e => console.log("Erreur lecture audio faux:", e));
    }
  };

  recognitionCh5.onerror = (event) => {
    const status = document.getElementById('mic-status-ch5');
    if (status) status.innerText = "Erreur micro : " + event.error;
    
    audioFausseCh5.currentTime = 0;
    audioFausseCh5.play().catch(e => console.log("Erreur lecture audio faux:", e));

    resetMicButtonCh5();
  };

  recognitionCh5.onend = () => {
    resetMicButtonCh5();
  };
}

function toggleSpeechRecognitionCh5() {
  if (!recognitionCh5) {
    alert("Votre navigateur ne supporte pas la reconnaissance vocale. Utilisez Chrome ou Edge, ou cliquez sur 'J'ai réussi'.");
    return;
  }
  try {
    recognitionCh5.start();
  } catch (e) {
    recognitionCh5.stop();
  }
}

function resetMicButtonCh5() {
  const btnMic = document.getElementById('btn-mic-ch5');
  if (btnMic) {
    btnMic.classList.remove('recording');
    btnMic.innerText = "🎤 Parler (Lire la phrase)";
  }
}

// ==========================================
// 5. FONCTIONS LOGIQUES - PARTIE 2 (TEST)
// ==========================================
function switchCh5Tab(tab) {
  const trainModule = document.getElementById('module-train-ch5');
  const testModule = document.getElementById('module-test-ch5');
  const tabTrain = document.getElementById('tab-train-ch5');
  const tabTest = document.getElementById('tab-test-ch5');

  if (tab === 'train') {
    testAudioCh5.pause();
    if (recognitionCh5) recognitionCh5.stop();
    if (trainModule) trainModule.style.display = 'block';
    if (testModule) testModule.style.display = 'none';
    if (tabTrain) tabTrain.classList.add('active-tab');
    if (tabTest) tabTest.classList.remove('active-tab');
    loadPhraseCh5(currentIndexCh5);
  } else {
    currentAudioCh5.pause();
    if (trainModule) trainModule.style.display = 'none';
    if (testModule) testModule.style.display = 'block';
    if (tabTest) tabTest.classList.add('active-tab');
    if (tabTrain) tabTrain.classList.remove('active-tab');
    loadTestPhraseCh5(testIndexCh5);
  }
}

function loadTestPhraseCh5(index) {
  const item = phrasesCh5[index];
  if (!item) return;

  currentQuestionAnsweredCh5 = false;

  const counter = document.getElementById('test-counter-ch5');
  if (counter) counter.innerText = `${index + 1} / ${phrasesCh5.length}`;

  const container = document.getElementById('test-arabic-text-ch5');
  if (container) {
    container.innerHTML = item.words.join(' ');
  }

  const status = document.getElementById('mic-status-ch5');
  if (status) status.innerText = "";

  const transContainer = document.getElementById('test-translation-container-ch5');
  const transText = document.getElementById('test-translation-ch5');
  if (transContainer && transText) {
    transContainer.style.display = 'none';
    transText.innerText = `Traduction : ${item.translation}`;
  }

  const btnInitial = document.getElementById('test-buttons-initial');
  const btnNext = document.getElementById('test-buttons-next');
  if (btnInitial) btnInitial.style.display = 'flex';
  if (btnNext) btnNext.style.display = 'none';

  testAudioCh5.src = item.audio;
  testAudioCh5.load();
}

function handleTestSuccess() {
  if (recognitionCh5) recognitionCh5.stop();

  if (!currentQuestionAnsweredCh5) {
    testScoreJusteCh5++;
    currentQuestionAnsweredCh5 = true;
  }

  audioJusteCh5.currentTime = 0;
  audioJusteCh5.play().catch(e => console.log("Erreur lecture audio juste:", e));

  const btnInitial = document.getElementById('test-buttons-initial');
  const btnNext = document.getElementById('test-buttons-next');
  if (btnInitial) btnInitial.style.display = 'none';
  if (btnNext) btnNext.style.display = 'block';
}

function handleTestRetry() {
  if (!currentQuestionAnsweredCh5) {
    testScoreFauxCh5++;
    currentQuestionAnsweredCh5 = true;
  }

  const status = document.getElementById('mic-status-ch5');
  if (status) status.innerText = "Réessayez de lire à haute voix.";

  audioFausseCh5.currentTime = 0;
  audioFausseCh5.play().catch(e => console.log("Erreur lecture audio faux:", e));
}

function handleTestCorrection() {
  const transContainer = document.getElementById('test-translation-container-ch5');
  if (transContainer) transContainer.style.display = 'block';
  testAudioCh5.currentTime = 0;
  testAudioCh5.play().catch(e => console.log("Erreur audio test :", e));
}

function nextTestPhrase() {
  testAudioCh5.pause();
  if (recognitionCh5) recognitionCh5.stop();
  testIndexCh5++;

  if (testIndexCh5 >= phrasesCh5.length) {
    // Affichage du bilan final à la place de l'alerte
    showTestSummary();
  } else {
    loadTestPhraseCh5(testIndexCh5);
  }
}

function showTestSummary() {
  const activeContent = document.getElementById('test-active-content');
  const summaryBlock = document.getElementById('test-results-summary');
  
  if (activeContent) activeContent.style.display = 'none';
  if (summaryBlock) summaryBlock.style.display = 'block';

  const justeVal = document.getElementById('score-juste-val');
  const fauxVal = document.getElementById('score-faux-val');

  if (justeVal) justeVal.innerText = testScoreJusteCh5;
  if (fauxVal) fauxVal.innerText = testScoreFauxCh5;
}

function restartTestCh5() {
  testIndexCh5 = 0;
  testScoreJusteCh5 = 0;
  testScoreFauxCh5 = 0;
  currentQuestionAnsweredCh5 = false;

  const activeContent = document.getElementById('test-active-content');
  const summaryBlock = document.getElementById('test-results-summary');

  if (activeContent) activeContent.style.display = 'block';
  if (summaryBlock) summaryBlock.style.display = 'none';

  loadTestPhraseCh5(testIndexCh5);
}

// Fonction globale pour quitter le chapitre et revenir au menu principal
function returnToMainMenu() {
  testAudioCh5.pause();
  currentAudioCh5.pause();
  if (recognitionCh5) recognitionCh5.stop();

  // Redirection personnalisable selon la structure de votre application globale (ex: rechargement ou masquage)
  const contenuCh5 = document.getElementById('contenu-chapitre-5');
  if (contenuCh5) {
    contenuCh5.style.display = 'none';
  }
  
  // Si votre application utilise une fonction globale de retour au menu, décommentez la ligne ci-dessous :
  // if (typeof showMainMenu === 'function') { showMainMenu(); return; }

  // Fallback par défaut : redirection vers l'index ou rechargement propre
  window.location.href = 'index.html'; 
}