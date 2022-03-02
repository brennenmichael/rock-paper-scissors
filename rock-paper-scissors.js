const choice = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    computerSelection = choice[computerSelection];
    return computerSelection;
}

function changeText(target, newText) {
    let elem = document.getElementById(target);
    elem.textContent = newText;
}

function addToScore(target) {
    let elem = document.querySelector(target)
    elem.textContent++;
}

document.addEventListener('keyup', e => {
    if (e.key === 'Enter') return game();
})

document.addEventListener('click', (e) => {
    let element = e.target;
    let pick;
    if (element.tagName == "BUTTON") {
        pick = `${element.innerText}`.toLowerCase();
    }
    let computerChoice = computerPlay()
    if (choice.includes(pick)) {
        if (computerChoice === 'rock') return computerRock(pick);
        if (computerChoice === 'paper') return computerPaper(pick);
        if (computerChoice === 'scissors') return computerScissors(pick);
    pick = "undefined" 
    }
}) 

function computerRock(playerChoice) {
    if (playerChoice === 'scissors') {
        changeText('game-text', "Computer chose rock. You lose!");
        addToScore('.computer-counter')
    }
    else if (playerChoice === 'paper') {
        changeText('game-text', "Computer chose rock. You win!")
        addToScore('.player-counter')
    }
    else changeText('game-text', "Computer chose rock. Tie!")
    playerChoice = 'undefined'
    return
}

function computerPaper(playerChoice) {
    if (playerChoice === 'rock') {
        changeText('game-text', "Computer chose paper. You lose!");
        addToScore('.computer-counter')
    }
    else if (playerChoice === 'scissors') {
        changeText('game-text', "Computer chose paper. You win!")
        addToScore('.player-counter')
    }
    else changeText('game-text', "Computer chose paper. Tie!")
    playerChoice = 'undefined'
    return
}

function computerScissors(playerChoice) {
    if (playerChoice === 'paper') {
        changeText('game-text', "Computer chose scissors. You lose!");
        addToScore('.computer-counter')
    }
    else if (playerChoice === 'rock') {
        changeText('game-text', "Computer chose scissors. You win!")
        addToScore('.player-counter')
    }
    else changeText('game-text', "Computer chose scissors. Tie!")
    playerChoice = 'undefined'
    return
}
