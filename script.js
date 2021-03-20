// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// ┌─────────────────────────┐
// │   TN Global Variables   │	
// └─────────────────────────┘

// ----> TN - Get ball object
const ball = document.querySelector('.ball');

// ----> TN - Velocity. Initial ball Position.
let ballPositionX = 150;
let ballPositionXVelocity = 4;
let ballPositionY = 1;
let ballPositionYVelocity = 2;

// ---> TN - Get player paddle object
let playerPaddle = document.querySelector('.player-paddle');

// ---> TN - Velocity. Initial player paddle position.
let playerVelocity = 55;
let playerPaddlePosition = 200;


// Update the pong world
function update() {
    updatePlayerPosition();
    updateBallMovement();
    updateComputerPosition();
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);


// ┌───────────────────────┐
// │   Keyboard Listener   │	
// └───────────────────────┘
const modifier = 5;
window.addEventListener("keydown", function (event) {
    switch (event.key) {

        case "ArrowDown":
        playerPaddlePosition += playerVelocity;
        break;

        case "ArrowUp":
        playerPaddlePosition -= playerVelocity;
        break;

        default:
        return;
    }
}, true);




// ┌───────────────┐
// │   Functions   │	
// └───────────────┘
function updatePlayerPosition(){
    if(playerPaddlePosition < 0){
        playerPaddlePosition = 0;
    }
    if(playerPaddlePosition > GAME_AREA_HEIGHT - PADDLE_HEIGHT){
        playerPaddlePosition = GAME_AREA_HEIGHT - PADDLE_HEIGHT;
    }
    playerPaddle.style.top = `${playerPaddlePosition}px`
}

function updateComputerPosition(){
    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}

function updateBallMovement(){

     // When the ball touches the right wall move left
     if(ballPositionX > GAME_AREA_WIDTH - BALL_SIZE){
        ballPositionXVelocity *= -1;
    }

    // When the ball touches the left wall move right
    if(ballPositionX <= 0){
        ballPositionXVelocity *= -1;
    }
    
    // Move through x axis
    ballPositionX = ballPositionX + ballPositionXVelocity;
    ball.style.left = `${ballPositionX}px`

    // TN When the ball touches the bottom wall move up
    if(ballPositionY > GAME_AREA_HEIGHT - BALL_SIZE){
        ballPositionYVelocity *= -1;
    }

    // When the ball touches the top wall move down
    if(ballPositionY <= 0){
        ballPositionYVelocity *= -1;
    }

    // Move through y axis
    ballPositionY = ballPositionY + ballPositionYVelocity;
    ball.style.top = `${ballPositionY}px`
}