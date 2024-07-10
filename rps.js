let score = {player: 0, computer: 0};

updateScore();

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


let round = 1;

let winResult = document.querySelector('.js-result');
let description = document.querySelector('.js-desc');



function playRound(humanChoice,computerChoice) {
    let result = '';
    let desc = '';
    if (humanChoice.toLowerCase() === "rock" && computerChoice == "scissors") {
        score.player += 1;
        result = "You win!!";
        desc = "rock beats scissors";
        
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice == "rock") {
        result = "Draw ";
        desc = "both picked rock";
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice == "rock") {
        score.player += 1;
        result = "You win!!";
        desc = "paper smothers rock";
        
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice == "paper") {
        result = "Draw";
        desc = "both picked paper";
    }
    else if (humanChoice.toLowerCase() === "scissors" && computerChoice == "paper") {
        score.player += 1;
        result = "You win!!";
        desc = "scissors cuts paper";

    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice == "scissors") {
        result = "Draw";
        desc = "both pick scissors";
    }
    else {
        score.computer += 1;
        result = 'You lose';
        desc = `you picked ${humanChoice} and comp picked ${computerChoice}`
        
    }
    
    updateScore();

    winResult.textContent = result;
    description.textContent = desc;

    document.querySelector('.player-move').innerHTML = `<img src="images/${humanChoice}-emoji.png" class="moves">`;
    document.querySelector('.comp-move').innerHTML= `<img src="images/${computerChoice}-emoji.png" class="moves">`;
}

function playGame() {
        
    document.querySelector('.js-rock-btn').addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound('rock',computerChoice);
    });
    
    document.querySelector('.js-paper-btn').addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound('paper',computerChoice);
    });
    
    document.querySelector('.js-scissor-btn').addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound('scissors',computerChoice);
    });
    
}

function updateScore() {
    document.querySelector('.js-player-score').innerHTML = score.player;
    document.querySelector('.js-comp-score').innerHTML = score.computer;
}

playGame()