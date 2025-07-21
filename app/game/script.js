export function game() {
    let canvas, ctx;
    let canvasPosition;
    let gameOver = false;
    let gameSpeed = 1;
    let gameFrame = 0;
    let score = 0;
    let player, enemy1;
    const bubblesArray = [];

    const bubbleImage = new Image();
    bubbleImage.src = 'bubble_pop_frame_01.png';

    const bubblePop1 = document.createElement('audio');
    bubblePop1.src = 'Plog.ogg';
    const bubblePop2 = document.createElement('audio');
    bubblePop2.src = 'bubbles-single2.wav';

    const background = new Image();
    background.src = '';

    const BG = {
        x1: 0,
        x2: 0,
        y: 0,
        width: 0,
        height: 0
    };

    const enemyImage = new Image();
    enemyImage.src = 'enemy1.png';

    const playerLeft = new Image();
    playerLeft.src = 'fish_swim_left.png';
    const playerRight = new Image();
    playerRight.src = 'fish_swim_right.png';

    const mouse = {
        x: 0,
        y: 0,
        click: false
    };

    class Player {
        constructor() {
            this.x = canvas.width;
            this.y = canvas.height / 2;
            this.radius = 50;
            this.angle = 20;
            this.frameX = 0;
            this.frameY = 0;
            this.spriteWidth = 498;
            this.spriteHeight = 327;
        }

        update() {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            let theta = Math.atan2(dy, dx);
            this.angle = theta;
            if (mouse.x !== this.x) this.x -= dx / 20;
            if (mouse.y !== this.y) this.y -= dy / 20;
        }

        draw() {
            if (mouse.click) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }

            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            if (this.x >= mouse.x) {
                ctx.drawImage(playerLeft, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                    this.spriteWidth, this.spriteHeight, -60, -42, this.spriteWidth / 4, this.spriteHeight / 4);
            } else {
                ctx.drawImage(playerRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                    this.spriteWidth, this.spriteHeight, -60, -42, this.spriteWidth / 4, this.spriteHeight / 4);
            }
            ctx.restore();
        }
    }

    class Bubble {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 100;
            this.radius = 50;
            this.speed = Math.random() * 5 + 1;
            this.distance = 0;
            this.counted = false;
            this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2';
        }

        update() {
            this.y -= this.speed;
            const dx = this.x - player.x;
            const dy = this.y - player.y;
            this.distance = Math.sqrt(dx * dx + dy * dy);
        }

        draw() {
            ctx.drawImage(bubbleImage, this.x - 65, this.y - 65, this.radius * 2.6, this.radius * 2.6);
        }
    }

    class Enemy {
        constructor() {
            this.x = canvas.width + 200;
            this.y = Math.random() * (canvas.height - 150) + 90;
            this.radius = 60;
            this.speed = Math.random() * 2 + 2;
            this.frame = 0;
            this.frameX = 0;
            this.frameY = 0;
            this.spriteWidth = 418;
            this.spriteHeight = 397;
        }

        update() {
            this.x -= this.speed;
            if (this.x < -this.radius * 2) {
                this.x = canvas.width + 200;
                this.y = Math.random() * (canvas.height - 150) + 90;
                this.speed = Math.random() * 2 + 2;
            }
            if (gameFrame % 5 === 0) {
                this.frame++;
                if (this.frame >= 12) this.frame = 0;
                if (this.frame === 3 || this.frame === 7 || this.frame === 11) {
                    this.frameX = 0;
                } else {
                    this.frameX++;
                }
                if (this.frame < 3) this.frameY = 0;
                else if (this.frame < 7) this.frameY = 1;
                else if (this.frame < 11) this.frameY = 2;
                else this.frameY = 0;
            }

            const dx = this.x - player.x;
            const dy = this.y - player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.radius + player.radius) {
                handleGameOver();
            }
        }

        draw() {
            ctx.drawImage(enemyImage, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                this.spriteWidth, this.spriteHeight, this.x - 60, this.y - 70, this.spriteWidth / 3, this.spriteHeight / 3);
        }
    }

    function handleBubbles() {
        if (gameFrame % 50 === 0) {
            bubblesArray.push(new Bubble());
        }
        for (let i = 0; i < bubblesArray.length; i++) {
            const bubble = bubblesArray[i];
            bubble.update();
            bubble.draw();

            if (bubble.y < -bubble.radius * 2) {
                bubblesArray.splice(i, 1);
                i--;
            } else if (bubble.distance < bubble.radius + player.radius && !bubble.counted) {
                if (bubble.sound === 'sound1') {
                    bubblePop1.play();
                } else {
                    bubblePop2.play();
                }
                score++;
                bubble.counted = true;
                bubblesArray.splice(i, 1);
                i--;
            }
        }
    }

    function handleBackground() {
        BG.x1 -= gameSpeed;
        if (BG.x1 < -BG.width) BG.x1 = BG.width;
        BG.x2 -= gameSpeed;
        if (BG.x2 < -BG.width) BG.x2 = BG.width;
        ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
        ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
    }

    function handleEnemies() {
        enemy1.update();
        enemy1.draw();
    }

    function handleGameOver() {
        ctx.fillStyle = 'white';
        ctx.font = '60px Georgia';
        ctx.fillText('GAME OVER score ' + score, 80, 250);
        ctx.font = '35px Georgia';
        ctx.fillText('Press ENTER to Restart', 150, 310);
        gameOver = true;
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleBackground();
        handleBubbles();
        player.update();
        player.draw();
        handleEnemies();
        ctx.fillStyle = 'black';
        ctx.font = '40px Georgia';
        ctx.fillText('score: ' + score, 10, 50);
        gameFrame++;
        if (!gameOver) requestAnimationFrame(animate);
    }

    function startGame() {
        canvas = document.getElementById('canvas1');
        ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 500;

        score = 0;
        gameFrame = 0;
        gameOver = false;
        bubblesArray.length = 0;

        canvasPosition = canvas.getBoundingClientRect();
        mouse.x = canvas.width / 2;
        mouse.y = canvas.height / 2;

        canvas.addEventListener('mousedown', function (event) {
            mouse.click = true;
            mouse.x = event.x - canvasPosition.left;
            mouse.y = event.y - canvasPosition.top;
        });
        canvas.addEventListener('mouseup', function () {
            mouse.click = false;
        });

        window.addEventListener('resize', function () {
            canvasPosition = canvas.getBoundingClientRect();
        });

        BG.x1 = 0;
        BG.x2 = canvas.width;
        BG.width = canvas.width;
        BG.height = canvas.height;

        player = new Player();
        enemy1 = new Enemy();

        animate();
    }

    // Press ENTER to restart
    window.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && gameOver) {
            startGame();
        }
    });

    startGame(); // start the game first time
    // canvas.addEventListener("touchstart", handleStart);
    // canvas.addEventListener("touchmove", handleMove);

}
