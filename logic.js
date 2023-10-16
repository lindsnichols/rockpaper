const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const buttonArea = document.querySelector(".buttons");
const textArea = document.querySelector(".info");
const scoreArea = document.querySelector(".score");
const bigscoreArea = document.querySelector(".bigscore");

const WIN = 1;
const TIE = 0;
const LOSE = -1;

let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function singleRound(computerChoice, playerChoice) {
  console.log(`Computer plays ${computerChoice}`);
  console.log(`Player plays ${playerChoice}`);

  if (computerChoice == playerChoice) {
    textArea.textContent = "TIE!";
    return TIE;
  }
  if (
    (computerChoice == "rock" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "scissors") ||
    (computerChoice == "scissors" && playerChoice == "rock")
  ) {
    textArea.textContent = "YOU WIN!";
    return WIN;
  } else {
    textArea.textContent = "YOU LOSE!";
    return LOSE;
  }
}

buttonArea.addEventListener("click", (event) => {
  bigscoreArea.textContent = "";
  let choice = event.target.id;
  let outcome = singleRound(getComputerChoice(), choice);
  updateScore(outcome);
});

function updateScore(outcome) {
  if (outcome == WIN) {
    playerWins += 1;
  }
  if (outcome == LOSE) {
    computerWins += 1;
  }

  scoreArea.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
  if (playerWins == 5) {
    bigscoreArea.textContent = "YOU WIN OVERALL";
    restartGame();
  }
  if (computerWins == 5) {
    bigscoreArea.textContent = "YOU LOSE OVERALL";
    restartGame();
  }
}

function restartGame() {
  playerWins = 0;
  computerWins = 0;
}
