let plays = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return plays[Math.floor(Math.random() * 3)];
}