// questions to use in the quiz.
const questions = [
  {
    question: 'What Color is the famous 1980s arcade character that likes to eat a varied diet of Pellets, Fruit and Ghosts?',
    option1: 'Green',
    option2: 'Blue',
    option3: 'Yellow',
    option4: 'Pink',
    answer: 'Yellow'
  },
  {
    question: 'What was the name of the popular 1980s Atarii game that involves shooting invading aliens from the sky while hiding behind 3 barriers?',
    option1: 'Space Invaders',
    option2: 'OMG Alien invasion.',
    option3: 'Angry Aliens from Mars.',
    option4: 'Galaxy Gankers',
    answer: 'Space Invaders'
  },
  {
    question: 'What was the biggest selling games console of the 1980s (1980-1989)?',
    option1: 'Atari 7800',
    option2: 'NES Family Computer',
    option3: 'Sega Genesis',
    option4: 'PC Engine TurbograFX',
    answer: 'NES Family Computer'
  },
  {
    question: "Christian activist Mary Whitehouse once said 'Its the most outrageous affront to public decency since the Mona Lisas provacative smile.' What popular game of the 1980s was she reffering to?",
    option1: 'Dizzy',
    option2: 'Double Dragon',
    option3: 'Space Invaders',
    option4: 'Tetris',
    answer: 'Tetris'
  },
  {
    question: 'What game of the late 1980s was originally designed as an educational tool by an international think tank?',
    option1: 'Metroid',
    option2: 'Contra',
    option3: 'Sim City',
    option4: 'Boulder Dash',
    answer: 'Sim City'
  },
  {
    question: "What beat em up of the 1990s caused controversy with its 'realistic' graphics and the ability to 'FINISH' your opponents?",
    option1: 'Fifa 95',
    option2: 'Tekken',
    option3: 'Lemmings',
    option4: 'Mortal Kombat',
    answer: 'Mortal Kombat'
  },
  {
    question: 'Released in 1991 what game saw you take on the roll of a pig killing, no messing, pipe bomb loving psychopath with a taste for chaos?',
    option1: 'Civilisation',
    option2: 'Fatal Fury',
    option3: 'Duke Nukem',
    option4: 'Sonic The Hedgehog',
    answer: 'Duke Nukem'
  },
  {
    question: 'Axel Stone, Adam Hunter and Blaze Fielding are the playable characters in what popular 1990s side scrolling beat em up?',
    option1: 'Golden Axe',
    option2: 'Dead or Alive',
    option3: 'Road Rash',
    option4: 'Streets of Rage',
    answer: 'Streets of Rage'
  },
  {
    question: 'Released in 1997 Final Fantasy 7 was one of the greatest games of the decade. How many discs were needed to play the game on release?',
    option1: '1',
    option2: '4',
    option3: '6',
    option4: '3',
    answer: '3'
  },
  {
    question: 'What late 1990s video game has had over 4,000 articles published about it, which include accusations of glamorising violence, corrupting gamers, and connection to real life crimes, holds the record for the most controversial game of all time?',
    option1: 'Unreal',
    option2: 'Grand Theft Auto',
    option3: 'Metal Gear Solid',
    option4: 'Resident Evil',
    answer: 'Grand Theft Auto'
  },
  {
    question: 'Shifting a Massive 82 million Units to date, what was the biggest selling video game of the 2000s?',
    option1: 'Wii Sports',
    option2: 'Pokemon Diamond & Pearl',
    option3: 'New Super Mario Bros',
    option4: 'The Sims',
    answer: 'Wii Sports'
  },
  {
    question: 'The Burning Crusade, Wrath of the Lich King, Cataclysm and Mists of Pandaria were just some of the expansions released for which popular MMORPG launched in 2004?',
    option1: 'Ultima Onine',
    option2: 'World of Warcraft',
    option3: 'The Witcher',
    option4: 'Guild Wars',
    answer: 'World of Warcraft'
  },
  {
    question:
      'Rythm games were everywhere in the mid 2000s, however one paticular title stood out from the rest and even became part of popular culture with an entire South Park episode centered around the game. what was the game called?',
    option1: 'Amplitude',
    option2: 'PaRappa the Rapper 2',
    option3: 'Guitar Hero',
    option4: 'Just Dance',
    answer: 'Guitar Hero'
  },
  {
    question: 'What popular mobile game released in 2009 involved catapulting a selection of avarian species into precarious structures and even had a film based on the game released in 2016?',
    option1: 'Twin Blades',
    option2: 'Trenches',
    option3: 'Plants Vs Zombies',
    option4: 'Angry Birds',
    answer: 'Angry Birds'
  },
  {
    question: 'Little Sisters, Big Daddies, Plasmids and The city of Rapture are all featured in what 2007 FPS/RPG hybrid video game?',
    option1: 'The Witcher',
    option2: 'Bio Shock',
    option3: 'Crackdown',
    option4: 'Left 4 Dead',
    answer: 'Bio Shock'
  },
  {
    question: 'What action adventure rpg video game released in 2011 by FromSoftware had players fighting through a medieval fantasy land facing off against Knights, Dragons, Skeletons and Epic Boss battles?',
    option1: 'Clash of Clans',
    option2: 'Binding of Isaac',
    option3: 'Dark Souls',
    option4: 'Payday',
    answer: 'Dark Souls'
  },
  {
    question: 'Elle and Joel are the two main characters in which 2013 video game, widely reffered to as one of the greatest games of all time?',
    option1: 'The Last of Us',
    option2: 'Bio Shock',
    option3: 'Outlast',
    option4: 'State Of Decay',
    answer: 'Bio Shock'
  },
  {
    question: 'Partially Released to the public in 2009 and later given a full release in 2011, What video game invloving building blocks is still popular to this day?',
    option1: 'Cities Skylines',
    option2: 'Terraria',
    option3: 'Minecraft',
    option4: 'Frostpunk',
    answer: 'Minecraft'
  },
  {
    question: 'Reinhardt, Tracer, and Mercy are just some of the playable characters in which 2016 video game?',
    option1: 'Monster Hunter World',
    option2: 'Horizon Zero Dawn',
    option3: 'Fortnite',
    option4: 'Overwatch',
    answer: 'Overwatch'
  },
  {
    question: 'Team Cherry released their debut game in 2017 which is credited with introducing the Metroidvania playstyle to a whole new generation. What is the title of the game?',
    option1: 'Fruit Ninja',
    option2: 'Temple Run',
    option3: 'Silksong',
    option4: 'Hollow Knight',
    answer: 'Hollow Knight'
  },
];

// document elements.
const confirmAnswerElement = document.getElementById('check-answer');
const questionElement = document.getElementById('question-area');
const optionButtonOne = document.getElementById('opt-1');
const optionButtonTwo = document.getElementById('opt-2');
const optionButtonThree = document.getElementById('opt-3');
const optionButtonFour = document.getElementById('opt-4');
const displayAnswerElement = document.getElementById('display');
let playerScoreElement = document.getElementById('score-counter');
let questionCounterElement = document.getElementById('question-counter');

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
  $('#question-counter').text(questionCounter);
}

/**
 * On click event handler that gets the value of the button clicked.
 * Then gets the value of the answer key from the current question.
 * Logic is then used to compare both values.
 * Player score is incremented if correct and gets the next question if incorrect.
 */
$('#opt-1,#opt-2,#opt-3,#opt-4').on('click', function getAnswer(answer) {
  let selectedAnswer = this.innerText;
  answer = quizQuestions[currentQuestionIndex].answer;
  if (selectedAnswer === answer) {
    $('#display').removeClass('hidden').text('CORRECT').fadeOut(4500);
    this.classList.add('correct');
    playerScore++;
    playerScoreElement.innerText = playerScore;
  } else {
    $('#display').removeClass('hidden').text('Incorrect').fadeOut(4500);
    this.classList.add('incorrect');
  }
  currentQuestionIndex++;
  setTimeout(() => {
    $('#display').addClass('hidden');
    this.classList.remove('correct', 'incorrect');
    questionCounter++;
    midGameSequence();
    getNextQuestion();
    questionCounterElement.innerText = questionCounter;
  }, 5000);
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
    window.location.replace('game.html');
  }, 12000);
});


//function to trigger divs to split and launch the game.
$(window).on('load', function () {
  window.setTimeout(divSplitLeft, 3000);
  window.setTimeout(divSplitRight, 3000);
  startGame();
});

//function to animate divs after intro.
function divSplitRight() {
  $('#div2').animate({ left: '+=50vw' }, 3500);
  $('#div2').hide(1000);
}

//function to animate divs after intro.
function divSplitLeft() {
  $('#div1').animate({ left: '-=50vw' }, 3500);
  $('#div1').hide(1000);
}

//function to give a message to the user when 50% of the quiz is completed.
function midGameSequence() {
  if (questionCounter == 2 && playerScore < 1) {
    setTimeout(() => {
      $("#display")
        .removeClass("hidden")
        .text("HALF WAY!")
        .fadeIn(500)
        .fadeOut(1000);
    }, 750);
    setTimeout(() => {
      $("#display").text("DONT GIVE UP!").fadeIn(1000).fadeOut(1000);
    }, 2250);
  } else if (questionCounter == 2 && playerScore == 1) {
    setTimeout(() => {
      $("#display")
        .removeClass("hidden")
        .text("HALF WAY!")
        .fadeIn(500)
        .fadeOut(1000);
    }, 750);
    setTimeout(() => {
      $("#display").text("YOUR DOING GREAT!").fadeIn(1000).fadeOut(1000);
    }, 2250);
  }
  $("#display").addClass("hidden");
}





