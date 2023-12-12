document.addEventListener("DOMContentLoaded", function() {
    const gameArea = document.getElementById('gameArea');
    const clickedLettersDisplay = document.getElementById('clickedLettersDisplay');
    const refreshButton = document.getElementById('refreshButton');

    const targetWord = "Caleb";
    let clickedLetters = "";

    function createBall(letter) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.textContent = letter;
        updateBallPosition(ball);
        gameArea.appendChild(ball);

        ball.addEventListener('click', function() {
            clickedLetters += letter;
            clickedLettersDisplay.textContent = clickedLetters;
            ball.remove();
            checkWinCondition();
        });

        // Update ball position every 1 second
        setInterval(() => updateBallPosition(ball), 2000);
    }

    function updateBallPosition(ball) {
        ball.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
        ball.style.top = Math.random() * (gameArea.offsetHeight - 50) + 'px';
    }

    function checkWinCondition() {
        if (clickedLetters === targetWord) {
            alert("Congratulations! You spelled 'Caleb'!");
        }
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 15; i++) {
        createBall(letters[Math.floor(Math.random() * letters.length)]);
    }

    for (let letter of targetWord) {
        createBall(letter);
    }

    refreshButton.addEventListener('click', function() {
        window.location.reload();
    });
});
