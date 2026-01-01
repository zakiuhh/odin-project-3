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

function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`\n=== Round ${i} ===`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Display final scores and winner
  console.log("\n=== GAME OVER ===");
  console.log(`Final Score - You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💔 Sorry, the computer won this time!");
  } else {
    console.log("🤝 It's a tie game!");
  }
}

console.log("Rock Paper Scissors game loaded!");
console.log("Type playGame() in the console to start playing!");
