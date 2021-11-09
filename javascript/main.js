function playerName (){
    const playerName = document.getElementById("username")
    localStorage.setItem("playerName",playerName.value)
    console.log(localStorage.getItem("playerName"))
}

var currentWord = []
var answerWord = []
var pastLetters = []
var lettersReset = "";
var guessesLeft = 10;

const fruits = [
    "fig",
    "apple",
    "banana",
    "coconut",
    "pineapple",
    "strawberry"
];

var answer = fruits[Math.floor(Math.random() * fruits.length)];
    console.log(answer)

document.getElementById("guesses-remain").innerHTML = guessesLeft;

var wins = 0;
document.getElementById("num-of-wins").innerHTML = wins;

// underscores of the word
for (i = 0; i < answer.length; i++) {
    currentWord.push("_");
  }
  
document.getElementById("theWord").innerHTML = currentWord.join(" ");

//Evaluate the position of a letter in the word
function wordLetters(letter){
    var letterPos = new Array();
    for ( i = 0; i < answer.length; i++){
        if (answer[i] === letter)
        letterPos.push (i);
    
    }
    return letterPos;
}


//  Return letters that are not guessed
function lettersToGuess () {
    var i ;
    var toGuess = 0;
    for ( i in currentWord) {
        if (currentWord[i] === "_")
        toGuess++;
    }
    return toGuess;
}


// function pressedKey (word, letter) {
//     let pressedKey = document.getElementById ("key").innerHTML = guessesLeft;
// }



document.onkeyup = function (event) {
    var letter =  event.key.toLowerCase();
    var lettersGuessed = letter;
    var letterPos = wordLetters;

    console.log(event)




        var letter = event.key.toLowerCase();
        var lettersGuessed = letter;
        var i;
        var letterPos = wordLetters(lettersGuessed);

        if (letterPos.length) {
            for (i = 0; i < letterPos.length; i++) {
            currentWord[letterPos[i]] = lettersGuessed;
}
        document.getElementById("active-word").innerHTML = currentWord.join(" ");

            } else {
            // If the letter has already been seen don't do it again.
                if (!pastLetters.includes(letter)) {
                // Placing the letter into an array that we can reference outside the scope of the key up event.
                pastLetters.push(letter);
                document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";
                guessesLeft--;
                document.getElementById("guesses-remain").innerHTML = guessesLeft;
                }
            }