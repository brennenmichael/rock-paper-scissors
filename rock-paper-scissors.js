const choice = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    computerSelection = choice[computerSelection];
    return computerSelection;
}

function checkInput(input, array) {
    if (!array.includes(input)) {
        return false;
    } return true;
}

function gameRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper, scissors...").trim().toLowerCase();
    console.log(playerSelection, computerSelection);
    if (playerSelection === "q".trimEnd().toLowerCase())
        return;
    while (!checkInput(playerSelection, choice)){
        playerSelection = prompt("Invalid input. Please try again.");
    }
    if (choice.indexOf(computerSelection) === choice.indexOf(playerSelection)) {
        alert("It's a tie!");
        computerScore = 0;
        playerScore = 0;
    } else if (choice.indexOf(computerSelection) - choice.indexOf(playerSelection) == 1 || choice.indexOf(computerSelection) - choice.indexOf(playerSelection) == -2) {
        alert(`You chose ${playerSelection}, but the computer chose ${computerSelection}. Sorry!`);
        computerScore = 1;
        playerScore = 0;
    } else {
        alert(`The computer chose ${computerSelection}, and you chose ${playerSelection}. Good job!`);
        computerScore = 0;
        playerScore = 1;
    }
    return [computerScore, playerScore];
}

function changeText(target, newtext) {
    let elem = document.getElementById(target);
    elem.textContent = newtext;
}

function game() {
    changeText('game-text', "Rock Paper Scissors! Best out of five wins! \n(Enter q at any time to quit.)")
    let playerScore = 0;
    let computerScore = 0;
    for (let rounds = 0; rounds < 5; rounds++) {
        changeText('game-text', `Round ${rounds + 1}!`)
        let scores = gameRound();
        if (scores === undefined) {
            return;
        }
        computerScore += scores[0];
        playerScore += scores[1];
        //console.log(`player: ${playerScore}, comp: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        changeText('game-text', 'You win!');
    }
    else if (playerScore < computerScore) {
        changeText('game-text', 'The computer outsmarted you... this time.');
    }
    else {
        while (playerScore == computerScore) {
            changeText('game-text', 'Tiebreaker!');
            let scores = gameRound();
            if (scores[0] > scores[1]) {
                changeText('game-text', 'Well fought, but the computer won.');
                break;
            } else if (scores [1] > scores [0]) {
                changeText('game-text', 'You emerge victorious!');
                break;
            } else {
                changeText('game-text', 'Another tie! Here we go again!');
            } continue;
        }
    }
    changeText('game-text', "That's all! Thanks for playing!");
}

document.addEventListener('keyup', e => {
if (e.key === 'Enter') return game();
})

