const quizData = [
  {
    question: "16世紀から18世紀までの欧米諸国は，アジアの大国に対して，人口や国力では？",
    choices: [
      { text: "優れていた．" },
      { text: "劣っていた．" },
    ],
    correct: 1,
  },
  {
    question: "人口や国力では劣っていた欧米諸国がアジアの大国も支配させることができるようになったのはなぜ？",
    choices: [
      { text: "宗教家が多く，その宗教による国の団結力が高かったため．" },
      { text: "国権力者が，アジアの人々を人質として拉致したため．" },
      { text: "産業革命で，軍事や工業の優れた技術を手に入れたため．" },
      { text: "この頃のアジアは各地で内戦が起こり，国内の結束が緩くなっていたため．" },
    ],
    correct: 2,
  },
  {
    question: "18世紀の清が欧米との貿易をするために唯一開いた港はどこ？",
    choices: [
      { text: "旅順" },
      { text: "広州" },
      { text: "香港" },
      { text: "上海" },
    ],
    correct: 1,
  },
  {
    question: "この頃，イギリスが他国から多く輸入していたものは？",
    choices: [
      { text: "茶，陶磁器，絹" },
      { text: "鉄鉱石，石油" },
      { text: "香辛料，米，綿" },
      { text: "銀，工業製品，アヘン" },
    ],
    correct: 0,
  },
  {
    question: "同時期，清がイギリスに輸出していたものは？",
    choices: [
      { text: "金，銀" },
      { text: "石油，綿" },
      { text: "文書，鉱石" },
      { text: "茶，絹" },
    ],
    correct: 3,
  },
  {
    question: "イギリスが輸入しているものと，清が輸出しているものの関係により，イギリスは？",
    choices: [
      { text: "赤字になった．" },
      { text: "黒字になった．" },
    ],
    correct: 0,
  },
  {
    question: "イギリスは，清が輸出している茶や絹を他国から大量に輸入していて赤字になったため，どのようにした？",
    choices: [
      { text: "インドから綿織物を輸入し，国内でアヘンを栽培して清に売り，銀や金などの金属を買うようにした．" },
      { text: "綿織物をインドに輸出し，インドでアヘンを栽培させて清に売り，中国製品を買うようにした．" },
      { text: "" },
      { text: "" },
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
  } (${percentage.toFixed(7)}%)`;
}
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  initQuiz();
}
initQuiz();
