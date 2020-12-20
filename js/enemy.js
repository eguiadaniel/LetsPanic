// Enemy

class Enemy {
  constructor(initialCol, initialRow, color, width, height) {
    this.enemyImage = new Image();
    this.enemyImage.src = 'images/enemy.png';
    this.col = initialCol;
    this.row = initialRow;
    this.color = color;
    this.width = width * tileSize;
    this.height = height * tileSize;
    this.positionX = 0;
    this.positionY = 3;
    this.positionChangeTimestamp = 0;
    this.directionChangeTimestamp = 0;
    this.direction = 1;
  }

  moveDown() {
    /*this.direction = 0;*/
    this.positionY = 0;
    this.row += this.width / 666;
  }

  moveLeft() {
    // this.direction = 1;
    this.positionY = 1;
    this.col -= this.width / 666;
  }

  
  moveUp() {
    // this.direction = 2;
    this.positionY = 3;
    this.col += this.width / 666;
  }
  
  moveRight() {
    // this.direction = 3;
    this.positionY = 2;
    this.col += this.width / 666;
  }

  changeDirection() {
    this.direction = Math.floor(Math.random() * 3);
    if (Date.now() > this.directionChangeTimestamp + 20) {
    }
  }

  runLogic() {
    //this.col -= this.width/666

    if (Math.random() > 0.98) {
      this.direction = Math.floor(Math.random() * 2);
    }

    if (this.direction === 0) {
      this.moveDown();
    }

    if (this.direction === 1) {
      this.moveLeft();
    }

    if (this.direction === 2) {
      this.moveUp();
    }
  }

  /*  
    if (Date.now() > this.directionChangeTimestamp + 40) {
      this.direction =  game.getRandomDirection()
    }
    */

  draw() {
    context.fillStyle = this.color;
    context.fillRect(
      this.col * tileSize,
      this.row * tileSize,
      this.width,
      this.height
    );
  }

  drawImage() {
    if (Date.now() > this.positionChangeTimestamp + 150) {
      this.positionX += 1;
      this.positionX %= 4;

      this.positionChangeTimestamp = Date.now();
    }

    context.drawImage(
      this.enemyImage,
      36 * this.positionX,
      36 * this.positionY,
      36,
      36,
      this.col * tileSize,
      this.row * tileSize,
      this.width,
      this.height
    );
  }
}