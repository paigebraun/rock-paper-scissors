let plays = ["Rock", "Paper", "Scissors"]

// Computer randomly picks a play from the plays array above
function getComputerChoice() {
    return plays[Math.floor(Math.random() * 3)];
}

// Assess who wins the round based on selections
function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        return ["It's a tie! You both get a point.", playerScore, computerScore];
    }
    if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")){
        computerScore++;
        return [computerSelection + " beats " + playerSelection + ". Computer gets a point!", playerScore, computerScore];
    }
    else {
        playerScore++;
        return [playerSelection + " beats " + computerSelection +". You get a point!", playerScore, computerScore];
    }
}

// At the end of a game, a Play Again button appears on screen. Once clicked, it disappears and is removed from the DOM.
function createPlayAgain(){
    const roundSummaryContainer = document.querySelector('.roundSummaryContainer');
    const playAgain = document.createElement("button");
    playAgain.classList.add('playAgainButton');
    playAgain.textContent = "Play Again?"
    roundSummaryContainer.appendChild(playAgain);

    playAgain.addEventListener('click', ()=> {
        document.querySelector('.roundSummary').textContent = "Select your move.";
        document.querySelector('.computerScoreNum').textContent = "0";
        document.querySelector('.playerScoreNum').textContent = "0";
        roundSummaryContainer.removeChild(playAgain);
        normalScreen();
    });
}

// Calls playRound funtion to decide who wins the round, then points are updated accordingly.
function playGame(playerSelection, computerSelection, playerScore, computerScore){
    round = playRound(playerSelection, computerSelection, playerScore, computerScore);
    playerScore = round[1];
    document.querySelector('.playerScoreNum').innerHTML = playerScore;
    computerScore = round[2];
    document.querySelector('.computerScoreNum').innerHTML = computerScore;
    document.querySelector('.roundSummary').innerHTML = round[0];

    // First to 5 points wins
    if (playerScore == 5 && computerScore !== 5) {
        dimScreenEndCard();
        document.querySelector('.roundSummary').innerHTML = "You win!"
        createPlayAgain()
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5 && playerScore !== 5) {
        dimScreenEndCard();
        document.querySelector('.roundSummary').innerHTML = "Computer wins!"
        createPlayAgain()
        playerScore = 0;
        computerScore = 0;
    }
    if (playerScore == 5 && computerScore == 5) {
        dimScreenEndCard();
        document.querySelector('.roundSummary').innerHTML = "It's a tie game!"
        createPlayAgain()
        playerScore = 0;
        computerScore = 0;
    }
    if (((playerScore < 5 && playerScore > 0) && (computerScore > 0 && computerScore < 5)) || (playerScore == 0 && computerScore !== 0) || (playerScore !== 0 && computerScore == 0)) {
        dimScreen();
    }
    return [playerScore, computerScore]
}

// Dims screen after each round for 1500 milliseconds
function dimScreen(){
    document.querySelector('.dim').style.zIndex = "1";
    document.querySelector('.dim').style.opacity = ".7";
    setTimeout(normalScreen, 1500);
}

// Dims screen at end of game until player clicks Play Again button
function dimScreenEndCard(){
    document.querySelector('.dim').style.zIndex = "1";
    document.querySelector('.dim').style.opacity = ".7";
}

// Returns to normal, undimmed screen
function normalScreen(){
    document.querySelector('.dim').style.zIndex = "-1";
    document.querySelector('.dim').style.opacity = "0";
}

// Player selects rock, paper, or scissors and a game is played in playGame function
function getPlayerSelection(playerScore, computerScore) {
    let computerSelection = null;
    let playerSelection = null;

    const rock = document.querySelector('#rockButton');
    rock.addEventListener('click', ()=> {
        computerSelection = getComputerChoice();
        playerSelection = "Rock";
        let roundScore = playGame(playerSelection, computerSelection, playerScore, computerScore);
        playerScore = roundScore[0];
        computerScore = roundScore[1];
    });

    const paper = document.querySelector('#paperButton');
    paper.addEventListener('click', ()=> {
        computerSelection = getComputerChoice();
        playerSelection = "Paper";
        let roundScore = playGame(playerSelection, computerSelection, playerScore, computerScore);
        playerScore = roundScore[0];
        computerScore = roundScore[1];
    });

    const scissors = document.querySelector('#scissorsButton');
    scissors.addEventListener('click', ()=> {
        computerSelection = getComputerChoice();
        playerSelection = "Scissors";
        let roundScore = playGame(playerSelection, computerSelection, playerScore, computerScore);
        playerScore = roundScore[0];
        computerScore = roundScore[1];
    });
};

let playerScore = 0;
let computerScore = 0;

getPlayerSelection(playerScore, computerScore);