let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let text = document.getElementById("text");
let playerText = document.getElementById("player");
let computerText = document.getElementById("computer");

function computerPlay() {
  const alternativer = ["rock", "paper", "scissors"];
  let valg = Math.floor(Math.random() * alternativer.length);
  return alternativer[valg];
}

function playGame(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = computerPlay().toLowerCase();

  playerText.textContent = "You chose: " + playerSelection;
  computerText.textContent = "Computer chose: " + computerSelection;

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          text.textContent = "Draw";
          break;
        case "paper":
          text.textContent = "You lose! Paper beats Rock!";
          break;
        case "scissors":
          text.textContent = "You win! Rock beats Scissors!";
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          text.textContent = "You win! Paper beats Rock";
          break;
        case "paper":
          text.textContent = "Draw!";
          break;
        case "scissors":
          text.textContent = "You lose! Scissors beats Paper!";
          break;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          text.textContent = "You lose! Rock beats Scissors";
          break;
        case "paper":
          text.textContent = "You win! Scissors beats Paper!";
          break;
        case "scissors":
          text.textContent = "Draw!";
          break;
      }
      break;
    default:
      text.textContent =
        "ERROR! Player selection illegal. Only 'rock', 'paper' or 'scissors' is allowed.";
  }
}

rock.addEventListener("click", function () {
  playGame("rock");
});

paper.addEventListener("click", function () {
  playGame("paper");
});

scissors.addEventListener("click", function () {
  playGame("scissors");
});
