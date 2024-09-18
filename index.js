// Define an array of questions and answers
const questions = [
    { question: "2 + 2 は何ですか？", answer: 4 },
    { question: "3 + 5 は何ですか？", answer: 8 },
    { question: "10 - 4 は何ですか？", answer: 6 }
];

let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
    document.getElementById('question').innerText = questions[currentQuestionIndex].question;
}

// Function to check the answer
function checkAnswer() {
    const answer = parseInt(document.getElementById('answer').value);
    const correctAnswer = questions[currentQuestionIndex].answer;

    document.getElementById('result').innerText = answer === correctAnswer ? "正解です！" : "不正解です。";
}

// Function to start the quiz
function startQuiz() {
    document.getElementById('startButton').style.display = 'none';
    displayQuestion();
}

// Add event listener to the start button
document.getElementById('startButton').addEventListener('click', startQuiz);

// Display the first question when the page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').style.display = 'block';
});
