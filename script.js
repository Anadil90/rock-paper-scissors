const item = ["rock", "paper", "scissors"]


let computerSelection = computerPlay().toLowerCase() //computer randomly selects object

function computerPlay () {
    let randomNumber  = Math.random() //returns a random number from 0 to 1
    let randomIndex = Math.floor(randomNumber * 3) //returns a random index of array from 0 to 2
    return item[randomIndex] //random item selection from array
}

const playerWin = "You win!";
const computerWin = "Computer wins!";
let roundWinner = "";

function playGame() {
    let playerSelection = prompt("Enter your selection").toLowerCase() //player selects object
    console.log(`Player selected ${playerSelection}`)
    console.log(`Computer has selected ${computerSelection}`)
    if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`Rock beats scissors. ${playerWin}`)
        roundWinner = "player"
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
             player += 1
        }

        if(roundWinner == "computer") {
            computer += 1
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
