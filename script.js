let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const container = document.querySelector(".container");
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
const para = document.createElement("p");
const score = document.createElement("p");
const game = document.createElement("h2")
document.body.insertBefore(para, container);
document.body.insertBefore(score, para);
para.style.color = "red";
score.style.border = "5px solid black";
score.style.width = "250px";
score.style.borderRadius = "5px";
score.style.justifyContent = "center";
game.style.height = "40px"
game.style.width = "250px";
game.style.border = "10px solid red";
game.style.padding = "20px";
game.style.justifyContent = "center";

function playRound(humanChoice, computerChoice) {
  game.textContent = "";
  game.remove();
  para.remove();
  score.remove();
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  if (computerChoice === humanChoice) {
    document.body.insertBefore(para, container);
    document.body.insertBefore(score, para);
    para.textContent = "Draw!";
    score.textContent = `Computer Score: ${computerScore} Human Score: ${humanScore}`;
  } else if (
    (computerChoice == "rock" && humanChoice === "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")
  ) {
    document.body.insertBefore(para, container);
    document.body.insertBefore(score, para);
    para.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    computerScore += 1;
    score.textContent = `Computer Score: ${computerScore} Human Score: ${humanScore}`;
  } else {
    document.body.insertBefore(para, container);
    document.body.insertBefore(score, para);
    para.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
    humanScore += 1;
    score.textContent = `Computer Score: ${computerScore} Human Score: ${humanScore}`;
  }
  if (humanScore === 5){
    game.textContent = "You win! Game over."
    document.body.appendChild(game)
    humanScore = 0;
    computerScore = 0;
  }
  else if (computerScore === 5){
    game.textContent = "You lose! Game over."
    document.body.appendChild(game)
    humanScore = 0;
    computerScore = 0;
  }
}

rock.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "blue";
  setTimeout(() => {
    e.target.style.backgroundColor = "blueviolet";
  }, 100);
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "blue";
  setTimeout(() => {
    e.target.style.backgroundColor = "blueviolet";
  }, 100);
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "blue";
  setTimeout(() => {
    e.target.style.backgroundColor = "blueviolet";
  }, 100);
  playRound("scissors", getComputerChoice());
});

/*
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
*/
