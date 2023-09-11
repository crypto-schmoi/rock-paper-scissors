// Function to generate random choice for computer
function getComputerChoice() {
  const choices = ["water", "air", "fire"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

let playerSelection = null;

// Function to determine the winner based on player and computer choices
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) { 
      return "It's a tie!";
  } else if (playerSelection === 'water' && computerSelection === 'fire') {
      return "You Win! Water beats Fire."; 
  } else if (playerSelection === 'air' && computerSelection === 'water') {
      return "You Win! Air beats Water";
  } else if (playerSelection === 'fire' && computerSelection === 'air') {
      return "You Win! Fire beats Air"; 
  } else if (playerSelection === 'fire' && computerSelection === 'water') {
      return "You Lose! Water beats Fire";
  } else if (playerSelection === 'water' && computerSelection === 'air') {
      return "You Lose! Air beats Water";
  } else if (playerSelection === 'air' && computerSelection === 'fire') {
      return "You Lose! Fire beats Air"
  }
}

// Function to update the score display
function updateScoreDisplay() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

// Function to display the results in the "round-results" div based on player and computer selections
function displayResults(playerSelection) {
  const computerSelection = getComputerChoice(); // Generate computer's choice for this round
  const result = playRound(playerSelection, computerSelection);
  const roundResultsDiv = document.querySelector(".round-results");

  // Clear the round results div
  roundResultsDiv.textContent = '';

  // Display the round result
  roundResultsDiv.textContent += result + "\n";

  // Handle scoring
  if (result.includes("You Win")) {
    playerScore++;
  } else if (result.includes("You Lose")) {
    computerScore++;
  }

  // Update the score display after scoring
  updateScoreDisplay();

  // Check if the game is over (first player to reach 5 points)
  if (playerScore >= 5) {
    roundResultsDiv.textContent += "Congratulations! You are the winner!";
  } else if (computerScore >= 5) {
    roundResultsDiv.textContent += "Sorry, the computer wins!";
  }
}

// Event listener to call the displayResults function when a button is clicked
const water = document.querySelector(".waterBtn");
const air = document.querySelector(".airBtn");
const fire = document.querySelector(".fireBtn");

water.addEventListener('click', function() {
  playerSelection = "water";
  displayResults(playerSelection);
});

air.addEventListener('click', function() {
  playerSelection = "air";
  displayResults(playerSelection);
});

fire.addEventListener('click', function() {
  playerSelection = "fire";
  displayResults(playerSelection);
});

// Variable to store scores
let playerScore = 0;
let computerScore = 0;

// Initialise the score display
updateScoreDisplay();