function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(playerChoice, computerChoice);

    displayResult(`You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`);

    if (result !== "It's a tie!") {
        displayClash();
    }
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function displayResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.style.color = message.includes('win') ? '#2ecc71' : (message.includes('lose') ? '#e74c3c' : '#ecf0f1');
}

function displayClash() {
    const clashElement = document.getElementById('clash');

    clashElement.innerHTML = '&#128074;'; // Unicode for a fist (clash effect)
    clashElement.style.opacity = '1';

    setTimeout(() => {
        clashElement.style.opacity = '0';
    }, 500);
}
