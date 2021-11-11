//  variables and constants declarations

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

// clicked letters are deleted from keyboard
btnLetters.forEach( element => {
    let btnContent = element.innerHTML;
    element.addEventListener( 'click', () => {
        keyboard.removeChild( element );
        usedLetters.appendChild( element );
    } );
} );



// Underscores of the word
for ( i = 0; i < answer.length; i++ ) {
    currentWord.push( "_" );
}
document.getElementById( "underLine" ).innerHTML = currentWord.join( " " );

