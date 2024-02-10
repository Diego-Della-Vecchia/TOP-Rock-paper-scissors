function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;

    if (ComputerChoice === 1) {
        ComputerChoice = "Rock";
    }

    if (ComputerChoice === 2) {
        ComputerChoice = "Paper";
    }

    if (ComputerChoice === 3) {
        ComputerChoice = "Scissors";
    }

    return ComputerChoice;
}

function getUserChoice() {
    
    let choice= prompt("What move would you like to play? Choose between rock, paper and scissors");

    if (choice == null || choice == "" ) {
        return "to cancel"
    }

    else if (choice.toUpperCase() == "ROCK" || choice.toUpperCase() == "Scissors" || choice.toUpperCase() == "Paper") {
        return choice
    }

    else {
        return "an invalid move";
    }

}

function playRound(playerChoice, computerSelection) {
    let winner;
    playerSelection = playerChoice.toUpperCase();

    if (playerSelection === computerSelection.toUpperCase()) {
        winner = "It's a tie";
    }

    else if (playerSelection === "ROCK" && computerSelection === "Paper") {
        winner = "The computer won";
    }
    
    else if (playerSelection === "ROCK" && computerSelection === "Scissors") {
        winner = "You won";
    }
    
    else if (playerSelection === "PAPER" && computerSelection === "Rock") {
        winner = "You won";
    }

    else if (playerSelection === "PAPER" && computerSelection === "Scissors") {
        winner = "The computer won";
    }

    else if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
        winner = "The computer won";
    }

    else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
        winner = "You won";
    }
    else if(playerChoice == "to cancel") {
        winner = "The player didn't choose a move, the computer wins";
    }
    else {
        winner = "The player used an invalid move, the computer won";
    }
    
    console.log("The computer chose " + computerSelection + ".")

    if (winner == "The player used an invalid move, the computer won") {
        console.log(winner)
    }

    else {
        console.log("You chose " + playerChoice)
    }
   
    console.log(winner)
    
    if (winner === "You won") {
        return "player";
    }

    if (winner === "The computer won"|| winner === "The player used an invalid move, the computer won" || winner === "The player didn't choose a move, the computer wins") {
        return "computer";
    }
    
    if (winner == "It's a tie") {
        return "tie";
    }

}


function playGame() {
    console.clear()
    let playerWins = 0;
    let computerWins = 0;
    for(let rounds = 1; rounds <= 5; rounds++) {

        let result = playRound(getUserChoice(),getComputerChoice());

        console.log(result)
        if (result == "computer") {
            computerWins += 1;
        }

        if (result == "player") {
            playerWins += 1;
        }

        if (result == "tie") {
            //notthing happens
        }
        if(rounds == 1) {
            console.log("So far, " + rounds + " round has been played")
        }
        else {
            console.log("So far, " + rounds + " rounds have been played")
        }
        console.log("The player has won " + playerWins + " times, the computer has won " + computerWins + " times.")

        if (playerWins == 3) {
            console.log("The player has won 3 rounds and has therefore won the game")
            break;
        }
        else if (computerWins == 3) {
            console.log("The computer has won 3 rounds and has therefore won the game")
            break;
        }
        
       
    }
}

playGame()

