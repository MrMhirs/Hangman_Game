let lettersContainer = document.querySelector( '.letters-container' );

let alphabet;
let letters;
let letter;

// FOR LOOP TO GENERATE THE ALPHABET FROM "A" TO "Z"
for ( i = 9, alphabet = ''; ++i < 36; ) {
    alphabet += i.toString( 36 );
}
letters = new Array (...alphabet);
// FOR LOOP TO CREATE BUTTONS FOR EACH LETTER AND APPEND TO DIV PARENT AND ADD INNER HTML
for (i = 0; i < letters.length; i++) {
    letter = document.createElement('button');
    lettersContainer.appendChild( letter);
    letter.innerHTML = letters[i];
}
