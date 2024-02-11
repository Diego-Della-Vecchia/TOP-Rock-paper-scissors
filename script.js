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
    
    let choice = prompt("What move would you like to play? Choose between rock, paper and scissors. If you don'tt make a move, you will make a random move, if you cancel, you will skip thee round and loose.");

    if (choice == "") {
        choice = getComputerChoice();
    }
    else if (choice == null){
        choice="null";
    }

    return choice;
    
}

function playRound(playerChoice, computerSelection) {
    
    let winner;
if (playerChoice = "null") {
    return "cancel"
}
    else{    
     if (playerChoice.toUpperCase() === computerSelection.toUpperCase()) {
        winner = "It's a tie";
    }

    else if (playerChoice.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        winner = "The computer won";
    }
    
    else if (playerChoice.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        winner = "You won";
    }
    
    else if (playerChoice.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        winner = "You won";
    }

    else if (playerChoice.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        winner = "The computer won";
    }

    else if (playerChoice.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        winner = "The computer won";
    }

    else if (playerChoice.toUpperCase()=== "SCISSORS" && computerSelection === "Paper") {
        winner = "You won";
    }

    else if(playerChoice == "null") {

    }
    
    
    else {
        winner = "The player made an invalid move, the computer won";
    }

   
    
    if (winner == "The player made an invalid move, the computer won") {
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
}

function playGame() {
    
    let playerWins = 0;
    let computerWins = 0;
    for(let rounds = 1; rounds <= 5; rounds++) {

        let result = playRound(getUserChoice(),getComputerChoice());
        
        switch (result) {
            case "cancel":
                computerWins += 1;
                break;
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

        if (result == "cancel"){
            
        }
        
        else {
        switch (rounds) {
            case 1:
                console.log("So far, " + rounds + " round has been played");
                break;
            default:
                console.log("So far, " + rounds + " rounds have been played");
        }
    
        
        console.log("The player has won " + playerWins + " times, the computer has won " + computerWins + " times.")
        }
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

