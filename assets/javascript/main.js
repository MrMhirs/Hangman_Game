// Using LocalStorage to save players name//
function playerName (){
    const playerName = document.getElementById("userName")
    localStorage.setItem("playerName",playerName.value)
    console.log(localStorage.getItem("playerName"))
}


const keyboard = document.querySelector( '#injectLetters' );

let alphabet;
let letters;
let letterBtn;
let lettersClicked = [];

// FOR LOOP TO GENERATE THE ALPHABET FROM "A" TO "Z"
for ( i = 9, alphabet = ''; ++i < 36; ) {
    alphabet += i.toString( 36 );
}

letters = new Array (...alphabet);

// FOR LOOP TO CREATE BUTTONS FOR EACH LETTER AND APPEND TO DIV PARENT AND ADD INNER HTML

for (i in letters/* i = 0; i < letters.length; i++ */) {
    letterBtn = document.createElement('button');
    letterBtn.setAttribute('id', letters[i]);
    letterBtn.setAttribute('value', letters[i]);
    letterBtn.setAttribute('class', 'btn-letters')
    letterBtn.innerHTML = letters[i];
    keyboard.appendChild( letterBtn );
}

let btnLetters = document.querySelectorAll('.btn-letters');
const usedLetters = document.querySelector('.clicked-letters')



// CLICKED LETTERS NO KEYBOARD DELETED FROM KEYBOARD
btnLetters.forEach(element => {
    var btnContent = element.innerHTML;
    element.addEventListener('click', () => {
    keyboard.removeChild(element);
    usedLetters.appendChild(element)

    })
});


const fruits = [
    "fig",
    "apple",
    "banana",
    "coconut",
    "pineapple",
    "strawberry"
];
var currentWord = []
// Selecting random word //
var answer = fruits[Math.floor(Math.random() * fruits.length)];
    console.log(answer)

// Underscores for the word
for (i = 0; i < answer.length; i++) {
    currentWord.push("_");
  }
  document.getElementById("underLine").innerHTML = currentWord.join(" ");






