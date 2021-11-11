// all users

let allPlayers;
let username = document.getElementById( 'userName' ).value;
let age = document.getElementById( 'age' ).value;
let score = document.getElementById( 'score' ).value;

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
    return JSON.parse( localStorage.getItem( "allPlayers" ) );  // retonra o que tem no local storage parseado
}

function addPlayer () {
    userInputs = player( username, age, score );
    allPlayers.push( userInputs );
    localStorage.setItem( "allPlayers", JSON.stringify( allPlayers ) );
}

window.load( function () {
    allPlayers = getUser();
}
);