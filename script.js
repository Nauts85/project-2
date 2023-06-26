// questions to use in the quiz.
const questions = [
  {
    question:
      "What Color is the famous 1980s arcade character that likes to eat a varied diet of Pellets, Fruit and Ghosts?",
    option1: "Green",
    option2: "Blue",
    option3: "Yellow",
    option4: "Pink"
  },
  {
    question:
      "What was the name of the popular Atarii game that involves shooting invading aliens from the sky while hiding behind 3 barriers?",
    option1: "Space Invaders",
    option2: "OMG Alien invasion.",
    option3: "Angry Aliens from Mars.",
    option4: "Galaxy Gankers"
  }
];

//confirm answer button.
const confirmButtonElement = document.getElementById('#submit-answer'); 

//Option buttons.
const optionButtonOne = document.getElementById("option1");
const optionButtonTwo = document.getElementById("option2");
const optionButtonThree = document.getElementById("option3");
const optionButtonFour = document.getElementById("option4");
//<h1> question display element.
const questionElement = document.getElementById('question'); 

// question variables.
let currentQuestionIndex;
let jumbledQuestions;

 //TEMPORARY start button for testing purposes.
$('#submit-answer').on('click', startGame)

function startGame(){
  currentQuestionIndex = 0
  jumbledQuestions = questions.sort(() => Math.random() - .5)
  getNextQuestion()
}

 // defines question as questions[0].question
function getNextQuestion(){
  displayQuestion(jumbledQuestions[currentQuestionIndex])
}

function displayQuestion(question) {
  questionElement.innerText = question.question;
  optionButtonOne.innerText = question.option1;
  optionButtonTwo.innerText = question.option2;
  optionButtonThree.innerText = question.option3;
  optionButtonFour.innerText = question.option4;
}


/**
 * Event handler for the start button on index.html
 * each element is faded in, totalling 10 seconds per transition
 * ending with the introduction to the first game section
 */
$("#btn-start").on("click", function gameIntro() {
  $("#btn-start").fadeOut(1000);
  setTimeout(() => {
    $(".first-intro").fadeIn(2000).fadeOut(3000);
  }, 5000);
  setTimeout(() => {
    $(".second-intro").fadeIn(2000).fadeOut(3000);
  }, 10000);
  setTimeout(() => {
    $(".third-intro").fadeIn(1000);
  }, 15000);
  setTimeout(() => {
    window.location.replace('game.html')
  }, 22000);
});

//function checkAnswer()
//function incrementScore()
//function eraTransistion()