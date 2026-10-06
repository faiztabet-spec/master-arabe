function openModeOperatoire() {
    const existingModal = document.getElementById('modal-mode-op');
    if (existingModal) {
        existingModal.remove();
    }

    const htmlContent = `
        <div id="modal-mode-op" style="
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.7);
            backdrop-filter: blur(6px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 15px;
        ">
            <div style="
                background: #ffffff;
                border-radius: 16px;
                max-width: 620px;
                width: 100%;
                max-height: 85vh;
                overflow-y: auto;
                padding: 24px;
                box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);
                font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
                text-align: left;
                position: relative;
            ">
                <!-- Bouton fermeture -->
                <button onclick="closeModeOperatoire()" style="
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    border: none;
                    background: #f1f5f9;
                    color: #64748b;
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">✕</button>

                <!-- Entête -->
                <div style="margin-bottom: 20px;">
                    <span style="background: #ecfdf5; color: #059669; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 20px; text-transform: uppercase;">Mode d'emploi & Pédagogie</span>
                    <h3 style="margin: 8px 0 4px 0; color: #0f172a; font-size: 20px; font-weight: 800;">
                        Présentation & Parcours Alif-Express
                    </h3>
                    <p style="margin: 0; font-size: 13px; color: #64748b;">
                        Maîtrise et Lecture Accélérée : découvrez la méthode pas à pas.
                    </p>
                </div>

                <!-- Vision Pédagogique -->
                <div style="margin-bottom: 16px;">
                    <h4 style="color: #0f172a; font-size: 14px; font-weight: 700; margin: 0 0 6px 0;">🎯 Vision Pédagogique</h4>
                    <p style="margin: 0; font-size: 12px; color: #475569; line-height: 1.5;">
                        L'application repose sur une pédagogie active et progressive, conçue pour amener l'apprenant de la découverte visuelle et auditive à la fluidité totale de lecture. Chaque notion est découpée en étapes logiques, combinant l'apprentissage intuitif et des tests de validation rigoureux pour ancrer durablement les réflexes de lecture.
                    </p>
                </div>

                <!-- Fonctionnalités Clés & Options de Lecture -->
                <div style="background: #f8fafc; padding: 12px; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
                    <h4 style="color: #0f172a; font-size: 14px; font-weight: 700; margin: 0 0 6px 0;">🎧 Fonctionnalités Clés & Options de Lecture</h4>
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #475569;">Pour offrir un confort d'apprentissage optimal, l'application intègre des outils interactifs puissants :</p>
                    <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: #475569; line-height: 1.5;">
                        <li><strong>Lecture instantanée :</strong> Écoutez la prononciation exacte d'une lettre ou d'un mot en un clic.</li>
                        <li><strong>Retour en arrière avancé :</strong> Permet de réécouter précisément un segment ou une lettre pour analyser les nuances de prononciation.</li>
                        <li><strong>Option de répétition :</strong> Idéal pour ancrer la mémorisation auditive par la récurrence.</li>
                        <li><strong>Affichage phonétique et Traduction :</strong> Un accompagnement visuel en français et en phonétique pour rassurer l'apprenant et faire le pont avec sa langue maternelle.</li>
                    </ul>
                </div>

                <!-- Système de Notation -->
                <div style="margin-bottom: 16px;">
                    <h4 style="color: #0f172a; font-size: 14px; font-weight: 700; margin: 0 0 6px 0;">⏱️ Système de Notation : Qualité et Rapidité</h4>
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: #475569;">L'application ne se contente pas de valider une réponse juste ; elle mesure aussi l'agilité mentale de l'apprenant :</p>
                    <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: #475569; line-height: 1.5;">
                        <li><strong>Précision maximale :</strong> Obtenir un score parfait (ex: 14/14) pour valider sa maîtrise.</li>
                        <li><strong>Défi temporel :</strong> Réussir l'exercice dans un laps de temps imparti (ex: moins de 60 secondes) pour prouver le réflexe et la fluidité.</li>
                        <li><strong>Validation visuelle :</strong> Dès que les critères de qualité et de rapidité sont atteints, le bouton de la partie se pare d'un signe validé, offrant un sentiment gratifiant de progression.</li>
                    </ul>
                </div>

                <!-- Le Parcours d'Apprentissage -->
                <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; margin-bottom: 16px;">
                    <h4 style="color: #0f172a; font-size: 14px; font-weight: 700; margin: 0 0 12px 0;">📚 Le Parcours d'Apprentissage</h4>

                    <div style="display: flex; flex-direction: column; gap: 14px; font-size: 12px; color: #475569;">
                        
                        <!-- Chapitre 1 -->
                        <div>
                            <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 4px;">Chapitre 1 : Les 28 alphabets et leurs positions</strong>
                            <p style="margin: 0 0 4px 0; line-height: 1.4;">L'objectif de ce chapitre est d'apprendre à identifier et lire les 28 lettres de l'alphabet, qu'elles soient isolées ou qu'elles se trouvent au début, au milieu ou à la fin d'un mot.</p>
                            <ul style="margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li><strong>Partie 1 (Immersion et Observation) :</strong> L'apprenant écoute la prononciation et observe attentivement l'écriture de la lettre sous toutes ses formes (isolée, initiale, médiale, finale), se préparant ainsi aux tests à venir.</li>
                                <li><strong>Partie 2 (Test des 14 premières lettres) :</strong> Un premier test chronométré. Pour valider et débloquer la suite, l'apprenant doit obtenir un score parfait de 14/14 en moins de 60 secondes. Un badge validé s'affiche en cas de succès.</li>
                                <li><strong>Partie 3 (Test des 14 lettres suivantes) :</strong> Un format identique (14 lettres, même notation et même timing), mais appliqué aux 14 lettres restantes, légèrement plus complexes. Une fois validée, l'apprenant maîtrise l'ensemble des 28 alphabets dans toutes leurs positions au sein des mots.</li>
                            </ul>
                        </div>

                        <!-- Chapitre 2 -->
                        <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                            <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 4px;">Chapitre 2 : Le second pilier — Les voyelles</strong>
                            <p style="margin: 0 0 4px 0; line-height: 1.4;">Une fois l'alphabet maîtrisé dans toutes ses positions, l'apprenant passe aux voyelles pour apprendre à lire un mot, une phrase ou un texte entier de manière fluide.</p>
                            <p style="margin: 0 0 4px 0; line-height: 1.4;">Ce chapitre est structuré en deux grandes étapes :</p>
                            <ul style="margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li><strong>La partie Apprentissage (divisée en 3 catégories) :</strong> Voyelles courtes, voyelles longues et voyelles doublées.</li>
                                <li><strong>La partie Validation des connaissances :</strong> Un quiz interactif reprenant les mêmes exigences de qualité et de rapidité pour valider définitivement ce second pilier.</li>
                            </ul>
                        </div>

                        <!-- Chapitre 3 -->
                        <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                            <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 4px;">Chapitre 3 : De la Lettre au Mot Rattaché</strong>
                            <p style="margin: 0 0 4px 0; line-height: 1.4;">Ce chapitre enseigne à l'apprenant comment les lettres s'attachent entre elles pour former de véritables mots écrits de manière fluide, en surmontant les subtilités graphiques de liaison.</p>
                            <ul style="margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li><strong>Apprentissage visuel et audio :</strong> Observation des règles de liaison et écoute des enchaînements.</li>
                                <li><strong>Validation par quiz :</strong> Exercices chronométrés pour s'assurer que l'apprenant sait déchiffrer instantanément un mot rattaché.</li>
                            </ul>
                        </div>

                        <!-- Chapitre 4 -->
                        <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                            <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 4px;">Chapitre 4 : Libérez votre Voix & Parlez Arabe</strong>
                            <p style="margin: 0 0 4px 0; line-height: 1.4;">Axé sur l'expression orale et l'aisance phonétique, ce chapitre permet à l'apprenant de s'entraîner à prononcer des structures plus complexes grâce à l'audio instantané et aux options de répétition.</p>
                            <ul style="margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li><strong>Immersion phonétique :</strong> Répétition guidée et analyse des nuances vocales.</li>
                                <li><strong>Validation pratique :</strong> Test d'expression orale validé selon les critères de fluidité et de rapidité de l'application.</li>
                            </ul>
                        </div>

                        <!-- Chapitre 5 -->
                        <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                            <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 4px;">Chapitre 5 : Du Mot à la Phrase : Lire & Construire</strong>
                            <p style="margin: 0 0 4px 0; line-height: 1.4;">L'étape de transition vers la lecture contextuelle. L'apprenant passe de la lecture de mots isolés à la compréhension et à la lecture de phrases entières.</p>
                            <ul style="margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li><strong>Lecture contextuelle :</strong> Apprentissage de l'accord et de la liaison entre les mots d'une phrase.</li>
                                <li><strong>Quiz de validation :</strong> Vérification de la compréhension globale et de la rapidité de lecture contextuelle.</li>
                            </ul>
                        </div>

                        <!-- Chapitre 6 -->
                        <div style="border-top: 1px dashed #e2e8f0; padding-top: 10px;">
                            <strong style="color: #0f172a; font-size: 13px; display: block; margin-bottom: 4px;">Chapitre 6 : Maîtrise & Autonomie : Lire & Écrire un Texte</strong>
                            <p style="margin: 0 0 4px 0; line-height: 1.4;">Le chapitre final qui couronne le parcours. L'apprenant acquiert une autonomie complète pour lire et écrire un texte en arabe de manière fluide et naturelle.</p>
                            <ul style="margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li><strong>Grand final :</strong> Immersion dans des textes complets avec assistance audio et phonétique modulable.</li>
                                <li><strong>Validation finale :</strong> Le test ultime garantissant la maîtrise totale de la lecture et de l'écriture.</li>
                            </ul>
                        </div>

                        <!-- Attestation de Réussite -->
                        <div style="background: #f0fdf4; padding: 10px; border-radius: 8px; border: 1px solid #bbf7d0; margin-top: 4px;">
                            <strong style="color: #166534; font-size: 13px; display: block; margin-bottom: 2px;">🎓 Attestation de Réussite</strong>
                            <p style="margin: 0; color: #166534; line-height: 1.4;">Pour valoriser les efforts de l'apprenant, l'application propose une Attestation de Réussite accessible dès l'obtention d'au moins 80 % de réussite sur l'ensemble des évaluations. Il suffit de renseigner son prénom et son nom pour télécharger son diplôme officiel en PDF !</p>
                        </div>

                    </div>
                </div>

                <!-- Bouton d'action -->
                <button onclick="closeModeOperatoire()" style="
                    margin-top: 10px;
                    width: 100%;
                    padding: 12px;
                    background: #10b981;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 14px;
                    cursor: pointer;
                    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3);
                    transition: background 0.2s;
                ">
                    C'est parti, je commence !
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', htmlContent);
}

function closeModeOperatoire() {
    const modal = document.getElementById('modal-mode-op');
    if (modal) {
        modal.remove();
    }
}

window.openModeOperatoire = openModeOperatoire;
window.closeModeOperatoire = closeModeOperatoire;