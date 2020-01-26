let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let text = document.getElementById("text");
let playerText = document.getElementById("player");
let computerText = document.getElementById("computer");

function computerPlay(){
    const alternativer = ['rock', 'paper', 'scissors'];
    let valg = Math.floor(Math.random() * alternativer.length);
    return alternativer[valg];
}

function playGame(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    playerText.innerHTML = "You: " + playerSelection;
    computerText.innerHTML = "Computer: " + computerSelection;

    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    text.innerHTML = 'Draw';
                    break;
                case 'paper':
                    text.innerHtml =  'You lose! Paper beats Rock!';
                    break;
                case 'scissors':
                    text.innerHTML = 'You win! Rock beats Scissors!';
                    break;
                }
            break;
        case 'paper':
            switch(computerSelection){
                case 'rock':
                    text.innerHTML = 'You win! Paper beats Rock';
                    break;
                case 'paper':
                    text.innerHTML = 'Draw!';
                    break;
                case 'scissors':
                    text.innerHTML = 'You lose! Scissors beats Paper!';
                    break;
            }
            break;
        case 'scissors':
            switch(computerSelection){
                case 'rock':
                    text.innerHTML = 'You lose! Rock beats Scissors';
                    break;
                case 'paper':
                    text.innerHTML = 'You win! Scissors beats Paper!';
                    break;
                case 'scissors':
                    text.innerHTML = 'Draw!';
                    break;
            }
            break;
        default:
                text.innerHTML = 'ERROR! Player selection illegal. Only \'rock\', \'paper\' or \'scissors\' is allowed.';
    }
}

rock.addEventListener('click', function(){
    playGame("rock");
})

paper.addEventListener('click', function() {
    playGame("paper");
})

scissors.addEventListener('click', function(){
    playGame("scissors");
})