let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
function getHumanChoice() {
    return window.prompt();
}
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
function playRound(humanChoice, computerChoice) {
    switch (computerChoice) {
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    humanChoice = humanChoice.toLowerCase()
    if (computerChoice === humanChoice) {
        console.log("Draw!");
    }
    else if (
    (computerChoice=="rock" && humanChoice === "scissors") ||
    (computerChoice=="scissors" && humanChoice == "paper") ||
    (computerChoice=="paper" && humanChoice== "rock"))
    {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
        computerScore += 1;
    }
    else {
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
        humanScore += 1;
    }

}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore) {
        console.log("You win.")
    }
    else if (humanScore < computerScore) {
        console.log("You win.")
    }
    else {
        console.log("Draw")
    }
}
playGame()
