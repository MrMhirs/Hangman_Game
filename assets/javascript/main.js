// Using LocalStorage to save players name//
function playerName (){
    const playerName = document.getElementById("userName")
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
];

const keyboard = document.querySelector( '#injectLetters' );
const usedLetters = document.querySelector( '.clicked-letters' );
const startGameBtn = document.getElementById( 'startGameBtn' );
const lettersClicked = [];
const currentWord = [];
const answerWord = [];
const fruits = [
    "fig",
    "apple",
    "banana",
    "coconut",
    "pineapple",
    "strawberry"
];
const HISTORY = [];
let players = [];

const answer = fruits[Math.floor( Math.random() * fruits.length )]; // Selecting random word from fruits array
let alphabet;
let letters;
let letterBtn;
let lettersReset = "";
let btnLetters;
let username;
let currId = 0;

let playersIds;

// For loop to generate the alphabet from "A" to "Z"

letters = new Array( ...alphabet );

for ( i = 9, alphabet = ''; ++i < 36; ) {
    alphabet += i.toString( 36 );
}


// For loop to create buttons for each letter and append them to div parent and add innerHTML
for ( i in letters/* i = 0; i < letters.length; i++ */ ) {
    btnLetters = document.querySelectorAll( '.btn-letters' );
    letterBtn = document.createElement( 'button' );
    letterBtn.setAttribute( 'id', letters[i] );
    letterBtn.setAttribute( 'value', letters[i] );
    letterBtn.setAttribute( 'class', 'btn-letters' );
    letterBtn.innerHTML = letters[i];
    keyboard.appendChild( letterBtn );
}

let btnLetters = document.querySelectorAll('.btn-letters');
const usedLetters = document.querySelector('.clicked-letters')


var currentWord = []
// Selecting random word //
var answer = fruits[Math.floor(Math.random() * fruits.length)];
    console.log(answer)

// Underscores for the word
for (i = 0; i < answer.length; i++) {
    currentWord.push("_");
  }
  document.getElementById("underLine").innerHTML = currentWord.join(" ");

// CLICKED LETTERS NO KEYBOARD DELETED FROM KEYBOARD
btnLetters.forEach(element => {
    var btnContent = element.innerHTML;
    element.addEventListener('click', () => {
    keyboard.removeChild(element);
    usedLetters.appendChild(element)
    checkIfPresent(element.value);
    })
});



function checkIfPresent(letter) {
    const aux = answer.split('')                                // Created variable to split answer
    console.log(currentWord)
    console.log(aux)
    // const currWordArr = answer.split();
    while (aux.includes(letter)){                               // While splitted answer includes letter
        var index = aux.indexOf(letter)
        delete aux[index]                                       // delete letter from index of answer
        currentWord[index] = letter;                            // replace underscores for letters
        console.log(index)
    }
    console.log(currentWord)
    document.getElementById("underLine").innerHTML = currentWord.join(" ");
}





