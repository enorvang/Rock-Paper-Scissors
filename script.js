"use strict";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const text = document.getElementById("text");
const playerText = document.getElementById("player");
const computerText = document.getElementById("computer");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const resetButton = document.querySelector("#resetButton");

var numPlayerWins = 0;
var numComputerWins = 0;
computerScore.textContent = numComputerWins;
playerScore.textContent = numPlayerWins;

function computerPlay() {
  const alternativer = ["rock", "paper", "scissors"];
  let valg = Math.floor(Math.random() * alternativer.length);
  return alternativer[valg];
}

function playGame(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const computerSelection = computerPlay().toLowerCase();

  playerText.textContent = `selected ${playerSelection}`
  computerText.textContent = `selected ${computerSelection}`

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          text.textContent = "Draw!";
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
  }
  if (numComputerWins === 5) {
    alert("Computer reached 5 points, you lose!");
  }
}

function resetGame() {
  text.textContent = "";
  numComputerWins = 0;
  numPlayerWins = 0;
  playerText.textContent = "";
  computerText.textContent = "";
  computerScore.textContent = numComputerWins;
  playerScore.textContent = numPlayerWins;
}

rock.addEventListener("click", () => playGame("rock"), true);

paper.addEventListener("click", () => playGame("paper"), true);

scissors.addEventListener("click", () => playGame("scissors"), true);

resetButton.addEventListener("click", () => resetGame(), true)