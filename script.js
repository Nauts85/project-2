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
    question: 'Shifting a Massive 82 million Units to date, what was the biggest selling video game of the 2000s?',
    option1: 'Wii Sports',
    option2: 'Pokemon Diamond & Pearl',
    option3: 'New Super Mario Bros',
    option4: 'The Sims',
    answer: 'Wii Sports'
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
    answer: 'The Last of Us'
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



// game sound effects.
const correctAnswerSound = new Audio('../project-2/assests/audio/sound-correct-answer.mp3');
const incorrectAnswerSound = new Audio('../project-2/assests/audio/sound-incorrect-answer.mp3');
const gameStartBtnSound = new Audio('../project-2/assests/audio/sound-game-start-btn.wav');
const mouseOverSound = new Audio('../project-2/assests/audio/sound-mouse-over.mp3');
const endQuizRevealSound = new Audio('../project-2/assests/audio/sound-quiz-end-reveal.mp3');
const introSoundPresenting = new Audio('../project-2/assests/audio/sound-intro-presenting.wav');
const introSoundTrivia = new Audio('../project-2/assests/audio/sound-intro-trivia.wav');
const halfWaySound = new Audio('../project-2/assests/audio/sound-half-way.mp3');
const finalQuestionSound = new Audio('../project-2/assests/audio/sound-final-question.mp3');

// document elements.
const questionElement = document.getElementById('question-area');
const optionButtonOne = document.getElementById('opt-1');
const optionButtonTwo = document.getElementById('opt-2');
const optionButtonThree = document.getElementById('opt-3');
const optionButtonFour = document.getElementById('opt-4');
let playerScoreElement = document.getElementById('score-counter');
let questionCounterElement = document.getElementById('question-counter');

// question variables.
let currentQuestionIndex;
let quizQuestions = questions;
let questionCounter;

// player score variable
let playerScore;

// code to be run when the start button is clicked.
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

// function to display the quiz question and the answer options.
function displayQuestion(question) {
  questionElement.innerText = question.question;
  optionButtonOne.innerText = question.option1;
  optionButtonTwo.innerText = question.option2;
  optionButtonThree.innerText = question.option3;
  optionButtonFour.innerText = question.option4;
}

// Reset Score Function.
function resetScore() {
  playerScore = 0;
  $('#score-counter').text(playerScore);
}

// function to reset the question counter when game starts.
function resetQuestionCounter() {
  questionCounter = 1;
  $("#question-counter").text(questionCounter);
}

// function to add one to player score.
function addScoreAnimation() {
  $(".add-one").text("+1").show(500).hide(2500);
  playerScore++;
  playerScoreElement.innerText = playerScore;
}

// function to play sound on all buttons on mouse over.
$('button').on('mouseover', function () {
  mouseOverSound.play();
});

// function to mute the game theme.
$('#check-mute').on('click', function () {
  isChecked = $('#check-mute').is(':checked')
   if (isChecked) {
     $('audio#theme').prop('muted', true)
   } 
   else $('audio#theme').prop('muted', false)
})

// function to play the theme tune when the quiz loads.
$('audio#theme').ready(function() {
  $('audio#theme')[0].play();
  $('audio#theme')[0].loop = true;
});

/**
 * On click event handler that gets the value of the button clicked.
 * Then gets the value of the answer key from the current question.
 * Logic is then used to compare both values.
 * Player score is incremented if correct and gets the next question if incorrect.
 * functions are used to check the question counter and the player score to display messages to the progress display.
 */
$("button.btn-option").on("click", function getAnswer(answer, selected) {
  setTimeout(questionChange, 4500);
  $("button.btn-option").prop("disabled", true);
  selected = this.innerText;
  answer = quizQuestions[currentQuestionIndex].answer;
  if (selected === answer) {
    $("#display").removeClass("hidden").text("CORRECT");
    this.classList.add("correct");
    correctAnswerSound.play();
    addScoreAnimation();
  } else {
    $("#display").removeClass("hidden").text("Incorrect");
    this.classList.add("incorrect");
    incorrectAnswerSound.play();
  }
});

// function to check the game status and get the next question.
function questionChange() {
  $("#display").addClass("hidden");
  $("button.btn-option")
    .prop("disabled", false)
    .removeClass("correct", "incorrect");
  questionCounter++;
  currentQuestionIndex++;
  midGameSequence();
  rankRevealSequence();
  getNextQuestion();
  questionCounterElement.innerText = questionCounter;
}

/**
 * Event handler for the start button on index.html
 * each element is faded in, totalling 4 seconds per transition
 * ending with the introduction to the first game section
 */
$('#btn-start').on('click', function() {
  gameStartBtnSound.play();
  $('#btn-start,#btn-rules').fadeOut(1000);
  setTimeout(() => {
    introSoundPresenting.play();
    $('.first-intro').fadeIn(2500).fadeOut(2000);
  }, 2000);
  setTimeout(() => {
    introSoundTrivia.play();
    $('.second-intro').fadeIn(2500).fadeOut(2000);
  }, 7500);
  setTimeout(() => {
    window.location.replace('game.html');
  }, 13000);
});

// function to trigger divs to split and launch the game.
$(window).on("load", function () {
  window.setTimeout(revealDivLeft, 2750);
  window.setTimeout(revealDivRight, 2750);
  startGame();
});

// function to return to the main menu.
$('#btn-exit').on('click', function mainMenuReturn() {
  if (confirm("EXIT AND RETURN TO MAIN MENU?")) {
    window.location.replace('index.html');
  }
});

// function to open the game rules
$('#btn-rules').on('click', function() {
  $('.rules-container').fadeIn(1000);
});

// function to close the game rules
$('#close-rules-btn').on('click', function() {
  $('.rules-container').fadeOut(1000);
});

// function to close the options menu
$('#btn-close-options').on('click', function() {
  $('.options-container').fadeOut(500);
});

// function to animate divs after intro.
function revealDivRight() {
  $('#game-reveal-div-2').animate({ left: "+=50vw" }, 3000);
  $('#game-reveal-div-2').hide(500);
}

// function to animate divs after intro.
function revealDivLeft() {
  $('#game-reveal-div-1').animate({ left: "-=50vw" }, 3000);
  $('#game-reveal-div-1').hide(500);
}

// function to encourage the user at certain points in the quiz.
function midGameSequence() {
  if (questionCounter == 10) {
    setTimeout(() => {
      halfWaySound.play();
      $("#progress-display")
        .removeClass("hidden")
        .html(`<p>HALF</p> <p>WAY!</p>`)
        .fadeIn(1750)
        .fadeOut(1000);
    }, 750);
    if (playerScore >= 1 && playerScore <= 5) {
      setTimeout(() => {
        halfWaySound.play();
        $("#progress-display")
          .html(`<p>DONT</p> <p>GIVE</p> <p>UP!</>`)
          .fadeIn(1750)
          .fadeOut(1250);
      }, 2000);
    } else if (playerScore >= 6 && playerScore <= 10) {
      setTimeout(() => {
        halfWaySound.play();
        $("#progress-display")
          .html(`<p>WOW!</p> <p>YOUR</p> <p>GOOD!</>`)
          .fadeIn(1750)
          .fadeOut(1250);
      }, 2000);
    }
  }
  if (questionCounter == 20) {
    setTimeout(() => {
      finalQuestionSound.play();
      $("#progress-display")
        .removeClass("hidden")
        .html(`<p>FINAL</p> <p>QUESTION!</p>`)
        .fadeIn(2000)
        .fadeOut(1250);
    }, 750);
  }
  $("#progress-display").addClass("hidden");
}

/**
 * Function for the end of the quiz
 * all visible elements are faded out.
 * the user score is totaled and logic is used to decide the output.
 * template literals are used to simply change the layout of the container and its elements.
 */
function rankRevealSequence(iconRank) {
  if (questionCounter == 21) {
    $("body *").fadeOut(2000);
    iconRank = calculateRank();
    setTimeout(() => {
      $("body")
        .after(
          `
        <div class="container container-game-end text-center">
          <div class="row">
            <div class="col-12">
              <h1>Congratulations<h1>
              <p>You've made it to the end of the quiz!</p>
              <p>You managed to answer ${playerScore} questions correctly!</p>
              <p>Earning you the Rank of:</p>
            </div>
            <div class="col-12 rank-display">
              ${iconRank}
            </div>
            <div class="col-12">
              <button type="button" class="btn-main-menu" onclick="mainMenuReturn()">MAIN MENU</button>
            </div>
         </div>
        </div>`
        )
        .fadeIn(1500);
      endQuizRevealSound.play();
    }, 2500);
  }
}

function calculateRank(bronze, gold, silver, diamond) {
  bronze = `<span class="bronze-text">BRONZE</span><br>
           <i class="fa-solid fa-medal fa-beat rank-bronze"></i>`;
  silver = `<span class="silver-text">SILVER</span><br>
           <i class="fa-solid fa-medal fa-beat rank-silver"></i>`;
  gold = `<span class="gold-text">GOLD</span><br>
           <i class="fa-solid fa-medal fa-beat rank-gold"></i>`;
  diamond = `<span class="diamond-text">DIAMOND</span><br>
           <i class="fa-solid fa-medal fa-beat rank-diamond"></i>`;

  if (questionCounter == 21 && playerScore <= 5) {
    return bronze;
  } else if (questionCounter == 21 && playerScore >= 6 && playerScore <= 10) {
    return silver;
  } else if (questionCounter == 21 && playerScore >= 11 && playerScore <= 15) {
    return gold;
  } else if (questionCounter == 21 && playerScore >= 16 && playerScore <= 20) {
    return diamond;
  }
}







