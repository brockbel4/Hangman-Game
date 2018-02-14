var MAX_GUESSES = 10;
var WORDS = ['apple', 'apricot', 'avocado', 'banana', 'blackberry', 'blueberry', 'boysenberry', 'cherry', 'cranberry', 'date', 'dragonfruit', 'elderberry', 'fig', 'grape', 'grapefruit', 'guava', 'jackfruit', 'kiwi', 'kumquat', 'lemon', 'lime', 'mango', 'watermelon', 'cantaloupe', 'honeydew', 'nectarine', 'orange', 'clementine', 'papaya', 'passionfruit', 'peach', 'pear', 'plum', 'pineapple', 'pomegranite', 'raspberry', 'strawberry'];

var started = false; 
var currentGuesses = 0;
var lettersGuessed = [];
var wins = 0;
var currentWord = '';
var gameDisplay = [];

/* This function hides the start screen and displays the game after a key is pressed.
 This function also adds win counter, guesses left counter, letters guessed display, and
 the underscores/gameboard. */
function renderGame() {
  document.getElementById('startScreen').style = 'display: none';
  document.getElementById('game').style = 'display: block';
  document.getElementById('winNumber').innerHTML = wins;
  document.getElementById('guessNumber').innerHTML = MAX_GUESSES - currentGuesses;
  document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(' ');
  document.getElementById('gameBoard').innerHTML = gameDisplay.join(' ');
}

/* This function contains the loop that goes through and picks a word to display.
 It picks it at random from the array and displays the correct number of underscores.
 It emptys the letters guessed, current guesses left, and the underscores for a fresh start */
function resetGame() {
  var randomWordIndex = Math.floor(Math.random() * WORDS.length);
  
  currentGuesses = 0;
  lettersGuessed = [];
  gameDisplay = [];
  currentWord = WORDS[randomWordIndex];
  for(var i = 0; i < currentWord.length; i++) {
    gameDisplay.push('_');
  }
}

/* This function will run to detect when a key is pressed. It will then run "resetGame()" and "renderGame()"
   The if statement is looking to see if the game has started or not.
   If it has the start screen will go away and the game will be displayed.
   If not then it will wait until a key is pressed. */
function keyPressed(e) {
  if(started === false) {
    started = true;
    resetGame();
    renderGame();
  } else {
    var keyTyped = e.key;
    var foundMatch = (currentWord.indexOf(keyTyped) >= 0);
    if(lettersGuessed.indexOf(keyTyped) === -1) {
      lettersGuessed.push(keyTyped);
      if(foundMatch) {
        for(var i = 0; i < currentWord.length; i++) {   // This will loop through the current word and replace any "_" with the character if it is correct.
          if(currentWord[i] === keyTyped) {
            gameDisplay[i] = keyTyped;
          }
        }
        if(gameDisplay.indexOf('_') === -1) {   // This detects if there are any "_" left in the word if not you win and the game resets.
          wins++;
          resetGame();
        }
      } else {  // adds to the currentGuesses variable which will subtract from the max to display the correct variable.
        currentGuesses++;
        if(currentGuesses === MAX_GUESSES) {
          resetGame();
        }
      }
    }
    renderGame();
  }
}

document.addEventListener('keypress', keyPressed);  // Listens for any key to be pressed