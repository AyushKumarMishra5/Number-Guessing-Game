let randomNumber = Math.ceil(Math.random() * 100);
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const restartGame = document.getElementById('restartGame');

submitGuess.addEventListener('click', function() {
    const guessedNumber = Number(guessInput.value);

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        feedback.innerText = 'Please enter a valid number between 1 and 100.';
    } else if (guessedNumber < randomNumber) {
        attempts++;
        feedback.innerText = 'Low! Try again.';
    } else if (guessedNumber > randomNumber) {
        attempts++;
        feedback.innerText = 'High! Try again.';
    } else {
        attempts++;
        feedback.innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    }

    attemptsDisplay.innerText = `Attempts: ${attempts}`;
});

restartGame.addEventListener('click', function() {
    randomNumber = Math.ceil(Math.random() * 100);
    attempts = 0;
    guessInput.value = '';
    feedback.innerText = '';
    attemptsDisplay.innerText = 'Attempts: 0';
});
