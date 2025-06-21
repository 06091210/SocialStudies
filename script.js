const quizData = [
  {
    question: "16世紀から18世紀までの欧米諸国は，アジアの大国に対して，人口や国力では劣っていた．⚪︎か×か",
    choices: [
      { text: "⚪︎" },
      { text: "×" },
    ],
    correct: 0,
  },
  {
    question: "人口や国力では劣っていた欧米諸国がアジアの大国も支配させることができるようになったのはなぜか",
    choices: [
      { text: "宗教家が多く，その宗教による国の団結力が高かったため．" },
      { text: "国権力者が，アジアの人々を人質として拉致したため．" },
      { text: "産業革命で，軍事や工業の優れた技術を手に入れたため．" },
      { text: "この頃のアジアは各地で内戦が起こり，国内の結束が緩くなっていたため．" },
    ],
    correct: 2,
  },
];
let currentQuiz = quizData;
let currentQuestion = 0;
let score = 0;
const totalQuestions = quizData.length;
document.getElementById("total-questions").textContent = totalQuestions;
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}
function loadQuestion() {
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("answer-section").style.display = "none";
  document.getElementById("final-result").style.display = "none";
  document.getElementById("question-number").textContent = `第 ${
    currentQuestion + 1
  } 問`;
  const questionData = currentQuiz[currentQuestion];
  document.getElementById("question").textContent = questionData.question;
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  questionData.choices.forEach((choice, index) => {
    const choiceDiv = document.createElement("div");
    choiceDiv.classList.add("choice");
    choiceDiv.textContent = `${index + 1}. ${choice.text}`;
    choiceDiv.onclick = () => checkAnswer(index, questionData);
    choicesContainer.appendChild(choiceDiv);
  });
}
function checkAnswer(selected, questionData) {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("answer-section").style.display = "block";
  const resultText = document.getElementById("answer-result");
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  if (selected === questionData.correct) {
    resultText.innerHTML = "<span class='correct'>正解</span>";
    score++;
  } else {
    resultText.innerHTML = "<span class='wrong'>不正解</span>";
  }
  if (currentQuestion === currentQuiz.length - 1) {
    document.getElementById("next-question").textContent = "結果を見る";
  } else {
    document.getElementById("next-question").textContent = "次の問題へ";
  }
}
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < currentQuiz.length) {
    loadQuestion();
    document.getElementById("container").scrollIntoView({ behavior: "smooth" });
  } else {
    showResult();
  }
}
function showResult() {
  document.getElementById("answer-section").style.display = "none";
  document.getElementById("final-result").style.display = "block";

  const percentage = (score / currentQuiz.length) * 100;
  document.getElementById("score").textContent = `正解数: ${score}/${
    currentQuiz.length
  } (${percentage.toFixed(2)}%)`;
}
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  initQuiz();
}
initQuiz();
