let plays = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return plays[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        return ["It's a tie!", playerScore, computerScore];
    }
    if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")){
        computerScore++;
        return ["You Lose! " + computerSelection + " beats " + playerSelection, playerScore, computerScore];
    }
    else {
        playerScore++;
        return ["You Win! " + playerSelection + " beats " + computerSelection, playerScore, computerScore];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        if (playerSelection.length == 0) {
            playerSelection = prompt("Please choose Rock, Paper, or Scissors");
        }
        const computerSelection = getComputerChoice();

        round = playRound(playerSelection, computerSelection, playerScore, computerScore);
        
        playerScore = round[1];
        computerScore = round[2];
        console.log(round[0]);
        console.log("Player: ", playerScore);
        console.log("Computer: ", computerScore);
    }
    if (playerScore > computerScore) {
        console.log("Player wins!")
    }
    if (computerScore == playerScore) {
        console.log("It's a tie game!")
    }
    if (computerScore > playerScore) {
        console.log("Computer wins!")
    }
}

console.log(game());