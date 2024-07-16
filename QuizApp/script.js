const questions = [
    {
        "question": "Which is the largest animal in the world?",
        "answers": [
            { "text": "Shark", "correct": false },
            { "text": "Blue whale", "correct": true },
            { "text": "Elephant", "correct": false },
            { "text": "Giraffe", "correct": false }
        ]
    },
    {
        "question": "What is the capital of France?",
        "answers": [
            { "text": "Berlin", "correct": false },
            { "text": "Madrid", "correct": false },
            { "text": "Paris", "correct": true },
            { "text": "Rome", "correct": false }
        ]
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "answers": [
            { "text": "Earth", "correct": false },
            { "text": "Mars", "correct": true },
            { "text": "Jupiter", "correct": false },
            { "text": "Saturn", "correct": false }
        ]
    },
    {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "answers": [
            { "text": "Harper Lee", "correct": true },
            { "text": "Mark Twain", "correct": false },
            { "text": "Ernest Hemingway", "correct": false },
            { "text": "F. Scott Fitzgerald", "correct": false }
        ]
    },
    {
        "question": "What is the chemical symbol for water?",
        "answers": [
            { "text": "H2O", "correct": true },
            { "text": "O2", "correct": false },
            { "text": "CO2", "correct": false },
            { "text": "H2", "correct": false }
        ]
    }
]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion(); // calling the showing fucntion 
}

// showing 1st question 

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question

    // display answers

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);

    })
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score = score + 1;
    } else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")

        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML =    `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex = currentQuestionIndex + 1;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz()

