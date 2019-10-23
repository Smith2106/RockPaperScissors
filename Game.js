// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
const finalResults = document.getElementById('finalResults');
const playerScoreEl = document.getElementById('playerScore');
const compScoreEl = document.getElementById('compScore');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    playRound(button.id, computerPlay());
  });
});

const beats = {
  "rock": "scissors",
  "paper": "rock",
  "scissors": "paper"
};

let compScore = 0;
let playerScore = 0;

function computerPlay() {
  return Object.keys(beats)[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (beats[playerSelection] === computerSelection) {
    playerScore += 1;
    playerScoreEl.textContent = playerScore
    results.textContent = `${playerSelection} beats ${computerSelection}`;
  }
  else if (beats[computerSelection] === playerSelection) {
    compScore += 1;
    compScoreEl.textContent = compScore
    results.textContent = `${computerSelection} beats ${playerSelection}`;
  }
  else {
    results.textContent = "Tie!";
  }

  if (playerScore >= 5) {
    finalResults.textContent = "You won!"
    finalResults.style.color = 'green';
  }
  else if (compScore >= 5) {
    finalResults.textContent = "You lost!"
    finalResults.style.color = 'red';
  }
}
