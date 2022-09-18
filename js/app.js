let plays = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return plays[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if (playerSelection == computerSelection) {
        return "It's a tie, play again!";
    }

    if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")){
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
  }
   
  const playerSelection = "scissors";
  const computerSelection = getComputerChoice();

  console.log(computerSelection, playRound(playerSelection, computerSelection));

  