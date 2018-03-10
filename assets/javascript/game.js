//array of the computers choices
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
console.log(computerChoices);
// variable to hold numbers
var wins = 0;
var losses = 0;
var attempts = 9;
var userGuessesPicked = [];
var userGuesses = null;
var letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("wins: " + wins + " losses: " + losses + " attemptsLeft: " + attempts + " userGuessesPicked: " + userGuessesPicked + " computerGuess: " + letterToGuess);
// function that runs whenever a key is pressed
document.onkeyup = function(event){
    console.log(event.key);
}
    
    // actions when keys are pressed 



//