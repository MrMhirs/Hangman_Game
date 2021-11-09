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

btnLetters.forEach(element => {
    var btnContent = element.innerHTML;
    element.addEventListener('click', () => {
    keyboard.removeChild(element);
    usedLetters.appendChild(element)

    })
});




// CLICKED LETTERS NO KEYBOARD DELETED FROM KEYBOARD



