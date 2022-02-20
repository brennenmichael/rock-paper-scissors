const choice = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    computerSelection = choice[computerSelection];
    return computerSelection;
}

function gameRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper, scissors...").trim().toLowerCase();
    console.log(playerSelection, computerSelection);
    if (playerSelection === "q".trimEnd().toLowerCase())
        return;
    if (!choice.includes(playerSelection)) {
        alert("Invalid selection.")
    }
    if (choice.indexOf(computerSelection) === choice.indexOf(playerSelection)) {
        alert("It's a tie!")
        computerScore = 0;
        playerScore = 0;
    } else if (choice.indexOf(computerSelection) - choice.indexOf(playerSelection) == 1 || choice.indexOf(computerSelection) - choice.indexOf(playerSelection) == -2) {
        alert(`You chose ${playerSelection}, but the computer chose ${computerSelection}. Sorry!`)
        computerScore = 1;
        playerScore = 0;
    } else {
        alert(`The computer chose ${computerSelection}, and you chose ${playerSelection}. Good job!`)
        computerScore = 0;
        playerScore = 1;
    }
    return [computerScore, playerScore];
}

function game() {
    alert("Rock Paper Scissors! Best out of five wins! \n(Enter q at any time to quit.)");
    let playerScore = 0;
    let computerScore = 0;
    for (let rounds = 0; rounds < 5; rounds++) {
        alert(`Round ${rounds + 1}!`);
        if (gameRound() === undefined) {
            return;
        }
        let scores = gameRound();
        computerScore += scores[0];
        playerScore += scores[1];
        console.log(`player: ${playerScore}, comp: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        alert("You win!")
    }
    else if (playerScore < computerScore) {
        alert("The computer outsmarted you... this time.")
    }
    else {
        while (playerScore == computerScore) {
            alert("Tiebreaker!")
            let scores = gameRound();
            if (scores[0] > scores[1]) {
                alert("Well fought, but the computer won.");
                break;
            } else if (scores [1] > scores [0]) {
                alert("You emerge victorious!");
                break;
            } else {
                alert("Another tie! Here we go again!")
            } continue;
        }
    }
    alert("That's all! Thanks for playing!")
}

game();