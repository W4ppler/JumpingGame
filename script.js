document.addEventListener("keydown", jump);
let character = document.getElementById("character");
let block = document.getElementById("block");
let scoreElement = document.getElementById("score");
let highscoreElement = document.getElementById("highscore");

let counter = 0;
let score = 0;
let highscore = localStorage.getItem("highscore") || 0;
let minDelay = 500;
let maxDelay = 2500;
let blockSpeed = 1000; // initial block speed in milliseconds
highscoreElement.textContent = "Highscore: " + highscore;

setInterval(function() {
    if (counter % 2 === 0) {
        character.style.backgroundImage = "url('dino1.png')";
    } else {
        character.style.backgroundImage = "url('dino2.png')";
    }

    counter++;
}, 100);

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to randomly choose a cactus image (from cactus1 to cactus5)
function getRandomCactus() {
    const cactusImages = ['cactus1.png', 'cactus2.png', 'cactus3.png', 'cactus4.png', 'cactus5.png'];
    return cactusImages[getRandomInt(0, cactusImages.length - 1)];
}

function createBlock() {
    block.style.display = "block";
    block.style.backgroundImage = `url('${getRandomCactus()}')`; // Set random cactus image
    block.style.animation = `block ${blockSpeed}ms linear`;
    setTimeout(() => {
        block.style.display = "none";
        let randomDelay = getRandomInt(minDelay, maxDelay);
        setTimeout(createBlock, randomDelay);
    }, blockSpeed);
}

let checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 100 && blockLeft > 50 && characterTop >= 150) {
        block.style.animation = "none";
        block.style.display = "none";

        if (score > highscore) {
            highscore = score;
            localStorage.setItem("highscore", highscore);
            highscoreElement.textContent = "Highscore: " + highscore;
        }

        alert("Game Over. Your score: " + score);
        location.reload();
    } else {
        score++;
        scoreElement.textContent = "Score: " + score;

        // Increase difficulty over time
        if (score % 100 === 0) { // Every 100 points
            if (minDelay > 200) minDelay -= 50; // Decrease min delay, but not below 200ms
            if (maxDelay > 1000) maxDelay -= 100; // Decrease max delay, but not below 1000ms
            if (blockSpeed > 500) blockSpeed -= 50; // Increase block speed, but not below 500ms
        }
    }
}, 100);

// Start the initial block creation
createBlock();