// chapitre4.js - Reconnaissance Vocale + Lecture Audio (.m4a) + Bilan & Analyse Finale

const ch4_exercises = [
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "دَخَلَ",
        targetTrans: "Dakhala",
        translation: "Entrer",
        audio: "audio/dakhala.m4a",
        matches: ["دخل", "dakhala", "dachala"],
        tip: "Dites 'Dakhala' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "كَتَبَ",
        targetTrans: "Kataba",
        translation: "Écrire",
        audio: "audio/kataba.m4a",
        matches: ["كتب", "kataba"],
        tip: "Dites 'Kataba' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "خَرَجَ",
        targetTrans: "Kharaja",
        translation: "Sortir",
        audio: "audio/kharaja.m4a",
        matches: ["خرج", "kharaja", "charaja"],
        tip: "Dites 'Kharaja' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "ذَهَبَ",
        targetTrans: "Dhahaba",
        translation: "Aller",
        audio: "audio/dhahaba.m4a",
        matches: ["ذهب", "dhahaba", "dahaba"],
        tip: "Dites 'Dhahaba' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "قَرَأَ",
        targetTrans: "Qara'a",
        translation: "Lire",
        audio: "audio/Kara_a.m4a",
        matches: ["قرأ", "قرا", "qara", "qaraa", "kara"],
        tip: "Dites 'Qara'a' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "أَكَلَ",
        targetTrans: "Akala",
        translation: "Manger",
        audio: "audio/Akala.m4a",
        matches: ["أكل", "اكل", "akala"],
        tip: "Dites 'Akala' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "شَرِبَ",
        targetTrans: "Shariba",
        translation: "Boire",
        audio: "audio/Chariba.m4a",
        matches: ["شرب", "shariba", "chariba"],
        tip: "Dites 'Shariba' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "فَتَحَ",
        targetTrans: "Fataha",
        translation: "Ouvrir",
        audio: "audio/Fataha.m4a",
        matches: ["فتح", "fataha"],
        tip: "Dites 'Fataha' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "جَلَسَ",
        targetTrans: "Jalasa",
        translation: "S'asseoir",
        audio: "audio/Jalassa.m4a",
        matches: ["جلس", "jalasa", "jalassa"],
        tip: "Dites 'Jalasa' à voix haute."
    },
    {
        level: "Niveau 1 : Verbes d'action",
        badgeColor: "#e0f2fe",
        badgeTextColor: "#0369a1",
        targetAr: "سَمِعَ",
        targetTrans: "Sami'a",
        translation: "Entendre / Écouter",
        audio: "audio/Sami_aa.m4a",
        matches: ["سمع", "samia", "samiaa", "sami_aa"],
        tip: "Dites 'Sami'a' à voix haute."
    }
];

let ch4_currentIndex = 0;
let ch4_score = 0;
let ch4_recognition = null;
let ch4_autoNextTimer = null;
let ch4_startTime = null;
let ch4_wrongAnswers = [];

function ch4_initUI() {
    if (document.getElementById('ch4Section')) return;

    const container = document.querySelector('.container');
    const ch4Div = document.createElement('div');
    ch4Div.id = 'ch4Section';
    ch4Div.style.display = 'none';

    ch4Div.innerHTML = `
        <h3 style="color: #0f172a; margin-bottom: 6px; font-size: 15px;">🎙️ Chapitre 4 : Reconnaissance Vocale</h3>
        <p style="font-size: 11px; color: #64748b; margin-top: 0;">Exercices de prononciation avec vos enregistrements audio</p>
        
        <div id="ch4ExerciseContainer">
            <div class="player-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span id="ch4LevelBadge" style="font-size: 11px; font-weight: bold; padding: 3px 10px; border-radius: 12px;">Niveau 1 : Verbes</span>
                    <div class="player-counter">Exercice <span id="ch4Index">1</span> / ${ch4_exercises.length}</div>
                </div>

                <div id="ch4TargetAr" style="font-size: 38px; font-weight: bold; color: #0f172a; margin: 5px 0; direction: rtl;">دَخَلَ</div>
                <div id="ch4TargetTrans" style="font-size: 15px; font-weight: bold; color: #047857;">Dakhala</div>
                <div id="ch4Translation" style="font-size: 12px; color: #64748b; margin-bottom: 8px;">(Entrer)</div>

                <p id="ch4Tip" style="font-size: 11px; color: #059669; margin: 6px 0 10px 0; font-style: italic;"></p>
                
                <div style="margin-top: 10px;">
                    <button id="ch4MicBtn" class="audio-btn" style="width: 60px; height: 60px; font-size: 26px; margin: 0 auto; transition: all 0.2s;" onclick="ch4_toggleListening()">🎙️</button>
                    <p id="ch4Status" style="font-size: 12px; color: #64748b; margin-top: 8px; font-weight: 600;">Appuyez sur le micro pour parler</p>
                </div>
            </div>

            <div id="ch4Result" style="font-size: 13px; font-weight: bold; min-height: 36px; margin: 10px 0; display: flex; align-items: center; justify-content: center; gap: 10px; flex-wrap: wrap;"></div>

            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button id="ch4NextBtn" class="action-btn next-btn-style" style="flex: 1;" onclick="ch4_nextExercise()">Suivant ➔</button>
                <button class="action-btn quit-btn-style" style="flex: 1;" onclick="ch4_exitChapter()">↩ Retour au Menu</button>
            </div>
        </div>

        <div id="ch4SummaryContainer" style="display: none;"></div>
    `;

    container.appendChild(ch4Div);
}

function ch4_startChapter() {
    ch4_initUI();
    ch4_currentIndex = 0;
    ch4_score = 0;
    ch4_wrongAnswers = [];
    ch4_startTime = new Date();

    if (document.getElementById('startSection')) document.getElementById('startSection').style.display = 'none';
    document.getElementById('ch4Section').style.display = 'block';
    document.getElementById('ch4ExerciseContainer').style.display = 'block';
    document.getElementById('ch4SummaryContainer').style.display = 'none';

    ch4_loadExercise();
}

function ch4_loadExercise() {
    if (ch4_autoNextTimer) clearTimeout(ch4_autoNextTimer);

    const ex = ch4_exercises[ch4_currentIndex];

    document.getElementById('ch4Index').innerText = ch4_currentIndex + 1;
    
    const badge = document.getElementById('ch4LevelBadge');
    badge.innerText = ex.level;
    badge.style.background = ex.badgeColor;
    badge.style.color = ex.badgeTextColor;

    document.getElementById('ch4TargetAr').innerText = ex.targetAr;
    document.getElementById('ch4TargetTrans').innerText = ex.targetTrans;
    document.getElementById('ch4Translation').innerText = `(${ex.translation})`;
    document.getElementById('ch4Tip').innerText = ex.tip;

    document.getElementById('ch4Status').innerText = "Appuyez sur le micro pour parler";
    document.getElementById('ch4Status').style.color = "#64748b";
    document.getElementById('ch4Result').innerHTML = "";
}

// Joue un fichier audio de correction
function ch4_playAudio(audioPath) {
    if (audioPath) {
        const audio = new Audio(audioPath);
        audio.play().catch(err => {
            console.error("Erreur de lecture audio :", err);
        });
    }
}

function ch4_playAudioCorrection() {
    const ex = ch4_exercises[ch4_currentIndex];
    ch4_playAudio(ex.audio);
}

function ch4_toggleListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("La reconnaissance vocale n'est pas supportée par votre navigateur.");
        return;
    }

    if (ch4_recognition) {
        ch4_recognition.stop();
        ch4_recognition = null;
        document.getElementById('ch4Status').innerText = "Écoute arrêtée.";
        return;
    }

    ch4_recognition = new SpeechRecognition();
    ch4_recognition.lang = 'ar-SA';
    ch4_recognition.interimResults = false;

    const micBtn = document.getElementById('ch4MicBtn');
    const statusText = document.getElementById('ch4Status');

    ch4_recognition.onstart = () => {
        statusText.innerText = "🎙️ Écoute en cours... Parlez maintenant !";
        statusText.style.color = "#d97706";
        micBtn.style.transform = "scale(1.1)";
    };

    ch4_recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript.trim().toLowerCase();
        const ex = ch4_exercises[ch4_currentIndex];

        micBtn.style.transform = "scale(1)";

        const cleanedSpoken = spokenText.replace(/[?.,!؟]/g, "").trim();
        const isMatch = ex.matches.some(m => cleanedSpoken.includes(m.toLowerCase()) || m.toLowerCase().includes(cleanedSpoken));

        if (isMatch) {
            document.getElementById('ch4Result').innerHTML = `<span style="color: #10b981;">✅ Excellent ! Détecté : "${spokenText}"</span>`;
            ch4_score++;
            if (typeof playBeep === 'function') playBeep('juste');

            ch4_autoNextTimer = setTimeout(() => {
                ch4_nextExercise();
            }, 1500);

        } else {
            // Enregistre l'erreur si elle n'est pas déjà présente
            if (!ch4_wrongAnswers.some(w => w.targetAr === ex.targetAr)) {
                ch4_wrongAnswers.push(ex);
            }

            document.getElementById('ch4Result').innerHTML = `
                <span style="color: #ef4444; width: 100%; display: block; margin-bottom: 4px;">❌ Reçu : "${spokenText}"</span>
                <button type="button" id="ch4CorrBtn" style="background-color: #0d9488; color: #ffffff; border: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; cursor: pointer; font-weight: bold; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    🔊 Écouter la correction
                </button>
            `;

            document.getElementById('ch4CorrBtn').addEventListener('click', function() {
                ch4_playAudioCorrection();
            });

            if (typeof playBeep === 'function') playBeep('fausse');
        }
    };

    ch4_recognition.onerror = (event) => {
        statusText.innerText = "Erreur de détection : " + event.error;
        statusText.style.color = "#dc2626";
        micBtn.style.transform = "scale(1)";
    };

    ch4_recognition.onend = () => {
        ch4_recognition = null;
    };

    ch4_recognition.start();
}

function ch4_nextExercise() {
    if (ch4_autoNextTimer) clearTimeout(ch4_autoNextTimer);

    if (ch4_recognition) {
        ch4_recognition.stop();
        ch4_recognition = null;
    }

    ch4_currentIndex++;
    if (ch4_currentIndex < ch4_exercises.length) {
        ch4_loadExercise();
    } else {
        ch4_showSummary();
    }
}

// Affichage du Bilan Complet à la fin des 10 exercices
function ch4_showSummary() {
    const endTime = new Date();
    const totalSeconds = Math.max(1, Math.round((endTime - ch4_startTime) / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const durationStr = minutes > 0 ? `${minutes} min ${seconds} sec` : `${seconds} sec`;

    if (typeof userProgress !== 'undefined') {
        userProgress.ch4 = true;
        localStorage.setItem('alif_user_progress', JSON.stringify(userProgress));
    }

    document.getElementById('ch4ExerciseContainer').style.display = 'none';

    const summaryDiv = document.getElementById('ch4SummaryContainer');
    summaryDiv.style.display = 'block';

    let appreciationText = "";
    let appreciationColor = "#047857";

    if (ch4_score === ch4_exercises.length) {
        appreciationText = "Très bien, l'exercice est parfaitement maîtrisé ! 👏";
    } else if (ch4_score >= 7) {
        appreciationText = "Très bien, l'exercice est assimilé ! 👍";
    } else {
        appreciationText = "Exercice terminé, continuez à vous entraîner pour consolider vos acquis. 💪";
        appreciationColor = "#b45309";
    }

    let wrongListHtml = "";
    if (ch4_wrongAnswers.length > 0) {
        wrongListHtml = `
            <div style="background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 12px 16px; margin: 15px 0; text-align: left;">
                <h4 style="color: #dc2626; margin: 0 0 8px 0; font-size: 13px;">⚠️ Attention aux mots suivants :</h4>
                <ul style="margin: 0; padding-left: 20px; color: #991b1b; font-size: 13px; line-height: 1.6;">
                    ${ch4_wrongAnswers.map(item => `
                        <li style="margin-bottom: 6px;">
                            <strong>${item.targetAr}</strong> (${item.targetTrans} - <em>${item.translation}</em>)
                            <button onclick="ch4_playAudio('${item.audio}')" style="background: #0d9488; color: white; border: none; border-radius: 4px; padding: 2px 6px; font-size: 11px; cursor: pointer; margin-left: 6px;">🔊 Écouter</button>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    summaryDiv.innerHTML = `
        <div class="player-card" style="text-align: center; padding: 20px;">
            <h3 style="color: #0f172a; margin-top: 0; font-size: 18px;">📊 Bilan de l'exercice</h3>
            
            <p style="font-size: 15px; font-weight: bold; color: ${appreciationColor}; margin: 10px 0;">
                ${appreciationText}
            </p>

            <div style="display: flex; justify-content: space-around; background: #f8fafc; padding: 12px; border-radius: 10px; margin: 15px 0;">
                <div>
                    <div style="font-size: 11px; color: #64748b;">Note</div>
                    <div style="font-size: 20px; font-weight: bold; color: #0284c7;">${ch4_score} / ${ch4_exercises.length}</div>
                </div>
                <div>
                    <div style="font-size: 11px; color: #64748b;">Durée passée</div>
                    <div style="font-size: 20px; font-weight: bold; color: #0284c7;">${durationStr}</div>
                </div>
            </div>

            ${wrongListHtml}

            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button class="action-btn next-btn-style" style="flex: 1;" onclick="ch4_startChapter()">🔄 Refaire l'exercice</button>
                <button class="action-btn quit-btn-style" style="flex: 1;" onclick="ch4_exitChapter()">↩ Retour au Menu</button>
            </div>
        </div>
    `;
}

function ch4_exitChapter() {
    if (ch4_autoNextTimer) clearTimeout(ch4_autoNextTimer);

    if (ch4_recognition) {
        ch4_recognition.stop();
        ch4_recognition = null;
    }
    document.getElementById('ch4Section').style.display = 'none';
    if (typeof showMenu === 'function') {
        showMenu();
    } else if (document.getElementById('startSection')) {
        document.getElementById('startSection').style.display = 'block';
    }
}