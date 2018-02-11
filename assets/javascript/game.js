// Dog Themed Hangman

// guessing all of the letters results in a win

// User will pick the letter by typing it (add clicking and a virtual keyboard if time permits)

// If all of the body is drawn then you lose

//array of the words
var dictionary = ["German Shepherd", "Labrador Retriever", "Siberian Husky", "English Bulldog", "French Bulldog", "Poodle", "Corgie", "Alaskan Malamute", "Golden Retriever"]

// someway for the user to interact with the board
document.onkeyup = function(choice)
{
    console.log(choice.key);
}

// conditional logic to see if you win or lose
var playerWins = 0;
var playerLosses = 0;

//random word generator
var rand = dictionary[Math.floor(Math.random() * dictionary.length)];

var currentWord = rand;
   console.log(currentWord)

// statistics, win and loss variables
// if(something){
    //     //player has won
    //     playerWins++;
    // }
    
    // else{
        //     // player loses
        //     playerLosses++;
        // }
        
        // // update the statistics
        
        // console.log(playerWins);