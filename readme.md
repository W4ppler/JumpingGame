# Jumping Game

This is my first JavaScript Project. I have tried to recreate the Chrome Dino Game.

## Features
- The character can jump by clicking (or any Keyboard input).
- Different cactus images appear randomly as obstacles.
- The game tracks the player's current score and high score.
- The difficulty increases over time by decreasing the block appearance delay and increasing the block speed.

## Files
- **`index.html`**: The main HTML structure for the game.
- **`style.css`**: The styling for the game elements.
- **`script.js`**: The JavaScript for the game logic and interaction.
- **`dino1.png`, `dino2.png`**: Images for the character.
- **`cactus1.png`, `cactus2.png`, `cactus3.png`, `cactus4.png`, `cactus5.png`**: Images for the cacti.

## How to Play
1. Press any key to make the character jump.
2. Avoid hitting the cacti. The game will end if the character collides with one.
3. The score increases as the blocks move across the screen. Try to get the highest score possible!

## Installation
To run the game, follow these steps:
1. Clone or download the repository to your local machine.
2. Open the `index.html` file in any web browser.
3. The game will start automatically.
4. You can 

## JavaScript (script.js)

This file contains the logic for the game, including some functions:

- **`jump()`**: Makes the character jump when a key is pressed.
- **`createBlock()`**: Generates the cactus blocks randomly.
- **`getRandomInt()`**: Helps generate random values, used for creating random cactus images and delays.
- **`checkDead`**: Checks if the character collides with a block and ends the game if true.
