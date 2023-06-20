//questions to use in the quiz
const questions = [
  {
  question:"What Color is the famous 1980s arcade character that likes to eat a varied diet of Pellets, Fruit and Ghosts?", 
  options: [
    {option: "Green", isCorrect: false},
    {option: "Blue", isCorrect: false},
    {option: "Yellow", isCorrect: true},
    {option: "Pink", isCorrect: true}
  ]
  
},
{
  question:"What was the name of the popular Atarii game that involves shooting invading aliens from the sky while hiding behind 3 barriers?",
  options: [
    {option: "Space Invaders", isCorrect: true},
    {option: "OMG Alien invasion.", isCorrect: false},
    {option: "Angry Aliens from Mars.", isCorrect: false},
    {option:"Galaxy Gankers", isCorrect: false}
  ]
  
}]

//document elements//
const confirmButtonElement = document.getElementById('#submit-answer');//confirm answer button
const answerOptionElement = document.getElementsByClassName('option');// option buttons
const questionElement = document.getElementById('question');//<h1> question display element

//question variables//
let currentQuestionIndex;
let jumbledQuestions;

$('#submit-answer').on('click', startGame) //TEMPORARY start button for testing purposes

function startGame(){
  currentQuestionIndex = 0
  jumbledQuestions = questions.sort(() => Math.random() - .5)
  getNextQuestion()
}

function getNextQuestion(){
  displayQuestion(jumbledQuestions[currentQuestionIndex]) //defines question as questions[0].question
}

function displayQuestion(question){
  questionElement.innerText = question.question 
}



//function displayNextQuestion()
//displayOptions();
//function checkAnswer()
//function incrementScore()
//function eraTransistion()