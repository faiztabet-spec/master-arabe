// Fonction qui calcule l'appréciation selon le score et le temps
function genererAppreciation(scorePourcentage, tempsEnSecondes, tempsMoyenAttendu) {
    let titre = "";
    let message = "";
    let conseils = [];

    // CAS 1 : EXCELLENT SCORE (>= 80%)
    if (scorePourcentage >= 80) {
        if (tempsEnSecondes > tempsMoyenAttendu) {
            titre = "💡 Profil : Le Méthodique Exigeant";
            message = "Excellente maîtrise ! Vous avez pris le temps de bien analyser chaque réponse.";
            conseils = [
                "<b>Confiance :</b> Vos connaissances sont solides, vous pouvez vous faire davantage confiance.",
                "<b>Fluidité :</b> Refaites le test en essayant d'être plus spontané pour automatiser vos réflexes."
            ];
        } else {
            titre = "🔥 Profil : L'Expert Réactif";
            message = "Bravo ! Ancrage mémoriel parfait, haute concentration et gestion du temps maîtrisée.";
            conseils = [
                "<b>Rétention long terme :</b> Vos réflexes sont excellents.",
                "<b>Étape suivante :</b> Vous pouvez passer directement au chapitre suivant !"
            ];
        }
    } 
    // CAS 2 : SCORE À AMÉLIORER (< 80%)
    else {
        if (tempsEnSecondes < tempsMoyenAttendu * 0.6) {
            titre = "⚡ Profil : Le Précipité";
            message = "Vous avez répondu très vite ! L'impulsivité ou le stress du temps a pu jouer sur votre précision.";
            conseils = [
                "<b>Gestion du stress :</b> Prenez 3 secondes de pause avant de valider chaque réponse.",
                "<b>Relecture :</b> Lisez bien l'ensemble des choix avant d'appuyer."
            ];
        } else {
            titre = "🧠 Profil : Surcharge Cognitive / Fatigue";
            message = "Ce chapitre demande encore un peu de pratique. Prenez soin de votre mémorisation.";
            conseils = [
                "<b>Pause stratégique :</b> Accordez-vous 10 à 15 minutes de pause (méthode Pomodoro).",
                "<b>Ancrage visuel :</b> Relisez la fiche de vocabulaire avant de retenter la session."
            ];
        }
    }

    return { titre, message, conseils };
}

// Fonction pour afficher automatiquement l'appréciation dans le HTML
function afficherAppreciationDansHTML(idConteneur, score, tempsSec, tempsAttenduSec) {
    const bilan = genererAppreciation(score, tempsSec, tempsAttenduSec);
    const conteneur = document.getElementById(idConteneur);
    
    if (!conteneur) return;

    let listeConseils = bilan.conseils.map(c => `<li>${c}</li>`).join('');

    conteneur.innerHTML = `
        <div style="background: #f8f9fa; border-left: 4px solid #10b981; padding: 15px; margin-top: 15px; border-radius: 6px; text-align: left;">
            <h4 style="margin-top:0; color: #1e293b;">${bilan.titre}</h4>
            <p style="margin-bottom: 8px;">${bilan.message}</p>
            <ul style="margin: 0; padding-left: 20px;">
                ${listeConseils}
            </ul>
        </div>
    `;
}