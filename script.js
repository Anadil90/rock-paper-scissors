const item = ["rock", "paper", "scissors"] //player item array

// UI elements ...................................................>
const p1Buttons = document.querySelectorAll(".p1Buttons");
const player1Display = document.getElementById("player1Display"); //player 1 selection display
const player2Display = document.getElementById("player2Display"); //player 2 selection display
const result = document.getElementById("result"); //game result
let score1 = document.getElementById("score1"); //player 1 score 
let score2 = document.getElementById("score2"); //player 2 score
// .................................................................>

function computerPlay () {
    let randomIndex = Math.floor(Math.random() * item.length) //returns a random index of array from 0 to 2
    return item[randomIndex] //random item selection from array
}

function player1Selection() {
    for(let i = 0; i < item.length; i++) {
        p1Buttons[i].addEventListener("click", (e) => {
        player1Display.textContent = item[i] //update player 1 display
        p1Selects = player1Display.textContent 
        player2Display.textContent = computerPlay() //update computer display
        // player logic
        switch(p1Selects + computerPlay()) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                result.innerText = "Player won!"
                score1.innerText++
               break
            case "paperscissors":
            case "scissorsrock":
            case "rockpaper":
                result.innerText = "Computer won"
                score2.innerText++
                break
            case "paperpaper":
            case "scissorsscissors":
            case "rockrock":
                result.innerText = "Draw!"
                break
        }
        }) 
    }

}
let score = 0

function game() {
    player1Selection()
    
}

game() //run the main game function


