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

 console.log(getHumanChoice());
