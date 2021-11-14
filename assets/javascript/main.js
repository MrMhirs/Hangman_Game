const fruits = [
    "fig",
    "apple",
    "banana",
    "coconut",
    "pineapple",
    "strawberry",
    "pomegranate"
];

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

    let btnLetters = document.querySelectorAll( '.btn-letters' );
    const usedLetters = document.querySelector( '.clicked-letters' );


    // Selecting random word //
    var answer = fruits[Math.floor( Math.random() * fruits.length )];

    // Underscores for the word
    for ( i = 0; i < answer.length; i++ ) {
        currentWord.push( "_" );
    }
    document.getElementById( "underLine" ).innerHTML = currentWord.join( " " );


    // CLICKED LETTERS NO KEYBOARD DELETED FROM KEYBOARD
    btnLetters.forEach( element => {
        var btnContent = element.innerHTML;
        element.addEventListener( 'click', () => {
            keyboard.removeChild( element );
            usedLetters.appendChild( element );
            checkIfPresent( element.value );
        } );
    } );

    function checkIfPresent ( letter ) {
        const aux = answer.split( '' );
        console.log( currentWord.join( "" ) );
        if ( currentWord.join( "" ) == answer ) {

            youWin();
        }
        console.log( aux );
        if ( !aux.includes( letter ) )
            changeLifeGame();




        while ( aux.includes( letter ) ) {
            var index = aux.indexOf( letter );
            delete aux[index];
            currentWord[index] = letter;
            console.log( index );
        }
        if ( currentWord.join( "" ) == answer ) {

var countLife = 6

function changeLifeGame() {
    countLife--
    console.log(countLife)
    switch (countLife) {
        case 5:
            document.getElementById("head").classList.remove("figure-part");

            youWin();
        }

        console.log( currentWord );
        document.getElementById( "underLine" ).innerHTML = currentWord.join( " " );
    }

        case 4:
            document.getElementById("body").classList.remove("figure-part");
            break;

        case 3:
            document.getElementById("armL").classList.remove("figure-part");
            break;

        case 2:
            document.getElementById("armR").classList.remove("figure-part");
            break;

        case 1:
            document.getElementById("legL").classList.remove("figure-part");
            break;

        case 0:
            document.getElementById("legR").classList.remove("figure-part");
            document.getElementsByClassName("lost-page")[0].scrollIntoView();
            countLife = 0
            break;
    }
}
    const figureParts = document.querySelectorAll( ".figure-part" );

    // Display parts

    var countLife = 7;

var playAgainBtn = document.querySelectorAll(".playAgain")
    playAgainBtn.forEach(element => {
        console.log(element)
        element.addEventListener("click", () => {
            document.getElementsByClassName("first-page")[0].scrollIntoView();
        });
    });
