const choice = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    computerSelection = choice[computerSelection];
    return computerSelection;
}

function isInArray(input, array) {
    if (!array.includes(input)) {
        return false;
    } return true;
}




function playerResult() {
    selection = playerPick();
    console.log(`Selection is ${selection}`)
}

function roundResult(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPick();
    if (choice.indexOf(computerSelection) === choice.indexOf(playerSelection)) {
        changeText('game-text', "It's a tie!");
        computerScore = 0;
        playerScore = 0;
    } else if (choice.indexOf(computerSelection) - choice.indexOf(playerSelection) == 1 || choice.indexOf(computerSelection) - choice.indexOf(playerSelection) == -2) {
        changeText('game-text', `You chose ${playerSelection}, but the computer chose ${computerSelection}. Sorry!`);
        computerScore = 1;
        playerScore = 0;
    } else {
        changeText('game-text', `The computer chose ${computerSelection}, and you chose ${playerSelection}. Good job!`);
        computerScore = 0;
        playerScore = 1;
    }
    return [computerScore, playerScore];
}


async function gameRound() { //previously (playerSelection, computerSelection)
    changeText('game-text', "Rock, paper, scissors...");
    computerSelection = computerPlay();
    playerSelection = await playerPick();
    playerSelection = new Promise((resolve, reject) => {
        resolve(playerPick());
    })
    Promise.all([computerSelection, playerSelection]).then((selections) => {
        console.log(selections);
    })
    // let selections;
    // selections = [computerSelection, playerSelection]
    // while (typeof playerSelection === 'undefined') {
    //     playerSelection = playerPick();
    // }
    // if (typeof playerSelection !== 'undefined') {
    //     console.log(selections);
    //     return selections;
    // }
    // console.log(selections);
}

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
//   });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function changeText(target, newText) {
    let elem = document.getElementById(target);
    elem.textContent = newText;
    //await sleep(2000)
}


async function game() {
    changeText('game-text', "Rock Paper Scissors! Best out of five wins! \n(Enter q at any time to quit.)");
    let playerScore = 0;
    let computerScore = 0;
    for (let rounds = 1; rounds <= 5; rounds++) {
        await sleep (2000);
        changeText('game-text', `Round ${rounds}!`);
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

document.addEventListener('click', (e) => {
    let element = e.target;
    let pick;
    if (element.tagName == "BUTTON") {
        pick = `${element.innerText}`.toLowerCase();
    }
    console.log(pick)
    let computerChoice = computerPlay()
    console.log(`computer choice is ${computerChoice}`)
    if (choice.includes(pick)) {
        if (computerChoice === 'rock') return computerRock(pick);
        if (computerChoice === 'paper') return computerPaper(pick);
        if (computerChoice === 'scissors') return computerScissors(pick);
    pick = "undefined" 
    }
}) 

function computerRock(playerChoice) {
    if (playerChoice === 'scissors') alert("You lose!");
    else if (playerChoice === 'paper') alert("You win!")
    else alert("Tie!")
    playerChoice = 'undefined'
    computerPlay()
    return
}

function computerPaper(playerChoice) {
    if (playerChoice === 'rock') alert("You lose!");
    else if (playerChoice === 'scissors') alert("You win!")
    else alert("Tie!")
    playerChoice = 'undefined'
    computerPlay()
    return
}

function computerScissors(playerChoice) {
    if (playerChoice === 'paper') alert("You lose!");
    else if (playerChoice === 'rock') alert("You win!")
    else alert("Tie!")
    playerChoice = 'undefined'
    computerPlay()
    return
}
