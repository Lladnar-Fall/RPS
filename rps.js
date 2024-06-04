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
    let user = prompt("Enter choice: ");

    return user;
}


const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice,computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice == "scissors") {
        return alert("You win!! rock beats scissors");
        ++humanScore
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice == "rock") {
        return alert("Draw both picked rock");
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice == "rock") {
        return alert("You win!! paper smothers rock");
        ++humanScore
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice == "paper") {
        return alert("Draw both picked paper");
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice == "paper") {
        return alert("You win!! scissors cuts paper");
        ++humanScore;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice == "scissors") {
        return alert("Draw both pick scissors")
    }
    else {
        return (`You lose, you picked ${humanChoice} and comp picked ${computerChoice}`);
        ++humanScore;
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = getHumanChoice();
        const compChoice = getComputerChoice();

        playRound(playerChoice,compChoice);
    }
    humanScore > computerScore ? alert(`Player won the game!🥳🥳, Player points: ${humanScore} Computer points: ${computerScore}`) : alert(`Computer won the game!🥳🥳, Computer points: ${computerScore} Player points: ${humanScore}`);
}

