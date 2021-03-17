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

// ----> TN - Get ball object
const ball = document.querySelector('.ball');

// ----> TN - Set ball object initial position
let ballPositionX = 1;
let ballPositionXVelocity = 1;
let ballPositionY = 1;
let ballPositionYVelocity = 1;


// Update the pong world
function update() {

    // ----> TN - When the ball touches the right wall move left
    if(ballPositionX === GAME_AREA_WIDTH - BALL_SIZE){
        ballPositionXVelocity *= -1;
    }

    // ----> TN - When the ball touches the left wall move right
    if(ballPositionX === 0){
        ballPositionXVelocity *= -1;
    }
    
    // ----> TN - Move through x axis
    ballPositionX = ballPositionX + ballPositionXVelocity;
    ball.style.left = `${ballPositionX}px`

    // ----> TN When the ball touches the bottom wall move up
    if(ballPositionY === GAME_AREA_HEIGHT - BALL_SIZE){
        ballPositionYVelocity *= -1;
    }

    // ----> TN When the ball touches the top wall move down
    if(ballPositionY === 0){
        ballPositionYVelocity *= -1;
    }

    // ----> TN - Move through y axis
    ballPositionY = ballPositionY + ballPositionYVelocity;
    ball.style.top = `${ballPositionY}px`

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;


}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
