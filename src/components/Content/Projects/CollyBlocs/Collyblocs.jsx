import { useEffect, useRef } from "react";

const CollyBlocsComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 1200;
    canvas.height = 600;

    let gamePoints = 0;
    let lives = 5;
    let intervalID;
    let randomX;
    let randomY;
    let allEnemy = [];

    class Player {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.speed = 4;
        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
      }

      draw(ctx) {
        this.move();
        ctx.strokeStyle = "yellow";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowColor = "yellow";
        ctx.shadowBlur = 10;
        ctx.lineJoin = "bevel";
        ctx.lineWidth = 5;
      }

      move() {
        if (this.leftPressed && this.x >= 4) this.x -= this.speed;
        if (this.upPressed && this.y >= 4) this.y -= this.speed;
        if (this.rightPressed && this.x <= canvas.width - this.width - 4)
          this.x += this.speed;
        if (this.downPressed && this.y <= canvas.height - this.height - 4)
          this.y += this.speed;
      }

      keydown = (e) => {
        if (e.code === "ArrowLeft") this.leftPressed = true;
        if (e.code === "ArrowUp") this.upPressed = true;
        if (e.code === "ArrowRight") this.rightPressed = true;
        if (e.code === "ArrowDown") this.downPressed = true;
      };

      keyup = (e) => {
        if (e.code === "ArrowLeft") this.leftPressed = false;
        if (e.code === "ArrowUp") this.upPressed = false;
        if (e.code === "ArrowRight") this.rightPressed = false;
        if (e.code === "ArrowDown") this.downPressed = false;
      };
    }

    const player = new Player(canvas.width / 2 - 25, canvas.height / 2 - 25);

    class Enemy {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 25;
        this.height = 25;
      }

      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowColor = "yellow";
        ctx.shadowBlur = 10;
        ctx.lineJoin = "bevel";
        ctx.lineWidth = 5;
      }
    }

    const drawScore = () => {
      ctx.font = "25px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.fillText("Score: " + gamePoints, 25, 40);
    };

    const drawLives = () => {
      ctx.font = "25px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.fillText("Lives: " + lives, 25, 80);
    };

    const getRandomX = () => {
      do {
        randomX = Math.floor(Math.random() * (canvas.width - 50));
      } while (randomX >= player.x - 25 && randomX <= player.x + 75);
      return randomX;
    };

    const getRandomY = () => {
      do {
        randomY = Math.floor(Math.random() * (canvas.height - 50));
      } while (randomY >= player.y - 25 && randomY <= player.y + 75);
      return randomY;
    };

    const playerGrow = () => {
      player.x -= 10;
      player.y -= 10;
      player.width += 20;
      player.height += 20;
    };

    const playerShrink = () => {
      if (player.width > 20) {
        player.x += 10;
        player.y += 10;
        player.width -= 20;
        player.height -= 20;
      }
    };

    const reducesLives = () => {
      lives -= 1;
    };

    const createEnemy = () => {
      for (let i = 0; i < 12; i++) {
        allEnemy.push(new Enemy(getRandomX(), getRandomY(), "lime"));
      }
      for (let i = 0; i < 30; i++) {
        allEnemy.push(new Enemy(getRandomX(), getRandomY(), "yellow"));
      }
      for (let i = 0; i < 5; i++) {
        allEnemy.push(new Enemy(getRandomX(), getRandomY(), "pink"));
      }
    };

    const drawEnemy = (ctx) => {
      for (let i = 0; i < allEnemy.length; i++) {
        allEnemy[i].draw(ctx);
      }
    };

    const collisionDetection = () => {
      for (let i = 0; i < allEnemy.length; i++) {
        let enemy = allEnemy[i];

        if (
          player.x > enemy.x + enemy.width ||
          player.x + player.width < enemy.x ||
          player.y > enemy.y + enemy.height ||
          player.y + player.height < enemy.y
        ) {
          continue;
        } else {
          if (enemy.color === "lime") {
            playerShrink();
            gamePoints += 2;
          } else if (enemy.color === "yellow") {
            playerGrow();
            gamePoints += 5;
          } else if (enemy.color === "pink") {
            playerGrow();
            playerGrow();
            reducesLives();
            gamePoints += 10;
          }
          allEnemy.splice(i, 1);
          allEnemy.push(new Enemy(getRandomX(), getRandomY(), enemy.color));
        }
      }
    };

    const gameOver = () => {
      clearInterval(intervalID);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 5;
      ctx.font = "150px comic sans ms";
      ctx.fillStyle = "red";
      ctx.fillText("Game Over!", 200, 250);
      ctx.font = "50px comic sans ms";
      ctx.fillText("Your final Score is  " + gamePoints, 325, 400);
    };

    const gameLoop = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      player.draw(ctx);
      drawEnemy(ctx);
      collisionDetection();
      drawScore();
      drawLives();

      if (lives <= 0 || player.height >= canvas.height * 0.9) {
        gameOver();
      }
    };

    document.addEventListener("keyup", (e) => {
      if (e.code === "Escape") {
        window.location.reload();
      }
    });

    createEnemy();
    intervalID = setInterval(gameLoop, 1000 / 60);

    // Cleanup on unmount
    return () => {
      clearInterval(intervalID);
      document.removeEventListener("keyup", () => {});
      document.removeEventListener("keydown", player.keydown);
      document.removeEventListener("keyup", player.keyup);
    };
  }, []);

  return (
    <canvas ref={canvasRef} id="canvas" style={{ border: "1px solid white" }} />
  );
};

export default CollyBlocsComponent;
