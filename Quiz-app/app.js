const questions = [
    {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'O2', 'NaCl'],
        correctAnswer: 'H2O'
    },
    {
        question: 'Which gas do plants absorb during photosynthesis?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide'
    },
    {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
        correctAnswer: 'Mitochondria'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
        correctAnswer: 'Jupiter'
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Cu'],
        correctAnswer: 'Au'
    },
    {
        question: 'Which gas makes up the majority of Earth\'s atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
        correctAnswer: 'Nitrogen'
    },
    {
        question: 'What is the speed of light?',
        options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '200,000 km/s'],
        correctAnswer: '300,000 km/s'
    },
    {
        question: 'What is the chemical symbol for silver?',
        options: ['Ag', 'Au', 'Pt', 'Hg'],
        correctAnswer: 'Ag'
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
    },
    {
        question: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        correctAnswer: '2'
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-button');
    const feedbackContainer = document.getElementById('feedback-container');

    questionContainer.textContent = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = '';

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionButton);
    });

    nextButton.style.display = 'none';
    feedbackContainer.textContent = '';
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedbackContainer = document.getElementById('feedback-container');
    const nextButton = document.getElementById('next-button');

    if (selectedOption === correctAnswer) {
        score++;
        feedbackContainer.textContent = 'Correct!';
    } else {
        feedbackContainer.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const nextButton = document.getElementById('next-button');

    quizContainer.innerHTML = `<h2>Quiz Completed</h2><p>Your Score: ${score}/${questions.length}</p>`;

    if (score === questions.length) {
        feedbackContainer.textContent = 'Congratulations! You got all the questions right!';
    }

    nextButton.style.display = 'none';
}

// Start the quiz when the page loads
startQuiz();
