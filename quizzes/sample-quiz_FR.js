quiz = {
    "info": {
        "name":    "", // doit être vide avec with emacs-reveal
        "main":    "Que savez-vous de l'apprentissage interactif collaboratif et social?  Voyons voir...",
        "level1":  "Excellent !", // 80-100%
        "level2":  "Bravo !", // 60-79%
        "level3":  "Vous auriez besoin de relire un peu.", // 40-59%
        "level4":  "Avez-vous sauté des passages pour arrivé ici ?",             // 20-39%
        "level5":  "Recommencez au début s'il vous plaît."   // 0-19%, pas de virgule séparatrice ici
    },
    "questions": [
        { // Question 1 - Plusieurs choix, une seule bonne réponse
            "q": "Quelle proposition à propos de l'apprentissage est-elle correcte ?",
            "a": [
                {"option": "L'apprentissage doit être ennuyeux", "correct": false},
                {"option": "L'apprentissage doit être cher", "correct": false},
                {"option": "L'apprentissage doit être solitaire", "correct": false},
                {"option": "L'apprentissage peut être interactif, collaboratif et social", "correct": true} // pas de virgule de séparation ici
            ],
            "correct": "<p><span>Correct!</span> Oui, l'apprentissage peut être interactif collaboratif et social. Grâce aux logiciels libres et avec de l'hébergement en ligne gratuit, il n'y a pas de coûts à répercuter sur les apprenants !</p>",
            "incorrect": "<p><span>No.</span> Vous devriez recommencer.</p>" // pas de virgule de séparation ici
        },
        { // Question 2 - Plusieurs choix, plusieurs bonnes réponses, les sélectionner toutes
            "q": "Quelle est la situation actuelle pour l'apprentissage interactif collaboratif et social ?",
            "a": [
                {"option": "Les outils commencent à être prêts", "correct": true},
                {"option": "Cela utilise des données sous forme de texte simple", "correct": true},
                {"option": "Cela réduit la difficulté de participation grâce à l'intégration continue et au déploiement continu", "correct": true},
                {"option": "Cela génère des supports au format HTML standard", "correct": true} 
            ],
            "correct": "<p><span>Correct!</span> You got it all.</p>",
            "incorrect": "<p><span>Not Quite.</span> Try again.</p>" // pas de virgule de séparation ici
        } // pas de virgule de séparation ici
    ]
};
