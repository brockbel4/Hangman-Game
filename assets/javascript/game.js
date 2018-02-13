// Dog Themed Hangman

// display "Press any key to get started!"
// document.getElementById("startScreen").innerHTML("Press any key to get started!");
if(onkeyup === "true")
{
    // document.getElementById("startScreen").innerHTML("");
    var targetDiv = document.getElementById("startScreen");

      targetDiv.innerHTML = "";
}
else
{
    var targetDiv = document.getElementById("startScreen");

        targetDiv.innerHTML = "Press any key to get started!";
}
// Check if the user has enough lives to play.
// If they have enough lives then pass their choice through a loop to see if it is in the word.
// For every instance it is in the word display a letter.
// If the letter is not in the word then add it to the incorrect guesses and show an image on the hangman and take a life away.
// If the entire word is guessed reset lives to 10, image to blank, incorrect guesses to blank, and use a new word. Add number of words guessed correctly and number of losses.






/*


// guessing all of the letters results in a win

// User will pick the letter by typing it (add clicking and a virtual keyboard if time permits)

// If all of the body is drawn then you lose

//array of the words - add more
var dictionary = ["German Shepherd", "Labrador Retriever", "Siberian Husky", "English Bulldog", "French Bulldog", "Poodle", "Corgie", "Alaskan Malamute", "Golden Retriever"]

// someway for the user to interact with the board
// the event listener works, I cannot get it to loop through all instances of the word yet.
document.onkeyup = function(choice)
{
    console.log(choice.key);
    currentWord.indexOf(choice.key);
    console.log(currentWord.indexOf(choice.key));
    return currentWord.indexOf(choice.key);
}



// conditional logic to see if you win or lose
var playerWins = 0;
var playerLosses = 0;

//random word generator - Works
var rand = dictionary[Math.floor(Math.random() * dictionary.length)];

var currentWord = rand;
   console.log(currentWord)

var usedWords = [];



*/