function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    }else if (num === 1) {
        return "paper";
    }else if (num === 2) {
        return "scissors";
    }
}

 function getHumanChoice() {
    let user = prompt(`Round ${round} Enter choice: `);

    return user;
}


let humanScore = 0;
let computerScore = 0;
let round = 1;

function playRound(humanChoice,computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice == "scissors") {
        alert("You win!! rock beats scissors");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice == "rock") {
        alert("Draw both picked rock");
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice == "rock") {
        alert("You win!! paper smothers rock");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice == "paper") {
        alert("Draw both picked paper");
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice == "paper") {
        alert("You win!! scissors cuts paper");
        humanScore++;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice == "scissors") {
        alert("Draw both pick scissors")
    }
    else {
        alert(`You lose, you picked ${humanChoice} and comp picked ${computerChoice}`);
        computerScore++;
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = getHumanChoice();
        const compChoice = getComputerChoice();

        playRound(playerChoice,compChoice);
        round++;
    }
    humanScore > computerScore ? alert(`Player won the game!, Player points: ${humanScore} Computer points: ${computerScore}`) : alert(`Computer won the game!🥳🥳, Computer points: ${computerScore} Player points: ${humanScore}`);
}


playGame()