let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice;
        }
        alert("Invalid choice. Please enter rock, paper, or scissors.");
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        return "Draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log('------------------------');
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }
}

playGame();