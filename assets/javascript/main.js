// start game button
const startGameBtn = document.getElementById('startGameBtn');
startGameBtn.addEventListener('click', () => {
    createPlayer();
    displayScores();
    console.log('hi)');
});

// Using LocalStorage to save players data//
var usernameInput = document.getElementById('playerName');
// check localStorage for players data
var scoreboard = document.querySelectorAll('.scoreboard');
console.log(scoreboard);

function displayScores() {
    var players = JSON.parse(localStorage.getItem('players'));
    console.log(players);
    console.log(players.username);
    var elSpan = document.createElement('p');
    elSpan.innerHTML = players.username;
    for(let i=0; i<scoreboard.length; i++){
        scoreboard.appendChild(elSpan);
     
       }
}

function createPlayer() {
    // get values from input
    var username = usernameInput.value.trim();
    if (!username) {
        return;
    }
    // save it in local localStorage
    var players = {
        username: username,
        score: score
    };

    localStorage.setItem('players', JSON.stringify(players));
   

const fruits = [
    'fig',
    'apple',
    'banana',
    'coconut',
    'pineapple',
    'strawberry',
    'pomegranate'
];

const keyboard = document.querySelector('#injectLetters');

let alphabet;
let letters;
let letterBtn;
let lettersClicked = [];

// FOR LOOP TO GENERATE THE ALPHABET FROM "A" TO "Z"
for (i = 9, alphabet = ''; ++i < 36; ) {
    alphabet += i.toString(36);
}

letters = new Array(...alphabet);

// FOR LOOP TO CREATE BUTTONS FOR EACH LETTER AND APPEND TO DIV PARENT AND ADD INNER HTML

for (i in letters /* i = 0; i < letters.length; i++ */) {
    letterBtn = document.createElement('button');
    letterBtn.setAttribute('id', letters[i]);
    letterBtn.setAttribute('value', letters[i]);
    letterBtn.setAttribute('class', 'btn-letters');
    letterBtn.innerHTML = letters[i];
    keyboard.appendChild(letterBtn);
}

let btnLetters = document.querySelectorAll('.btn-letters');
const usedLetters = document.querySelector('.clicked-letters');

var currentWord = [];
// Selecting random word //
var answer = fruits[Math.floor(Math.random() * fruits.length)];
// Underscores for the word
for (i = 0; i < answer.length; i++) {
    currentWord.push('_');
}
document.getElementById('underLine').innerHTML = currentWord.join(' ');

// CLICKED LETTERS NO KEYBOARD DELETED FROM KEYBOARD
btnLetters.forEach(element => {
    var btnContent = element.innerHTML;
    element.addEventListener('click', () => {
        keyboard.removeChild(element);
        usedLetters.appendChild(element);
        checkIfPresent(element.value);
    });
});

function checkIfPresent(letter) {
    const aux = answer.split('');

    if (currentWord.join('') == answer) {
        youWin();
    }
    if (!aux.includes(letter)) changeLifeGame();

    while (aux.includes(letter)) {
        var index = aux.indexOf(letter);
        delete aux[index];
        currentWord[index] = letter;
    }

    if (currentWord.join('') == answer) {
        youWin();
    }
    document.getElementById('underLine').innerHTML = currentWord.join(' ');
}

// Display parts
var countLife = 6;
var score = 60;

let head = document.getElementById('head');
let body = document.getElementById('body');
let armL = document.getElementById('armL');
let armR = document.getElementById('armR');
let legL = document.getElementById('legL');
let legR = document.getElementById('legR');

function changeLifeGame() {
    countLife--;
    score = score - 10;
    switch (countLife) {
        case 5:
            head.classList.remove('figure-part');
            break;

        case 4:
            body.classList.remove('figure-part');
            break;

        case 3:
            armL.classList.remove('figure-part');
            break;

        case 2:
            armR.classList.remove('figure-part');
            break;

        case 1:
            legL.classList.remove('figure-part');
            break;

        case 0:
            legR.classList.remove('figure-part');
            youLost();
            break;
    }
}

function youWin() {
    document.getElementsByClassName('won-page')[0].scrollIntoView();
}

function youLost() {
    document.getElementsByClassName('lost-page')[0].scrollIntoView();
    countLife = 0;
}

var playAgainBtn = document.querySelectorAll('.playAgain');
playAgainBtn.forEach(element => {
    element.addEventListener('click', () => {
        document.getElementsByClassName('first-page')[0].scrollIntoView();
        hideHangman();
    });
});

function hideHangman() {
    head.classList.add('figure-part');
    body.classList.add('figure-part');
    armL.classList.add('figure-part');
    armR.classList.add('figure-part');
    legL.classList.add('figure-part');
    legR.classList.add('figure-part');
    location.reload();
}
