//array of the computers choices
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
console.log(computerChoices);
// variable to hold numbers
var wins = 0;
var losses = 0;
var attemptsLeft = 9;
var userGuessesPicked = [];
var userGuesses = null;
var letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("wins: " + wins + " losses: " + losses + " attemptsLeft: " + attemptsLeft + " userGuessesPicked: " + userGuessesPicked + " computerGuess: " + letterToGuess);
// function that runs whenever a key is pressed
document.onkeyup = function(event){
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (letterToGuess === userGuess) {
        wins++;
        attemptsLeft = 9;
        userGuessesPicked =[];
        letterToGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        console.log("wins: " + wins + " losses: " + losses + " attemptsLeft: " + attemptsLeft + " userGuessesPicked: " + userGuessesPicked + " computerGuess: " + letterToGuess);
    }

    if (userGuessesPicked.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess)>=0){
        userGuessesPicked[userGuessesPicked.length]=userGuess;
        attemptsLeft --;
        console.log("wins: " + wins + " losses: " + losses + " attemptsLeft: " + attemptsLeft + " userGuessesPicked: " + userGuessesPicked + " computerGuess: " + letterToGuess);
    }


    if (attemptsLeft === 0) {
        losses++;
        attemptsLeft = 9;
        userGuessesPicked = [];
        letterToGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        console.log("wins: " + wins + " losses: " + losses + " attemptsLeft: " + attemptsLeft + " userGuessesPicked: " + userGuessesPicked + " computerGuess: " + letterToGuess);
    }
    
// displaying Html
var html ="<h4>Wins: </h4> " + wins + "<h4>Losses: </h4>" + losses + "<h4>Attemps Left: <h4>" + attemptsLeft + "<h4> User Guesses Picked: </h4>" + userGuessesPicked;

document.querySelector("#game").innerHTML = html;
}
    
    



//