function test (){
    const playerName = document.getElementById("username")
    localStorage.setItem("playerName",playerName.value)
    console.log(localStorage.getItem("playerName"))
}

const fruits = [
    "fig",
    "apple",
    "banana",
    "coconut",
    "pineapple",
    "strawberry"
]

var answer = "";
var mistakes = 0;
var guessed = [];
var wordStatus = null;
document.getElementById("key").innerHTML


function randomWord() {
    answer = fruits[Math.floor(Math.random() * fruits.length)];
    console.log(answer)
}



function guessedLetter(chosenKey) {
    guessed.indexOf(chosenKey) === -1 ? guessed.push(chosenKey) : null;
    document.getElementById(chosenKey).setAttribute("disable", true);
    alert(answer);


    if (answer.indexOf(chosenKey) >=0) {
        guessedWord();
    }
}



// Check if the letter exist in guessed array, if it does > 0 = true or false (.join= no commas)
function guessedWord() {
    wordStatus = answer.split("").map(key => (guessed.indexOf(fruits) >= 0 ? key : " _ ")).join("");

    document.getElementById("theWord").innerHTML = wordStatus
}






randomWord();
guessedWord();

