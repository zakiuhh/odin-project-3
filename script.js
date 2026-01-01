let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const humanScoreSpan = document.getElementById("humanScore");
const computerScoreSpan = document.getElementById("computerScore");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("resetBtn");

function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 0.33) {
    return "rock";
  } else if (randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  resultsDiv.innerHTML = `<div class="round-result">${resultMessage}</div>`;
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    resultsDiv.innerHTML +=
      '<div class="winner">🎉 Congratulations! You won the game!</div>';
    disableButtons();
    resetBtn.style.display = "inline-block";
  } else if (computerScore === 5) {
    resultsDiv.innerHTML +=
      '<div class="winner">💔 Computer wins! Better luck next time!</div>';
    disableButtons();
    resetBtn.style.display = "inline-block";
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
  resultsDiv.innerHTML = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  resetBtn.style.display = "none";
}

rockBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});

resetBtn.addEventListener("click", resetGame);
