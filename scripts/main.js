// Put your JavaScript here

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height-30;

let dx = 2;
let dy = -2;

let ballRadius = 10;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth) / 2;

let rightPressed = false
let leftPressed = false

function drawPaddle()  {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    //clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw the ball
    drawBall();

    //let the x and y values change for the ball
    x += dx;
    y += dy;

    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    if (x + dx > canvas.width - ballRadius || x + dx  < ballRadius) {
        dx = -dx;
    }
    
    //paddle controls
    if(rightPressed) {
        paddleX += 7
        if(paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth
        }
    }
    else if(leftPressed) {
        paddleX -= 7
        if(paddleX < 0){
            paddleX = 0
        }
    }

    drawPaddle();
}

function keyDownHandler(e){
    if (e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if (e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10)

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();

