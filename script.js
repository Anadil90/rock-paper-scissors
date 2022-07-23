const item = ["rock", "paper", "scissors"] //player item array

let computerSelection = computerPlay() //computer randomly selects object

// player buttons ............................>
const p1Buttons = document.querySelectorAll(".p1Buttons");
const p2Buttons = document.querySelectorAll(".p2Buttons");
// .......................................................>

// UI elements ...................................................>
const player1Display = document.getElementById("player1Display"); //player 1 selection display
const player2Display = document.getElementById("player2Display"); //player 2 selection display
const switchPlayer = document.getElementById("switchPlayer"); //toggle between player 2 and computer
let score1 = document.getElementById("score1"); //player 1 score 
let score2 = document.getElementById("score2"); //player 2 score
// .................................................................>
const selection = ["Player 2", "Computer"] //selection array

function selectPlayer() { //chooses who to play with (player2 or computer)
    
    let count = 0; 
    let comp;
    switchPlayer.addEventListener("click", () => {
        count ++; //increment count 
        for(i = 0; i < 2; i++) {
            if(count < 2) {
                switchPlayer.innerText = selection[count]; //toggle innerText when user clicks button
                
            }
            else{
                count = 0 //reset counter to 0
                switchPlayer.innerText = selection[count]; //toggle innerText when user clicks button
                
            }
        }
        
    })
}
selectPlayer()

function computerPlay () {
    let randomIndex = Math.floor(Math.random() * item.length) //returns a random index of array from 0 to 2
    return item[randomIndex] //random item selection from array
}

let p1Selects; //selection of player 1
let p2Selects; //selection of player 2

function player1Selection() {
    for(let i = 0; i < item.length; i++) {
        p1Buttons[i].addEventListener("click", () => {
        player1Display.value = item[i]
        p1Selects = player1Display.value
        
        if(p1Selects === "rock" && p2Selects === "scissors") {
            console.log("p1 won")
            score1.innerText ++
            
        }

        

        if(p1Selects === "scissors" && p2Selects === "rock") {
            console.log("p2 won")
            score2.innerText ++
        }

        if(p1Selects === "rock" && p2Selects === "paper") {
            console.log("p2 won")
            score1.innerText ++
        }

        if(p1Selects === "scissors" && p2Selects === "paper") {
            console.log("p1 won")
            score1.innerText ++
        }


        })
        
    }

}
player1Selection()

function player2Selection() {
    for(let i = 0; i < item.length; i++) {
        p2Buttons[i].addEventListener("click", () => {
        player2Display.value = item[i]
        p2Selects = player2Display.value //set selection items of player 2

        if(p2Selects === "rock" && p1Selects === "scissors") {
            console.log("p2 won")
            score2.innerText ++
        }

        if(p2Selects === "paper" && p1Selects === "rock") {
            console.log("p2 won")
            score2.innerText ++
        }

        if(p2Selects === "scissors" && p1Selects === "paper") {
            console.log("p2 won")
            score2.innerText ++
        }
    
        })
    }

}
player2Selection()

