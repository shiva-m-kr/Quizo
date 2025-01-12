const questions = [
    {
        question: "Who was the founder of the Maurya Empire?",
        options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
        answer: "Chandragupta Maurya"
    },
    {
        question: "Which Indian king is known as 'The Great' for spreading Buddhism?",
        options: ["Harsha", "Ashoka", "Kanishka", "Chandragupta II"],
        answer: "Ashoka"
    },
    {
        question: "Who was the famous ruler of the Gupta dynasty known for his patronage of arts and sciences?",
        options: ["Chandragupta I", "Chandragupta II", "Samudragupta", "Skandagupta"],
        answer: "Samudragupta"
    },
    {
        question: "Who was the Mughal emperor during the first Battle of Panipat?",
        options: ["Babur", "Akbar", "Aurangzeb", "Shah Jahan"],
        answer: "Babur"
    },
    {
        question: "Which Chola king built the Brihadeeswara Temple in Thanjavur?",
        options: ["Raja Raja Chola I", "Rajendra Chola", "Karikala Chola", "Vijayalaya Chola"],
        answer: "Raja Raja Chola I"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContent = document.getElementById("quiz-content");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    const questionData = questions[currentQuestion];
    quizContent.innerHTML = `
        <div class="question-box">
            <h2>Question ${currentQuestion + 1}:</h2>
            <p>${questionData.question}</p>
        </div>
        <div class="options">
            ${questionData.options
                .map(
                    (option, index) => `
                <label>
                    <input type="radio" name="question${currentQuestion}" value="${option}">
                    <span>${option}</span>
                </label>
            `
                )
                .join("")}
        </div>
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector(
        `input[name="question${currentQuestion}"]:checked`
    );
    if (selectedOption && selectedOption.value === questions[currentQuestion].answer) {
        score++;
    }
}

nextBtn.addEventListener("click", () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        quizContent.innerHTML = `
            <div class="question-box">
                <h2>Quiz Completed!</h2>
                <p>Your Score: ${score} / ${questions.length}</p>
            </div>
        `;
        nextBtn.style.display = "none";
    }
});

// Load the first question
loadQuestion();
