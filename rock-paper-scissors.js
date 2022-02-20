const choice = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    computerSelection = choice[computerSelection];
    return computerSelection;
    // console.log(computerSelection);
}

function gameRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper, scissors...").trim().toLowerCase();
    console.log(playerSelection, computerSelection);
    if (!choice.includes(playerSelection)) {
        alert("Invalid selection.")
    }
    if (choice.indexOf(computerSelection) === choice.indexOf(playerSelection)) {
        alert("It's a tie!")
    } else if (choice.indexOf(computerSelection) - choice.indexOf(playerSelection) == 1 || choice.indexOf(computerSelection) - choice.indexOf(playerSelection) == -2) {
        alert(`You chose ${playerSelection}, but the computer chose ${computerSelection}. Sorry!`)
    } else {
        alert(`The computer chose ${computerSelection}, and you chose ${playerSelection}. Good job!`)
    }
}

gameRound();