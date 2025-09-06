// Number Guessing Game (1–100) with 10 guesses and history display
(() => {
    const MAX_GUESSES = 10;
    const MIN = 1, MAX = 100;

    // DOM refs
    const input = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const resetBtn = document.getElementById('resetBtn');
    const feedback = document.getElementById('feedback');
    const remaining = document.getElementById('remaining');
    const list = document.getElementById('guessesList');

    // Game state
    let secret, guessesLeft, history, finished;

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function init() {
        secret = randInt(MIN, MAX);
        guessesLeft = MAX_GUESSES;
        history = [];
        finished = false;

        // UI reset
        list.innerHTML = '';
        remaining.textContent = String(guessesLeft);
        setFeedback('Make your first guess!', null);
        resetBtn.disabled = true;
        guessBtn.disabled = false;
        input.value = '';
        input.disabled = false;
        input.focus();
    }

    function setFeedback(msg, kind) {
        feedback.className = '';
        if (kind) feedback.classList.add(kind);
        feedback.textContent = msg;
    }

    function addGuessToList(value) {
        const li = document.createElement('li');
        li.textContent = value;
        list.prepend(li); // newest first
    }

    function endGame(win) {
        finished = true;
        input.disabled = true;
        guessBtn.disabled = true;
        resetBtn.disabled = false;

        if (win) {
            setFeedback(`✅ Correct! ${secret} was the number.`, 'ok');
        } else {
            setFeedback(`❌ Out of guesses! The number was ${secret}.`, 'end');
        }
    }

    function handleGuess() {
        if (finished) return;

        const raw = input.value.trim();
        if (!raw) {
            setFeedback('Please enter a number between 1 and 100.', 'low');
            return;
        }

        const num = Number(raw);

        // Validate input
        if (!Number.isInteger(num) || num < MIN || num > MAX) {
            setFeedback('Invalid input. Enter a whole number from 1 to 100.', 'end');
            return;
        }

        // Record and show
        history.push(num);
        addGuessToList(num);

        // Compare
        if (num === secret) {
            endGame(true);
            return;
        }

        guessesLeft--;
        remaining.textContent = String(guessesLeft);

        if (num < secret) {
            setFeedback('Too low! Try a higher number.', 'low');
        } else {
            setFeedback('Too high! Try a lower number.', 'high');
        }

        if (guessesLeft === 0) {
            endGame(false);
        }

        input.value = '';
        input.focus();
    }

    // Events
    guessBtn.addEventListener('click', handleGuess);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleGuess();
    });
    resetBtn.addEventListener('click', init);

    // Start game
    init();
})();
