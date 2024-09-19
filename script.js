let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const restartButton = document.getElementById('restart-button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));
restartButton.addEventListener('click', restartGame);

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(humanChoice, computerChoice) {
    let resultMessage = '';

    if (humanChoice === computerChoice) {
        resultMessage = `Draw! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultMessage = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`;
    }

    resultsDiv.textContent = resultMessage;
    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner() {
    if (humanScore === 5) {
        resultsDiv.textContent = "Congratulations! You win the game!";
    } else {
        resultsDiv.textContent = "Game over! Computer wins the game!";
    }

    disableButtons();
    restartButton.style.visibility = 'visible';
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;

    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    resultsDiv.textContent = '';

    restartButton.style.visibility = 'hidden';
    enableButtons();
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

const style = document.createElement('style');
style.textContent = `
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
    }
    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }
    #buttons-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    #buttons-container button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        padding: 10px;
        margin: 0 10px;
        cursor: pointer;
        width: 120px;
        box-sizing: border-box;
    }
    #game-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 200px;
        justify-content: space-between;
    }
    #score, #results {
        font-size: 1.5em;
        text-align: center;
        min-height: 30px;
    }
    #restart-button {
        font-size: 1.2em;
        padding: 10px 20px;
        margin-top: 20px;
        cursor: pointer;
        visibility: hidden;
    }
`;
document.head.appendChild(style);
