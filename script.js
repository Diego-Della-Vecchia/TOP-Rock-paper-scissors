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
    
    let choice = prompt("What move would you like to play? Choose between rock, paper and scissors");

    return choice;
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
    
    else if (playerSelection == ""){
        winner = "The player didn't make any move, the computer won";
    }

    
    else {
        winner = "The player made an invalid move, the computer won";
    }
    
    console.log("The computer chose " + computerSelection + ".")

    if (winner == "The player didn't make any move, the computer won"){
        console.log("The player didn't make any move")
    }
    else if (winner == "The player made an invalid move, the computer won") {
        console.log("You made an invalid move")
    }

    else {
        console.log("You chose " + playerChoice)
    }
   
    console.log(winner)
    
    if (winner === "You won") {
        return "player";
    }
  
    else if (winner == "It's a tie") {
        return "tie";
    }

    else {
        return "computer";

}

}

function playGame() {
    
    let playerWins = 0;
    let computerWins = 0;
    for(let rounds = 1; rounds <= 5; rounds++) {

        let result = playRound(getUserChoice(),getComputerChoice());

        console.log(result)
        
        switch (result) {
            case "computer":
                computerWins += 1;
                break;
            case "player":
                playerWins += 1;
                break;
            case "tie":
                // nothing happens
                break;
        }
        
        switch (rounds) {
            case 1:
                console.log("So far, " + rounds + " round has been played");
                break;
            default:
                console.log("So far, " + rounds + " rounds have been played");
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
        
        if (rounds == 5 && computerWins > playerWins) {
            console.log("The computer has won more rounds and therefore wins the game")
        }
        
        else if (rounds == 5 && computerWins < playerWins) {
            console.log("The playeer has won more rounds and therefore wins the game")
        }
    }

}

playGame()

