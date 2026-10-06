// ==========================================
// CHAPITRE 3 : LECTURE & COMPOSITION DE MOTS
// ==========================================

const ch3_wordsList = [
    {
        word: "كَتَبَ",
        translation: "Il a écrit",
        audio: "audio/kataba.m4a",
        letters: ["كَ", "تَ", "بَ"],
        options: ["كَ", "تَ", "بَ", "كِ", "تِ", "بِ"]
    },
    {
        word: "دَخَلَ",
        translation: "Il est entré",
        audio: "audio/dakhala.m4a",
        letters: ["دَ", "خَ", "لَ"],
        options: ["دَ", "خَ", "لَ", "دِ", "خِ", "لِ"]
    },
    {
        word: "خَرَجَ",
        translation: "Il est sorti",
        audio: "audio/kharaja.m4a",
        letters: ["خَ", "رَ", "جَ"],
        options: ["خَ", "رَ", "جَ", "خِ", "رِ", "جِ"]
    },
    {
        word: "ذَهَبَ",
        translation: "Il est allé",
        audio: "audio/dhahaba.m4a",
        letters: ["ذَ", "هَ", "بَ"],
        options: ["ذَ", "هَ", "بَ", "ذِ", "هِ", "بِ"]
    },
    {
        word: "قَرَأَ",
        translation: "Il a lu",
        audio: "audio/Kara_a.m4a",
        letters: ["قَ", "رَ", "أَ"],
        options: ["قَ", "رَ", "أَ", "قِ", "رِ", "إِ"]
    },
    {
        word: "أَكَلَ",
        translation: "Il a mangé",
        audio: "audio/Akala.m4a",
        letters: ["أَ", "كَ", "لَ"],
        options: ["أَ", "كَ", "لَ", "إِ", "كِ", "لِ"]
    },
    {
        word: "شَرِبَ",
        translation: "Il a bu",
        audio: "audio/Chariba.m4a",
        letters: ["شَ", "رِ", "بَ"],
        options: ["شَ", "رِ", "بَ", "شِ", "رَ", "بِ"]
    },
    {
        word: "جَلَسَ",
        translation: "Il s'est assis",
        audio: "audio/Jalassa.m4a",
        letters: ["جَ", "لَ", "سَ"],
        options: ["جَ", "لَ", "سَ", "جِ", "لِ", "سِ"]
    },
    {
        word: "فَتَحَ",
        translation: "Il a ouvert",
        audio: "audio/Fataha.m4a",
        letters: ["فَ", "تَ", "حَ"],
        options: ["فَ", "تَ", "حَ", "فِ", "تِ", "حِ"]
    },
    {
        word: "سَمِعَ",
        translation: "Il a entendu",
        audio: "audio/Sami_aa.m4a",
        letters: ["سَ", "مِ", "عَ"],
        options: ["سَ", "مِ", "عَ", "سِ", "مَ", "عِ"]
    }
];

let ch3_currentIndex = 0;
let ch3_score = 0;
let ch3_userSelection = [];
let ch3_currentAudio = null;

function ch3_startQuiz() {
    if (typeof unlockAudio === "function") unlockAudio();
    
    ch3_currentIndex = 0;
    ch3_score = 0;
    
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    document.getElementById('summarySection').style.display = 'none';

    document.getElementById('totalMax').innerText = ch3_wordsList.length;
    document.getElementById('score').innerText = ch3_score;

    if (typeof startTimer === "function") startTimer();
    ch3_loadQuestion();
}

function ch3_loadQuestion() {
    if (ch3_currentIndex >= ch3_wordsList.length) {
        ch3_finishQuiz();
        return;
    }

    ch3_userSelection = [];
    const currentWord = ch3_wordsList[ch3_currentIndex];

    document.getElementById('total').innerText = ch3_currentIndex + 1;
    document.getElementById('progressBar').style.width = `${((ch3_currentIndex) / ch3_wordsList.length) * 100}%`;
    document.getElementById('feedback').innerText = '';
    document.getElementById('nextBtn').style.display = 'none';

    document.getElementById('questionInstruction').innerText = "Écoute l'audio et compose le mot lettre par lettre :";
    document.getElementById('phoneticName').style.display = 'block';
    document.getElementById('phoneticName').innerText = "Mot : _ _ _";

    ch3_currentAudio = new Audio(currentWord.audio);
    ch3_playAudio();

    const grid = document.getElementById('options');
    grid.innerHTML = '';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    grid.style.gap = '8px';
    grid.style.direction = 'rtl';
    
    const shuffledOptions = [...currentWord.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.style.fontSize = '22px';
        btn.style.fontWeight = 'bold';
        btn.style.fontFamily = "'Traditional Arabic', sans-serif";
        btn.innerText = letter;
        btn.onclick = () => ch3_selectLetter(letter, btn);
        grid.appendChild(btn);
    });
}

function ch3_playAudio() {
    if (ch3_currentAudio) {
        ch3_currentAudio.currentTime = 0;
        ch3_currentAudio.play().catch(e => console.log("Clic requis"));
    } else {
        let currentWord = ch3_wordsList[ch3_currentIndex];
        ch3_currentAudio = new Audio(currentWord.audio);
        ch3_currentAudio.play().catch(e => console.log("Clic requis"));
    }
}

const origPlayQuizAudio = window.playQuizAudio;
window.playQuizAudio = function() {
    if (document.getElementById('startSection').style.display === 'none' && 
        ch3_currentIndex < ch3_wordsList.length && 
        document.getElementById('phoneticName').innerText.includes("Mot :")) {
        ch3_playAudio();
    } else if (typeof origPlayQuizAudio === "function") {
        origPlayQuizAudio();
    }
};

function ch3_selectLetter(letter, btn) {
    const currentWord = ch3_wordsList[ch3_currentIndex];
    const targetIndex = ch3_userSelection.length;

    if (letter === currentWord.letters[targetIndex]) {
        ch3_userSelection.push(letter);
        btn.classList.add('correct');
        btn.disabled = true;

        let displayWord = ch3_userSelection.join(' ');
        document.getElementById('phoneticName').innerText = "Mot : " + displayWord;

        if (typeof playFeedbackSound === "function") playFeedbackSound('juste');

        if (ch3_userSelection.length === currentWord.letters.length) {
            ch3_score++;
            document.getElementById('score').innerText = ch3_score;
            document.getElementById('feedback').innerHTML = `<span class="feedback-correct">👏 Bravo ! ${currentWord.word} (${currentWord.translation})</span>`;
            
            document.querySelectorAll('#options .option-btn').forEach(b => b.disabled = true);
            
            const nextBtn = document.getElementById('nextBtn');
            nextBtn.style.display = 'block';
            nextBtn.onclick = function() {
                ch3_currentIndex++;
                ch3_loadQuestion();
            };
        }
    } else {
        btn.classList.add('wrong');
        if (typeof playFeedbackSound === "function") playFeedbackSound('fausse');
        
        setTimeout(() => {
            btn.classList.remove('wrong');
        }, 500);
    }
}

function ch3_finishQuiz() {
    if (typeof stopTimer === "function") stopTimer();
    
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('summarySection').style.display = 'block';

    const maxScore = ch3_wordsList.length;
    document.getElementById('finalScore').innerText = ch3_score;
    document.getElementById('finalMaxScore').innerText = maxScore;
    document.getElementById('finalTime').innerText = document.getElementById('timer').innerText;

    const summaryStatus = document.getElementById('summaryStatus');
    if (ch3_score === maxScore) {
        summaryStatus.className = "summary-status status-success";
        summaryStatus.innerText = "🎉 Félicitations ! Vous maîtrisez la lecture de vos premiers mots !";
    } else {
        summaryStatus.className = "summary-status status-fail";
        summaryStatus.innerText = "💪 Pas de panique ! Continuez à vous entraîner sur la lecture.";
    }

    document.getElementById('mistakesBox').style.display = 'none';
}