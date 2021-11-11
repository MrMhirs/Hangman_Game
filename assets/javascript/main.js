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
const usedLetters = document.querySelector( '.clicked-letters' );
const startGameBtn = document.getElementById( 'startGameBtn' );
const lettersClicked = [];
const answerWord = [];
const HISTORY = [];
let players = [];

let alphabet;
let letters;
let letterBtn;
let lettersReset = "";
let currId = 0;
let allPlayers;
let username = document.getElementById( 'userName' ).value;
let age = document.getElementById( 'age' ).value;
let score = document.getElementById( 'score' ).value;
let playersIds;

// For loop to generate the alphabet from "A" to "Z"

letters = new Array( ...alphabet );

for ( i = 9, alphabet = ''; ++i < 36; ) {
    alphabet += i.toString( 36 );
}


// For loop to create buttons for each letter and append them to div parent and add innerHTML

let btnLetters = document.querySelectorAll( '.btn-letters' );

for ( i = 0; i < letters.length; i++ ) {
    /*  btnLetters = document.querySelectorAll( '.btn-letters' ); */
    letterBtn.setAttribute( 'id', letters[i] );
    letterBtn.setAttribute( 'value', letters[i] );
    letterBtn.setAttribute( 'class', 'btn-letters' );
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

            youWin();
        }

        console.log( currentWord );
        document.getElementById( "underLine" ).innerHTML = currentWord.join( " " );
    }


    const figureParts = document.querySelectorAll( ".figure-part" );

    // Display parts

    var countLife = 7;

    function changeLifeGame () {
        countLife--;
        console.log( countLife );
        switch ( countLife ) {
            case 6:
                document.getElementById( "head" ).classList.remove( "figure-part" );

                break;

            case 5:
                document.getElementById( "body" ).classList.remove( "figure-part" );
                break;

            case 4:
                document.getElementById( "armL" ).classList.remove( "figure-part" );
                break;

            case 3:
                document.getElementById( "armR" ).classList.remove( "figure-part" );
                break;

            case 2:
                document.getElementById( "legL" ).classList.remove( "figure-part" );
                break;

            case 1:
                document.getElementById( "legR" ).classList.remove( "figure-part" );
                break;

            case 0:
                document.getElementsByClassName( "lost-page" )[0].scrollIntoView();
                countLife = 0;
        }
    }

    function youWin () {
        document.getElementsByClassName( "won-page" )[0].scrollIntoView();
    }

    // all users

    // user Data

    function player ( name, idade, total ) {
        return {
            username: name,
            age: idade,
            score: total,
        };
    };

    function getUser () {

        if ( localStorage.getItem( "allPlayers" ) == null ) {
            return [];               // me retorna uma array vazia se nao tem nada no localStorage
        }
        return JSON.parse( localStorage.getItem( "allPlayers" ) );  // retonra o que tem no local storage parse
    }

    function addPlayer () {
        userInputs = player( username, age, score );
        allPlayers.push( userInputs );
        localStorage.setItem( "allPlayers", JSON.stringify( allPlayers ) );
    };