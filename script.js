const item = ["rock", "paper", "scissors"] //player item array

let computerSelection = computerPlay() //computer randomly selects object

// DOM elements 
const player1display = document.getElementById("player1Display"); //player 1 selection display
const player2Display = document.getElementById("player2Display"); //player 2 selection display
const buttons = document.getElementsByTagName("button"); // div containing player buttons
const switchPlayer = document.getElementById("switchPlayer") //toggle between player 2 and computer
const secondPlayer = document.querySelectorAll(".playerName")[1]


function p1Select(item) {
    player1display.innerText = item
}

function p2Select(item) {
    player2Display.innerText = item
}

function computerPlay () {
    let randomIndex = Math.random(Math.floor() * item.length) //returns a random index of array from 0 to 2
    return item[randomIndex] //random item selection from array
}

function selectPlayer() {
    let player2 = false;
    let x = false;
    let switchCounter = ["Player 1", "Computer"]
        let counter = []
        let count = 0;
        switchPlayer.addEventListener("click", () => {
            
            count ++; //increment count 
            for(i = 0; i < 2; i++) {
                if(count < 2) {
                secondPlayer.innerText = switchCounter[count] //toggle innerText when user clicks button
                
                }
                else{
                    
                    count = 0
                    secondPlayer.innerText = switchCounter[count] //toggle innerText when user clicks button
                }
            }
        
        })
    }
    
selectPlayer()

const playerWin = "You win!";
const computerWin = "Computer wins!";
let roundWinner = "";

function playGame(playerSelection, computerSelection) {
    
    if(playerSelection === "rock" && computerSelection === "scissors") {
        displayValue = "rock"
        alert("yoiu won")
    }

    else if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log(`Computer wins ${computerWin}`)
        roundWinner = "computer"
    }

    if(playerSelection === "paper" && computerSelection === "rock") {
        
        console.log(`Paper covers rock. ${playerWin}`)
        roundWinner = "player"
    }

    else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log(`${computerWin}`)
        roundWinner = "computer"
    }

    if(playerSelection === "scissors" && computerSelection === "paper") {
        
        console.log(`You win! Scissors cut paper ${playerWin}`)
        roundWinner = "player"
    }

    else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("Computer wins")
        roundWinner = "computer"
        
    }
    
    else if (computerSelection === playerSelection){
        console.log("Its a tie!")
        
    }
   
}

let player = 0;
let computer = 0;

function playRound () {
    for(let i = 0; i < 5; i++) {

        playGame()

        if(roundWinner == "player") {
             player ++
        }

        if(roundWinner == "computer") {
            computer ++
        }
        
    }
    
    if(player > computer) {
        console.log("The player beat the computer!")
        console.log(`Player score is ${player} Computer score is ${computer}`)
    }
    else {
        console.log("The computer beat the player!")
        console.log(`Player score is ${player} Computer score is ${computer}`)
    }  
    
}

playRound()
