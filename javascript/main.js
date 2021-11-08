function test (){
    const playerName = document.getElementById("username")
    localStorage.setItem("playerName",playerName.value)
    console.log(localStorage.getItem("playerName"))
}


const WORD_ARRAY = []