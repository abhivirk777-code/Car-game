const car = document.getElementById("car");
const obstacle = document.getElementById("obstacle");
const scoreText = document.getElementById("score");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let carLeft = 125;
let obstacleTop = -100;
let obstacleLeft = 125;
let score = 0;

// Move left
leftBtn.addEventListener("click", function () {
    if (carLeft > 0) {
        carLeft -= 50;
        car.style.left = carLeft + "px";
    }
});

// Move right
rightBtn.addEventListener("click", function () {
    if (carLeft < 250) {
        carLeft += 50;
        car.style.left = carLeft + "px";
    }
});

function updateGame() {
    obstacleTop += 5;

    obstacle.style.top = obstacleTop + "px";
    obstacle.style.left = obstacleLeft + "px";

    // Collision
    if (
        obstacleTop > 390 &&
        obstacleTop < 470 &&
        obstacleLeft === carLeft
    ) {
        alert("Game Over! Score: " + score);
        location.reload();
        return;
    }

    // Obstacle reaches bottom
    if (obstacleTop > 500) {
        obstacleTop = -100;
        obstacleLeft = Math.floor(Math.random() * 6) * 50;
        score++;
        scoreText.textContent = score;
    }

    requestAnimationFrame(updateGame);
}

// Start the game
updateGame();
