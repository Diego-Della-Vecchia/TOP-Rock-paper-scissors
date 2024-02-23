function playAudio(audio) {
    let file = document.querySelector(audio);
    file.play();
}

function computerChoice() {
    
    let randomNumber;
    

    
       randomNumber = Math.floor(Math.random() * 3)+1;

    
    return randomNumber;
}

function playRound(playerChoice, getComputerChoice, playAudio) {

    const playerImg = document.querySelector(".playerChoice");
    const computerImg = document.querySelector(".computerChoice");

    switch (playerChoice) {
        case "rock":
            playerImg.src = "assets/rock.png";
            break;
        case "paper":
            playerImg.src = "assets/paper.png";
            break;
        case "scissors":
            playerImg.src = "assets/scissors.png";
            break;
    }

    let computerChoice = getComputerChoice();

    switch (computerChoice) {
        case 1:
            computerChoice = "rock";
            computerImg.src = "assets/rock.png";
            break;
        case 2:
            computerChoice = "paper";
            computerImg.src = "assets/paper.png";
            break;
        case 3:
            computerChoice = "scissors";
            computerImg.src = "assets/scissors.png";
            break;
    }

    if (playerChoice === computerChoice) {
        playAudio('#draw');
        console.log("It's a draw!");
    }

    else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
        playAudio('#lose');
        console.log("You lose!");
    }

    else {
        playAudio('#win');
        console.log("You win!");
    }

}



