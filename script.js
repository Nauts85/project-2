// questions to use in the quiz.
const questions = [
  {
    question:
      'What Color is the famous 1980s arcade character that likes to eat a varied diet of Pellets, Fruit and Ghosts?',
    option1: 'Green',
    option2: 'Blue',
    option3: 'Yellow',
    option4: 'Pink',
    answer: 'Yellow'
  },
  {
    question:
      'What was the name of the popular Atarii game that involves shooting invading aliens from the sky while hiding behind 3 barriers?',
    option1: 'Space Invaders',
    option2: 'OMG Alien invasion.',
    option3: 'Angry Aliens from Mars.',
    option4: 'Galaxy Gankers',
    answer: 'Space Invaders'
  }
];

// document elements.
const confirmAnswerElement = document.getElementById('check-answer');
const questionElement = document.getElementById('question-area');
const optionButtonOne = document.getElementById('opt-1');
const optionButtonTwo = document.getElementById('opt-2');
const optionButtonThree = document.getElementById('opt-3');
const optionButtonFour = document.getElementById('opt-4');
const displayAnswerElement = document.getElementById("display");
let playerScoreElement = document.getElementById('score-counter');
let questionCounterElement = document.getElementById("question-counter");

// question variables.
let currentQuestionIndex;
let quizQuestions = questions;
let questionCounter;

//player score variable
let playerScore;

//code to be run when the start button is clicked.
function startGame() {
  resetScore();
  resetQuestionCounter();
  currentQuestionIndex = 0;
  quizQuestions = questions;
  getNextQuestion();
}

// defines question as questions[0].question
function getNextQuestion() {
  displayQuestion(quizQuestions[currentQuestionIndex]);
}

//function to display the quiz question and the answer options.
function displayQuestion(question) {
  questionElement.innerText = question.question;
  optionButtonOne.innerText = question.option1;
  optionButtonTwo.innerText = question.option2;
  optionButtonThree.innerText = question.option3;
  optionButtonFour.innerText = question.option4;
}

//Reset Score Function.
function resetScore() {
  playerScore = 0;
  $('#score-counter').text(playerScore);
};

function resetQuestionCounter() {
  questionCounter = 1;
  $("#question-counter").text(questionCounter);
}

/**
 * On click event handler that gets the value of the button clicked.
 * Then gets the value of the answer key from the current question.
 * Logic is then used to compare both values.
 * Player score is incremented if correct and gets the next question if incorrect.
 */
$("#opt-1,#opt-2,#opt-3,#opt-4").on("click", function getAnswer(answer) {
  let selectedAnswer = this.innerText;
  answer = quizQuestions[currentQuestionIndex].answer;
  if (selectedAnswer === answer) {
    $("#display").removeClass("hidden").text("CORRECT");
    this.classList.add('correct');
    playerScore++;
    playerScoreElement.innerText = playerScore;
  } else {
    $("#display").removeClass("hidden").text("Incorrect");
    this.classList.add('incorrect');
  }
  questionCounter++;
  currentQuestionIndex++;
  setTimeout(() => {
    $("#display").addClass("hidden");
    this.classList.remove('correct', 'incorrect');
    getNextQuestion();
    questionCounterElement.innerText = questionCounter;
  }, 4000);
});

/**
 * Event handler for the start button on index.html
 * each element is faded in, totalling 10 seconds per transition
 * ending with the introduction to the first game section
 */
$('#btn-start').on('click', function gameIntro() {
  $('#btn-start').fadeOut(1000);
  setTimeout(() => {
    $('.first-intro').fadeIn(2000).fadeOut(2000);
  }, 2000);
  setTimeout(() => {
    $('.second-intro').fadeIn(2000).fadeOut(2000);
  }, 7000);
  setTimeout(() => {
    $('.third-intro').fadeIn(1000);
  }, 12000);
  setTimeout(() => {
    window.location.replace('game.html')
  }, 16000);
});

//function to trigger divs to split and launch the game.
$(window).on("load", function () {
  window.setTimeout(divSplitLeft, 3000);
  window.setTimeout(divSplitRight, 3000);
  startGame();
});

//function to animate divs after intro.
function divSplitRight() {
  $("#div2").animate(
    {
      left: "+=50vw"
    },
    5000
  );
}

//function to animate divs after intro.
function divSplitLeft() {
  $("#div1").animate(
    {
      left: "-=50vw"
    },
    5000
  );
}



//function eraTransistion()