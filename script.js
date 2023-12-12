document.addEventListener("DOMContentLoaded", function() {
    var ball = document.createElement("div");
    ball.id = "ball";
    document.body.appendChild(ball);

    var velocityX = 2;
    var velocityY = 2;
    var positionX = 0;
    var positionY = 0;

    function updateBallPosition() {
        positionX += velocityX;
        positionY += velocityY;

        if (positionX > window.innerWidth - ball.offsetWidth || positionX < 0) {
            velocityX = -velocityX;
        }

        if (positionY > window.innerHeight - ball.offsetHeight || positionY < 0) {
            velocityY = -velocityY;
        }

        ball.style.left = positionX + 'px';
        ball.style.top = positionY + 'px';

        requestAnimationFrame(updateBallPosition);
    }

    updateBallPosition();
});
