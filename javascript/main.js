function test (){
    const playerName = document.getElementById("username")
    localStorage.setItem("playerName",playerName.value)
    console.log(localStorage.getItem("playerName"))
}



function hangman () {
    this.fruits = ["fig", "apple", "banana","coconut", "pineapple", "strawberry"]
    this.selectedWord = "";
    this.lettersInWord = [];
    this.wrongGuess = [];
    this.selectedWord = this.getWord();
}

 // Choosing random word and assign it to selectedWord //
hangman.prototype.getWord = function () {
    var random = Math.floor(Math.random() * this.fruits.length);
    this.selectedWord = parseInt("fruits")
    //console.log(this.selectedWord)
    return this.fruits[random];
};

 // Display btn selected 
var btns= document.querySelectorAll(".btn") //poner btn en pantalla
for (const btn of btns) {
    var text=btn.innerText
    if(text = btn.innerText){ 
        btn.addEventListener("click", displayletter)
    }


    function displayLetter(even){ // pasan todos los botones
        var letterSaved = result.value; //ver la letra actual
        var letterDisplay = even.srcElement.firstChild.data; // grab letter selected
        var classBtn = even.srcElement.classBtn // grabs the class of the btn
    }





// // Game counters //
//     var winCounter  = 0;
//     var lossCounter = 0;