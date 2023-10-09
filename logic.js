function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * array.length)];
}

function singleRound(computerChoice, playerChoice) {
  playerChoice.toLowerCase();

  console.log(`Computer plays ${computerChoice}`);
  console.log(`Player plays ${playerChoice}`);

  if (computerChoice == playerChoice) {
    console.log("TIE!");
    return 0;
  }
  if (
    (computerChoice == "rock" && playerChoice == "paper") ||
    (computerChoice == "paper" && playerChoice == "scissors") ||
    (computerChoice == "scissors" && playerChoice == "rock")
  ) {
    console.log("YOU WIN!");
    return 1;
  } else {
    console.log("you lose.");

    return -1;
  }
}

function game() {
  let wins = 0;
  for (let i = 1; i <= 5; i++) {
    let currentRound = 0;
    while (currentRound == 0) {
      let playerChoice = prompt(`Round ${i}:`);
      currentRound = singleRound(getComputerChoice(), playerChoice);
    }
    wins += currentRound;
  }
  if (wins == 0) {
    console.log("TIE OVERALL!");
  }
  if (wins > 0) {
    console.log("YOU WIN OVERALL!");
  }
  if (wins < 0) {
    console.log("YOU LOSE OVERALL!");
  }
}

game();
