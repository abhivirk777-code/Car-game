const car = document.getElementById("car");
const obstacle = document.getElementById("obstacle");
const score = document.getElementById("score");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let carX = 125;
let obstacleY = -100;
let obstacleX = 125;
let points = 0;

// Left button
leftBtn.addEventListener("click", () => {
    if (carX > 0) {
        carX -= 50;
        car.style.left = carX + "px";
    }
});

// Right button
rightBtn.addEventListener("click", () => {
    if (carX < 250) {
        carX += 50;
        car.style.left = carX + "px";
    }
});

function gameLoop() {

    obstacleY += 5;
    obstacle.style.top = obstacleY + "px";
    obstacle.style.left = obstacleX + "px";

    // Collision
    if (obstacleY > 390 && obstacleY < 470 && obstacleX === carX) {
        alert("Game Over!\nScore: " + points);
        location.reload();
        return;
    }

    // Obstacle passed
    if (obstacleY > 500) {
        obstacleY = -100;
        obstacleX = Math.floor(Math.random() * 6) * 50;
        points++;
        score.innerHTML = points;
    }

    requestAnimationFrame(gameLoop);
}

game
