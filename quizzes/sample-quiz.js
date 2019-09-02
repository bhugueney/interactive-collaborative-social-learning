quiz = {
    "info": {
        "name":    "", // Should be empty with emacs-reveal
        "main":    "What do you know about interactive collaborative social learning?  Let's see...",
        "level1":  "Excellent!", // 80-100%
        "level2":  "Well done!", // 60-79%
        "level3":  "You may need to re-read some parts.", // 40-59%
        "level4":  "Did you just jump here?",             // 20-39%
        "level5":  "Please restart from the beginning."   // 0-19%, no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which statement about learning is correct?",
            "a": [
                {"option": "Learning has to be boring", "correct": false},
                {"option": "Learning has to be expensive", "correct": false},
                {"option": "Learning has to be a solitary endeavour", "correct": false},
                {"option": "Learning can be interactive, collaborative and social", "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Yes, Learning can be interactive, collaborative and social. With no upfront cost (free software) nor hosting cost to pass on learners !</p>",
            "incorrect": "<p><span>No.</span> You may want to start over.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the current situation for interactive collaborative social learning ?",
            "a": [
                {"option": "The tools are getting there", "correct": true},
                {"option": "Uses simple text format for ease of collaboration", "correct": true},
                {"option": "Lowers the barrier to participation with CI/CD", "correct": true},
                {"option": "Generates platform-independent HTML presentations", "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> You got it all.</p>",
            "incorrect": "<p><span>Not Quite.</span> Try again.</p>" // no comma here
        } // no comma here
    ]
};
