const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
var currentQuestionIndex = 0;
var feedbackEl = document.getElementById("feedback");

startButton.addEventListener('click', startGame)

let seconds = 60;
let timerDisplay = document.getElementById("timer");

let timer = setInterval(function() {
  seconds--;
  timerDisplay.innerHTML = "Time remaining: " + seconds + " seconds";
  if (seconds === 0) {
    clearInterval(timer);
    timerDisplay.innerHTML = "Time's up!";
  }
}, 1000);

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion()
}

function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    answerButtons.textContent = ""
    questionElement.textContent = currentQuestion.question;
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        const btnanswer = document.createElement("button");
        var choice = currentQuestion.choices[i];
        btnanswer.setAttribute("class", "choice");
        btnanswer.setAttribute("value", choice);
        btnanswer.textContent = choice;
        answerButtons.appendChild(btnanswer);
    }


}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var questionEl = document.getElementById
    feedbackEl.textContent = "";
    const selectedButton = e.target;
    if (selectedButton.value !== questions[currentQuestionIndex].answer) {
        // reduce time by 10 seconds
        feedbackEl.textContent = "wrong";
    } else {
        feedbackEl.textContent = "correct";
    }

    currentQuestionIndex++;
    showQuestion();
}

answerButtons.addEventListener('click', selectAnswer);


const questions = [
    {
        question: "The correct array method for adding an element to the start of an array is:",
        choices: [".unshift", ".pop", ".concat", ".push"],
        answer: ".unshift"
    },
    {
        question: "The correct string method for making all leters capital is:",
        choices: [".toUpperCase", ".charAt", ".substring", ".includes"],
        answer: ".toUpperCase"
    },
    {
        question: "What statement executes a block of code if a specified condition is true?",
        choices: ["if statement", "array", "for loop", "object"],
        answer: "if statement"
    }
]