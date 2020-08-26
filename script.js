"use strict";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const text = document.getElementById("text");
const playerText = document.getElementById("player");
const computerText = document.getElementById("computer");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const scoresContainer = document.querySelector("#scores");

var numPlayerWins = 0;
var numComputerWins = 0;

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
          numComputerWins++;
          text.textContent = "You lose! Paper beats Rock!";
          break;
        case "scissors":
          numPlayerWins++;
          text.textContent = "You win! Rock beats Scissors!";
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          numPlayerWins++;
          text.textContent = "You win! Paper beats Rock";
          break;
        case "paper":
          text.textContent = "Draw!";
          break;
        case "scissors":
          numComputerWins++;
          text.textContent = "You lose! Scissors beats Paper!";
          break;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          numComputerWins++;
          text.textContent = "You lose! Rock beats Scissors";
          break;
        case "paper":
          numPlayerWins++;
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

  computerScore.textContent = numComputerWins;
  playerScore.textContent = numPlayerWins;

  if (numPlayerWins === 5) {
    alert("You reached 5 points, you win!");
    showResetButton();
  }
  if (numComputerWins === 5) {
    alert("Computer reached 5 points, you lose!");
    showResetButton();
  }
}

function showResetButton() {
  const newButton = document.createElement("button");
  newButton.setAttribute("id", "newButton");
  newButton.innerHTML = "Reset Game";
  newButton.addEventListener("click", resetGame);
  scoresContainer.appendChild(newButton);
}

function resetGame() {
  text.textContent = "";
  numComputerWins = 0;
  numPlayerWins = 0;
  playerText.textContent = "";
  computerText.textContent = "";
  computerScore.textContent = "";
  playerScore.textContent = "";
  const newButton = document.querySelector("#newButton");
  scoresContainer.removeChild(newButton);
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
