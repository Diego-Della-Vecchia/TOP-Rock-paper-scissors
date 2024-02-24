function playAudio(audio) {
    let file = document.querySelector(audio);
    file.currentTime = 0;
    file.play();
}

function computerChoice() {
    
    let randomNumber;
    

    
       randomNumber = Math.floor(Math.random() * 3)+1;

    
    return randomNumber;
}


let rounds = 0;

let playerScore = 0;


let computerScore = 0;

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

    const boardRounds = document.querySelector(".currentRound");
    

    let boardPlayerScore = document.querySelector(".currentPlayerWins");


    let boardComputerScore = document.querySelector(".currentComputerWins");

    if (playerChoice === computerChoice) {
        playAudio('#draw');
       
        rounds += 1;
        boardRounds.innerText = rounds;
    }

    else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock")) {
        playAudio('#lose');
        rounds += 1;

        boardRounds.innerText = rounds;

        computerScore += 1;
        boardComputerScore.innerText = computerScore;



    }

    else {
        playAudio('#win');
        rounds +=1;

        boardRounds.innerText = rounds;

        playerScore += 1;
        boardPlayerScore.innerText = playerScore;
    }

    const buttons = document.querySelectorAll("button");

    const buttonsParent = document.querySelector(".buttons");

    const winner = document.createElement("h1");

    const playRound = document.querySelector(".playRound");

    const play = document.querySelector(".play");

    if (playerScore === 5 || computerScore === 5) {

        if (playerScore === 5) winner.innerText = "The player wins";
        else winner.innerText = "The computer wins";

        winner.classList.add("title")

        winner.setAttribute("id", "subtitle");

        buttonsParent.appendChild(winner);

        buttons.forEach(button => {
            buttonsParent.removeChild(button);
        });

        play.removeChild(playRound);

        console.log(playRound)

    }
}
