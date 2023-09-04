// Function to generate random choice for computer
function getComputerChoice() {
    // The choices that will be available in the game
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

const computerSelection = getComputerChoice();

// Determine the winner based on the choices
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) { 
    return "It's a tie!";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return "You Win! Rock beats Scissors."; 
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return "You Win! Scissors beats Paper"; 
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return "You Lose! Paper beats Rock"
  }
}

// Score counter
let playerScore = 0;
let computerScore = 0;

// Created a loop to play 5 rounds of the game, adding 1 point to the winner each round
for(var i=0;i<5;i++){
    let playerSelection = prompt ("Please choose Rock, Paper or Scissors").toLowerCase();
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
  }
