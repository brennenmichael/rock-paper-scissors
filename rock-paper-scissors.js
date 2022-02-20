const choice = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    computerSelection = choice[computerSelection];
    console.log(computerSelection);
}

computerPlay();