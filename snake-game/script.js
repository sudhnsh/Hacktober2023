const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const CELL_SIZE = 20;
const GRID_SIZE = canvas.width / CELL_SIZE;
let snake = [{ x: 5, y: 5 }];
let apple = { x: 15, y: 5 };
let dx = 1, dy = 0;
let isGameOver = false;
let score = 0;

function drawSnake() {
    snake.forEach((segment, index) => {
        const alpha = ((index) / snake.length);
        ctx.fillStyle = `rgba(0, 300, 0, ${1-alpha})`;
        ctx.fillRect(segment.x * CELL_SIZE, segment.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });
}

function drawApple() {
    const blink = Math.round(Date.now() / 500) % 2 === 0;
    ctx.fillStyle = blink ? 'red' : 'darkred';
    ctx.fillRect(apple.x * CELL_SIZE, apple.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 30);
}

function drawBorder() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        isGameOver = true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            isGameOver = true;
            break;
        }
    }
}

function moveSnake() {
    if (isGameOver) return;

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === apple.x && head.y === apple.y) {
        score++;
        placeApple();
    } else {
        snake.pop();
    }

    checkCollision();
}

function placeApple() {
    apple.x = Math.floor(Math.random() * GRID_SIZE);
    apple.y = Math.floor(Math.random() * GRID_SIZE);
    if (snake.some(segment => segment.x === apple.x && segment.y === apple.y)) {
        placeApple();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBorder();
    drawSnake();
    drawApple();
    drawScore();

    if (isGameOver) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText(`Game Over`, canvas.width / 2 - 80, canvas.height / 2-50);
        ctx.fillText(`You Scored: ${score}`, canvas.width / 2 - 93, canvas.height / 2-10);
        ctx.fillText(`Press Enter to Restart`, canvas.width / 2 - 150, canvas.height / 2+30)
        document.addEventListener('keydown',(event)=>{
            if(event.key=='Enter')
            {
                location.reload();
            }
        })
        return;
    }

    setTimeout(() => {
        requestAnimationFrame(draw);
    }, 100);
    moveSnake();
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            dx = 0;
            dy = -1;
            break;
        case 'ArrowDown':
            dx = 0;
            dy = 1;
            break;
        case 'ArrowLeft':
            dx = -1;
            dy = 0;
            break;
        case 'ArrowRight':
            dx = 1;
            dy = 0;
            break;
    }
});

// Add the following code to handle button clicks for mobile controls

document.getElementById('upButton').addEventListener('click', () => {
    dx = 0;
    dy = -1;
});

document.getElementById('downButton').addEventListener('click', () => {
    dx = 0;
    dy = 1;
});

document.getElementById('leftButton').addEventListener('click', () => {
    dx = -1;
    dy = 0;
});

document.getElementById('rightButton').addEventListener('click', () => {
    dx = 1;
    dy = 0;
});

requestAnimationFrame(draw);
