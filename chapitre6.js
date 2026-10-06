// ==========================================================================
// CHAPITRE 6 : MAÎTRISE & AUTONOMIE — LIRE & Éِِعْرَة... (MIS À JOUR : MOT À MOT PUIS TEXTE COMPLET)
// ==========================================================================

const chapitre6Data = [
    {
        level: 1,
        title: "📖 1. Écoute, Observation, Reconstitution une phrase courte",
        subTitle: "Lisez et analysez le texte en autonomie complète.",
        texteComplet: "ذَهَبَ فَرِيدٌ إِلَى الْمَدْرَسَةِ فِي الصَّبَاحِ. قَرَأَ كِتَاباً جَمِيلاً وَكَتَبَ الدَّرْسَ. ثُمَّ رَجَعَ إِلَى الْبَيْتِ مَسْرُوراً.",
        audioComplet: "audio/audio_ch6/immersion_lecture.m4a",
        mots: [
            { id: 1, arabe: "ذَهَبَ", trans: "Est allé", audio: "audio/audio_ch6/m1_dhahaba.m4a" },
            { id: 2, arabe: "فَرِيدٌ", trans: "Farid", audio: "audio/audio_ch6/m2_farid.m4a" },
            { id: 3, arabe: "إِلَى", trans: "à / vers", audio: "audio/audio_ch6/m3_ila.m4a" },
            { id: 4, arabe: "الْمَدْرَسَةِ", trans: "l'école", audio: "audio/audio_ch6/m4_almadrasati.m4a" },
            { id: 5, arabe: "فِي", trans: "dans / le", audio: "audio/audio_ch6/m5_fi.m4a" },
            { id: 6, arabe: "الصَّبَاحِ", trans: "matin", audio: "audio/audio_ch6/m6_assabahi.m4a" },
            { id: 7, arabe: "قَرَأَ", trans: "A lu", audio: "audio/audio_ch6/m7_qaraa.m4a" },
            { id: 8, arabe: "كِتَاباً", trans: "un livre", audio: "audio/audio_ch6/m8_kitaban.m4a" },
            { id: 9, arabe: "جَمِيلاً", trans: "beau", audio: "audio/audio_ch6/m9_jamilan.m4a" },
            { id: 10, arabe: "وَكَتَبَ", trans: "et a écrit", audio: "audio/audio_ch6/m10_wakataba.m4a" },
            { id: 11, arabe: "الدَّرْسَ", trans: "la leçon", audio: "audio/audio_ch6/m11_addarsa.m4a" },
            { id: 12, arabe: "ثُمَّ", trans: "Puis", audio: "audio/audio_ch6/m12_thoumma.m4a" },
            { id: 13, arabe: "رَجَعَ", trans: "est revenu", audio: "audio/audio_ch6/m13_rajaa.m4a" },
            { id: 14, arabe: "إِلَى الْبَيْتِ", trans: "à la maison", audio: "audio/audio_ch6/m14_ilalbayti.m4a" },
            { id: 15, arabe: "مَسْرُوراً", trans: "joyeux", audio: "audio/audio_ch6/m15_masrooran.m4a" }
        ]
    },
    {
        level: 2,
        title: "✍ 2. Écoute, Observation, Reconstitution une phrase moyenne",
        subTitle: "Composez et structurez vos propres textes sans aide.",
        texteComplet: "فِي يَوْمِ الْأَحَدِ، ذَهَبَ سَامِي مَعَ أُسْرَتِهِ إِلَى الْحَدِيقَةِ الْكَبِيرَةِ. لَعِبَ الْوَلَدُ بِالْكُرَةِ مَعَ أَخِيهِ. أَلْقَتِ الْأُمُّ التَّحِيَّةَ عَلَى الْجِيرَانِ، وَجَلَسَ الْأَبُ تَحْتَ الشَّجَرَةِ يَشْرَبُ الشَّايَ. كَانَ الْيَوْمُ جَمِيلاً جِدًّا.",
        audioComplet: "audio/audio_ch6/ch6_n2_complet.m4a",
        mots: [
            { id: 1, arabe: "فِي", trans: "dans / en", audio: "audio/audio_ch6/ch6_n2_m01.m4a" },
            { id: 2, arabe: "يَوْمِ", trans: "jour", audio: "audio/audio_ch6/ch6_n2_m02.m4a" },
            { id: 3, arabe: "الْأَحَدِ", trans: "le dimanche", audio: "audio/audio_ch6/ch6_n2_m03.m4a" },
            { id: 4, arabe: "ذَهَبَ", trans: "est allé", audio: "audio/audio_ch6/ch6_n2_m04.m4a" },
            { id: 5, arabe: "سَامِي", trans: "Sami", audio: "audio/audio_ch6/ch6_n2_m05.m4a" },
            { id: 6, arabe: "مَعَ", trans: "avec", audio: "audio/audio_ch6/ch6_n2_m06.m4a" },
            { id: 7, arabe: "أُسْرَتِهِ", trans: "sa famille", audio: "audio/audio_ch6/ch6_n2_m07.m4a" },
            { id: 8, arabe: "إِلَى", trans: "à / vers", audio: "audio/audio_ch6/ch6_n2_m08.m4a" },
            { id: 9, arabe: "الْحَدِيقَةِ", trans: "le jardin", audio: "audio/audio_ch6/ch6_n2_m09.m4a" },
            { id: 10, arabe: "الْكَبِيرَةِ", trans: "la grande", audio: "audio/audio_ch6/ch6_n2_m10.m4a" },
            { id: 11, arabe: "لَعِبَ", trans: "a joué", audio: "audio/audio_ch6/ch6_n2_m11.m4a" },
            { id: 12, arabe: "الْوَلَدُ", trans: "le garçon", audio: "audio/audio_ch6/ch6_n2_m12.m4a" },
            { id: 13, arabe: "بِالْكُرَةِ", trans: "avec le ballon", audio: "audio/audio_ch6/ch6_n2_m13.m4a" },
            { id: 14, arabe: "مَعَ", trans: "avec", audio: "audio/audio_ch6/ch6_n2_m14.m4a" },
            { id: 15, arabe: "أَخِيهِ", trans: "son frère", audio: "audio/audio_ch6/ch6_n2_m15.m4a" },
            { id: 16, arabe: "أَلْقَتِ", trans: "a adressé", audio: "audio/audio_ch6/ch6_n2_m16.m4a" },
            { id: 17, arabe: "الْأُمُّ", trans: "la mère", audio: "audio/audio_ch6/ch6_n2_m17.m4a" },
            { id: 18, arabe: "التَّحِيَّةَ", trans: "le salut", audio: "audio/audio_ch6/ch6_n2_m18.m4a" },
            { id: 19, arabe: "عَلَى", trans: "sur / à", audio: "audio/audio_ch6/ch6_n2_m19.m4a" },
            { id: 20, arabe: "الْجِيرَانِ", trans: "les voisins", audio: "audio/audio_ch6/ch6_n2_m20.m4a" },
            { id: 21, arabe: "وَجَلَسَ", trans: "et s'est assis", audio: "audio/audio_ch6/ch6_n2_m21.m4a" },
            { id: 22, arabe: "الْأَبُ", trans: "le père", audio: "audio/audio_ch6/ch6_n2_m22.m4a" },
            { id: 23, arabe: "تَحْتَ", trans: "sous", audio: "audio/audio_ch6/ch6_n2_m23.m4a" },
            { id: 24, arabe: "الشَّجَرَةِ", trans: "l'arbre", audio: "audio/audio_ch6/ch6_n2_m24.m4a" },
            { id: 25, arabe: "يَشْرَبُ", trans: "il boit", audio: "audio/audio_ch6/ch6_n2_m25.m4a" },
            { id: 26, arabe: "الشَّايَ", trans: "le thé", audio: "audio/audio_ch6/ch6_n2_m26.m4a" },
            { id: 27, arabe: "كَانَ", trans: "c'était", audio: "audio/audio_ch6/ch6_n2_m27.m4a" },
            { id: 28, arabe: "الْيَوْمُ", trans: "le jour", audio: "audio/audio_ch6/ch6_n2_m28.m4a" },
            { id: 29, arabe: "جَمِيلاً", trans: "beau", audio: "audio/audio_ch6/ch6_n2_m29.m4a" },
            { id: 30, arabe: "جِدًّا", trans: "très", audio: "audio/audio_ch6/ch6_n2_m30.m4a" }
        ]
    },
    {
        level: 3,
        title: "🎯 3. Écoute, Observation, Reconstitution une phrase longue",
        subTitle: "Validez l'ensemble de vos acquis et obtenez votre diplôme.",
        texteComplet: "فِي الْعُطْلَةِ الصَّيْفِيَّةِ، سَافَرَتْ عَائِلَةُ يُوسُفَ إِلَى قَرْيَةٍ جَمِيلَةٍ بَعِيدَةٍ عَنِ الْمَدِينَةِ. كَانَتِ السَّمَاءُ صَافِيَةً وَالْهَوَاءُ نَقِيًّا. فِي الصَّبَاحِ الْبَاكِرِ، يَسْتَمِعُ يُوسُفُ إِلَى زَقْزَقَةِ الْعَصَافِيرِ وَيَشْرَبُ الْحَلِيبَ الطَّازَجَ. زَارَ الْمَزْرَعَةَ مَعَ جَدِّهِ وَشَاهَدَ الْحَيَوَانَاتِ الْمُخْتَلِفَةَ. عادَ فِي الْمَسَاءِ وَهُوَ يَشْعُورُ بِالسَّعَادَةِ.",
        audioComplet: "audio/audio_ch6/ch6_n3_complet.m4a",
        mots: []
    }
];

let ch6_currentLevelData = null;
let ch6_showVoyellesState = true;
let ch6_timerInterval = null;
let ch6_secondsElapsed = 0;
let ch6_userPlacedWords = [];
let ch6_voiceReadIndex = 0;
let ch6_currentAudio = null;
let ch6_isAudioPaused = false;
let ch6_highlightTimeouts = [];

function injectChapitre6() {
    const container = document.getElementById('contenu-chapitre-6');
    if (!container) return;

    container.innerHTML = '';
    const newBox = document.createElement('div');
    newBox.id = 'ch6_injected_menu';
    newBox.style.cssText = "display: flex; flex-direction: column; gap: 10px; margin: 10px 0; width: 100%;";

    chapitre6Data.forEach((item, index) => {
        const btn = document.createElement('div');
        btn.style.cssText = "background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 12px 16px; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0,0,0,0.05);";
        btn.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <strong style="color: #0f172a; font-size: 15px;">${item.title}</strong>
                <span style="font-size: 11px; padding: 2px 8px; border-radius: 10px; background: #e2e8f0; color: #475569;">À faire</span>
            </div>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">${item.subTitle}</p>
        `;
        btn.onmouseover = () => btn.style.borderColor = '#10b981';
        btn.onmouseout = () => btn.style.borderColor = '#cbd5e1';
        btn.onclick = (e) => {
            e.stopPropagation();
            ch6_startLevel(index, newBox);
        };
        newBox.appendChild(btn);
    });

    container.appendChild(newBox);
}

function ch6_startLevel(index, anchorElement) {
    ch6_currentLevelData = chapitre6Data[index];
    if (!ch6_currentLevelData.mots || ch6_currentLevelData.mots.length === 0) {
        alert("Cette partie sera disponible très prochainement !");
        return;
    }

    ch6_showVoyellesState = true;
    ch6_secondsElapsed = 0;

    const menuBox = document.getElementById('ch6_injected_menu');
    if (menuBox) menuBox.style.display = 'none';

    let workspace = document.getElementById('ch6_workspace');
    const container = document.getElementById('contenu-chapitre-6');

    if (!workspace) {
        workspace = document.createElement('div');
        workspace.id = 'ch6_workspace';
        if (container) {
            container.appendChild(workspace);
        } else {
            anchorElement.after(workspace);
        }
    }

    workspace.style.cssText = "background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px; margin-top: 12px;";
    workspace.style.display = 'block';

    workspace.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 12px;">
            <h4 id="ch6_level_title" style="margin: 0; color: #0f172a; font-size: 16px;">${ch6_currentLevelData.title}</h4>
            <div style="display: flex; align-items: center; gap: 10px;">
                <span id="ch6_timer" style="font-weight: bold; font-family: monospace; background: #e2e8f0; padding: 4px 8px; border-radius: 6px; font-size: 14px;">⏱️ 00:00</span>
                <button onclick="ch6_toggleVoyelles()" style="background: #64748b; color: white; border: none; border-radius: 6px; padding: 6px 10px; font-size: 12px; cursor: pointer;">👁️ Voyelles</button>
            </div>
        </div>

        <!-- ÉTAPE 1 : Accompagnement par mot (En premier) -->
        <div id="ch6_step1_box">
            <h5 style="margin: 0 0 10px 0; color: #334155;">Étape 1 : Découverte et Accompagnement par mot</h5>
            <div id="ch6_current_voice_word" style="font-size: 36px; font-family: 'Traditional Arabic', serif; color: #1e293b; background: white; padding: 20px; border-radius: 10px; border: 2px solid #3b82f6; margin: 15px auto; max-width: 300px; text-align: center;"></div>
            <p id="ch6_voice_word_trans" style="font-size: 14px; color: #059669; font-weight: 600; text-align: center;"></p>
            <div style="display: flex; justify-content: center; gap: 10px; margin-top: 15px;">
                <button onclick="ch6_listenCurrentWord()" style="background: #64748b; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer;">🔊 Écouter</button>
                <button onclick="ch6_nextVoiceWord()" style="background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; cursor: pointer;">Mot Suivant ➔</button>
            </div>
        </div>

        <!-- ÉTAPE 2 : Texte complet & Immersion (En second) -->
        <div id="ch6_step2_immersion_box" style="display: none;">
            <h5 style="margin: 0 0 10px 0; color: #334155;">Étape 2 : Le Grand Récit : Immersion & Lecture</h5>
            <div id="ch6_text_display" style="font-size: 24px; font-family: 'Traditional Arabic', serif; font-weight: bold; color: #065f46; background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #a7f3d0; margin-bottom: 12px; direction: rtl; text-align: right; line-height: 1.8; display: flex; flex-wrap: wrap; gap: 6px;"></div>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
                <button onclick="ch6_playFullAudio()" style="background: #10b981; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-weight: bold;">🔊 Lecture Continue & Curseur Vert</button>
            </div>
            <div id="ch6_interactive_words" style="display: flex; flex-wrap: wrap; gap: 8px; direction: rtl; margin-bottom: 15px;"></div>
            <button onclick="ch6_startStep3()" style="width: 100%; background: #2563eb; color: white; border: none; padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer;">Passer au Test de Reconstitution ➔</button>
        </div>

        <!-- ÉTAPE 3 : Reconstitution du texte (Mot à mot) -->
        <div id="ch6_step3_box" style="display: none;">
            <h5 style="margin: 0 0 10px 0; color: #334155;">Étape 3 : Reconstitution du texte</h5>
            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 10px; flex-wrap: wrap;">
                <button onclick="ch6_playFullAudio()" style="background: #10b981; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 13px;">🔊 Re-écouter (Très Lent)</button>
                <button id="ch6_pause_btn" onclick="ch6_togglePauseAudio()" style="background: #d97706; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 13px;">⏸️ Pause</button>
            </div>
            <div id="ch6_user_dropzone" style="min-height: 60px; background: #ffffff; border: 2px dashed #94a3b8; border-radius: 8px; padding: 10px; display: flex; flex-wrap: wrap; gap: 8px; direction: rtl; margin-bottom: 15px;"></div>
            <div id="ch6_shuffled_bank" style="display: flex; flex-wrap: wrap; gap: 8px; direction: rtl; margin-bottom: 15px;"></div>
        </div>

        <div id="ch6_result_box" style="display: none; text-align: center; padding: 20px;">
            <h3 style="color: #059669; margin-bottom: 10px;">🎉 Partie Terminée !</h3>
            <p id="ch6_final_appreciation" style="font-size: 16px; font-weight: bold; color: #1e293b;"></p>
            <p id="ch6_final_time" style="font-size: 14px; color: #64748b;"></p>
            <button onclick="ch6_closeWorkspace()" style="background: #0f172a; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Fermer l'exercice</button>
        </div>

        <button onclick="ch6_closeWorkspace()" style="margin-top: 15px; background: transparent; border: none; color: #ef4444; font-size: 12px; text-decoration: underline; cursor: pointer;">Fermer le module</button>
    `;

    clearInterval(ch6_timerInterval);
    ch6_timerInterval = setInterval(() => {
        ch6_secondsElapsed++;
        const mins = String(Math.floor(ch6_secondsElapsed / 60)).padStart(2, '0');
        const secs = String(ch6_secondsElapsed % 60).padStart(2, '0');
        const timerEl = document.getElementById('ch6_timer');
        if (timerEl) timerEl.innerText = `⏱️ ${mins}:${secs}`;
    }, 1000);

    ch6_startStep1();
}

function ch6_closeWorkspace() {
    clearInterval(ch6_timerInterval);
    if (ch6_currentAudio) {
        ch6_currentAudio.pause();
        ch6_currentAudio = null;
    }
    ch6_isAudioPaused = false;
    ch6_clearHighlights();
    const ws = document.getElementById('ch6_workspace');
    if (ws) ws.style.display = 'none';

    const menuBox = document.getElementById('ch6_injected_menu');
    if (menuBox) menuBox.style.display = 'flex';
}

// ÉTAPE 1 : Accompagnement par mot (Initialisation)
function ch6_startStep1() {
    ch6_voiceReadIndex = 0;
    document.getElementById('ch6_step1_box').style.display = 'block';
    document.getElementById('ch6_step2_immersion_box').style.display = 'none';
    document.getElementById('ch6_step3_box').style.display = 'none';
    ch6_renderVoiceWord();
}

function ch6_renderVoiceWord() {
    const word = ch6_currentLevelData.mots[ch6_voiceReadIndex];
    const box = document.getElementById('ch6_current_voice_word');
    const trans = document.getElementById('ch6_voice_word_trans');

    if (box) box.innerText = ch6_showVoyellesState ? word.arabe : ch6_cleanVoyelles(word.arabe);
    if (trans) trans.innerText = `« ${word.trans} » (${ch6_voiceReadIndex + 1} / ${ch6_currentLevelData.mots.length})`;
}

function ch6_listenCurrentWord() {
    const word = ch6_currentLevelData.mots[ch6_voiceReadIndex];
    if (typeof playAudio === 'function') playAudio(word.audio);
}

function ch6_nextVoiceWord() {
    ch6_voiceReadIndex++;
    if (ch6_voiceReadIndex < ch6_currentLevelData.mots.length) {
        ch6_renderVoiceWord();
    } else {
        // Fin de l'étape par mot -> Passage à l'immersion (Étape 2)
        ch6_startStep2Immersion();
    }
}

// ÉTAPE 2 : Immersion & Lecture du texte complet
function ch6_startStep2Immersion() {
    document.getElementById('ch6_step1_box').style.display = 'none';
    document.getElementById('ch6_step2_immersion_box').style.display = 'block';
    ch6_renderStep2ImmersionText();
}

function ch6_renderStep2ImmersionText() {
    const textDisplay = document.getElementById('ch6_text_display');
    if (textDisplay) {
        textDisplay.innerHTML = '';
        ch6_currentLevelData.mots.forEach(m => {
            const span = document.createElement('span');
            span.className = 'ch6_text_word';
            span.style.cssText = "padding: 2px 4px; border-radius: 4px; transition: all 0.2s;";
            span.innerText = ch6_showVoyellesState ? m.arabe : ch6_cleanVoyelles(m.arabe);
            textDisplay.appendChild(span);
        });
    }

    const wordsBox = document.getElementById('ch6_interactive_words');
    if (!wordsBox) return;
    wordsBox.innerHTML = '';

    ch6_currentLevelData.mots.forEach(m => {
        const btn = document.createElement('button');
        btn.className = 'ch6_word_btn';
        btn.style.cssText = "padding: 6px 12px; background: white; border: 1.5px solid #cbd5e1; border-radius: 6px; font-family: 'Traditional Arabic', serif; font-size: 18px; cursor: pointer; color: #0f172a; transition: all 0.2s;";
        btn.innerText = ch6_showVoyellesState ? m.arabe : ch6_cleanVoyelles(m.arabe);
        btn.onclick = () => {
            if (typeof playAudio === 'function') playAudio(m.audio);
            alert(`${m.arabe} : « ${m.trans} »`);
        };
        wordsBox.appendChild(btn);
    });
}

function ch6_playFullAudio() {
    if (ch6_currentAudio) {
        ch6_currentAudio.pause();
        ch6_currentAudio = null;
    }
    ch6_isAudioPaused = false;
    ch6_updatePauseButtonUI();
    ch6_clearHighlights();
    ch6_highlightTimeouts.forEach(t => clearTimeout(t));
    ch6_highlightTimeouts = [];

    const audioPath = ch6_currentLevelData.audioComplet;
    ch6_currentAudio = new Audio(audioPath);
    ch6_currentAudio.playbackRate = 0.75; // Très lent

    ch6_currentAudio.play().catch(err => {
        console.log("Erreur lecture audio complet :", err);
        if (typeof playAudio === 'function') playAudio(audioPath);
    });

    ch6_currentAudio.onloadedmetadata = () => {
        const words = ch6_currentLevelData.mots;
        const totalDuration = (ch6_currentAudio.duration * 1000) / 0.75; 
        const wordDuration = totalDuration / words.length;

        words.forEach((m, index) => {
            const tStart = setTimeout(() => {
                if (!ch6_isAudioPaused) {
                    ch6_highlightWord(index);
                }
            }, index * wordDuration);
            ch6_highlightTimeouts.push(tStart);
        });

        const tEnd = setTimeout(() => {
            ch6_clearHighlights();
        }, totalDuration);
        ch6_highlightTimeouts.push(tEnd);
    };
}

function ch6_togglePauseAudio() {
    if (!ch6_currentAudio) return;

    const pauseBtn = document.getElementById('ch6_pause_btn');
    if (!ch6_isAudioPaused) {
        ch6_currentAudio.pause();
        ch6_isAudioPaused = true;
        if (pauseBtn) {
            pauseBtn.innerText = "▶️ Reprendre";
            pauseBtn.style.background = "#2563eb";
        }
    } else {
        ch6_currentAudio.play();
        ch6_isAudioPaused = false;
        if (pauseBtn) {
            pauseBtn.innerText = "⏸️ Pause";
            pauseBtn.style.background = "#d97706";
        }
    }
}

function ch6_updatePauseButtonUI() {
    const pauseBtn = document.getElementById('ch6_pause_btn');
    if (pauseBtn) {
        pauseBtn.innerText = "⏸️ Pause";
        pauseBtn.style.background = "#d97706";
    }
}

function ch6_highlightWord(index) {
    ch6_clearHighlights();

    const textWords = document.querySelectorAll('.ch6_text_word');
    if (textWords[index]) {
        textWords[index].style.background = '#10b981';
        textWords[index].style.color = 'white';
    }

    const wordButtons = document.querySelectorAll('.ch6_word_btn');
    if (wordButtons[index]) {
        wordButtons[index].style.background = '#10b981';
        wordButtons[index].style.color = 'white';
        wordButtons[index].style.borderColor = '#059669';
        wordButtons[index].style.transform = 'scale(1.05)';
    }
}

function ch6_clearHighlights() {
    const textWords = document.querySelectorAll('.ch6_text_word');
    textWords.forEach(span => {
        span.style.background = 'transparent';
        span.style.color = '#065f46';
    });

    const wordButtons = document.querySelectorAll('.ch6_word_btn');
    wordButtons.forEach(btn => {
        btn.style.background = 'white';
        btn.style.color = '#0f172a';
        btn.style.borderColor = '#cbd5e1';
        btn.style.transform = 'scale(1)';
    });
}

// ÉTAPE 3 : Reconstitution du texte
function ch6_startStep3() {
    if (ch6_currentAudio) { ch6_currentAudio.pause(); ch6_currentAudio = null; }
    ch6_isAudioPaused = false;
    ch6_clearHighlights();
    document.getElementById('ch6_step2_immersion_box').style.display = 'none';
    document.getElementById('ch6_step3_box').style.display = 'block';

    ch6_userPlacedWords = [];
    ch6_currentLevelData.shuffledMots = [...ch6_currentLevelData.mots].sort(() => Math.random() - 0.5);
    ch6_renderStep3();
}

function ch6_renderStep3() {
    const dropzone = document.getElementById('ch6_user_dropzone');
    const bank = document.getElementById('ch6_shuffled_bank');

    if (!dropzone || !bank) return;
    dropzone.innerHTML = '';
    bank.innerHTML = '';

    ch6_userPlacedWords.forEach((m, idx) => {
        const tag = document.createElement('span');
        tag.style.cssText = "padding: 6px 10px; background: #3b82f6; color: white; border-radius: 6px; font-family: 'Traditional Arabic', serif; font-size: 18px; cursor: pointer;";
        tag.innerText = ch6_showVoyellesState ? m.arabe : ch6_cleanVoyelles(m.arabe);
        tag.onclick = () => {
            ch6_userPlacedWords.splice(idx, 1);
            ch6_renderStep3();
        };
        dropzone.appendChild(tag);
    });

    ch6_currentLevelData.shuffledMots.forEach(m => {
        if (!ch6_userPlacedWords.includes(m)) {
            const btn = document.createElement('button');
            btn.style.cssText = "padding: 6px 10px; background: white; border: 1px solid #94a3b8; border-radius: 6px; font-family: 'Traditional Arabic', serif; font-size: 18px; cursor: pointer;";
            btn.innerText = ch6_showVoyellesState ? m.arabe : ch6_cleanVoyelles(m.arabe);
            
            btn.onclick = () => {
                const expectedIndex = ch6_userPlacedWords.length;
                const expectedWord = ch6_currentLevelData.mots[expectedIndex];

                if (m.id === expectedWord.id) {
                    ch6_userPlacedWords.push(m);
                    ch6_renderStep3();

                    if (ch6_userPlacedWords.length === ch6_currentLevelData.mots.length) {
                        alert("🎉 Bravo ! Reconstitution parfaite.");
                        ch6_finishLevel();
                    }
                } else {
                    alert("❌ Erreur : Ce n'est pas le bon mot à cette place. Réessayez !");
                }
            };

            bank.appendChild(btn);
        }
    });
}

function ch6_finishLevel() {
    clearInterval(ch6_timerInterval);
    document.getElementById('ch6_step3_box').style.display = 'none';
    document.getElementById('ch6_result_box').style.display = 'block';

    let appreciation = "Excellent travail ! Lecture et mémorisation très fluides.";
    if (ch6_secondsElapsed > 120) appreciation = "Bien joué ! Prenez le temps de relire pour gagner en rapidité.";

    document.getElementById('ch6_final_appreciation').innerText = appreciation;
    document.getElementById('ch6_final_time').innerText = `Temps total : ${Math.floor(ch6_secondsElapsed / 60)} min ${ch6_secondsElapsed % 60} sec`;
}

function ch6_toggleVoyelles() {
    ch6_showVoyellesState = !ch6_showVoyellesState;
    const s1 = document.getElementById('ch6_step1_box');
    const s2 = document.getElementById('ch6_step2_immersion_box');
    const s3 = document.getElementById('ch6_step3_box');

    if (s1 && s1.style.display !== 'none') ch6_renderVoiceWord();
    if (s2 && s2.style.display !== 'none') ch6_renderStep2ImmersionText();
    if (s3 && s3.style.display !== 'none') ch6_renderStep3();
}

function ch6_cleanVoyelles(str) {
    return str.replace(/[\u064B-\u0652]/g, "");
}