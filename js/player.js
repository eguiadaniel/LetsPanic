//Player

const playerImage = new Image();
playerImage.src = 'images/player.png';

class Player {
  constructor(initialCol, initialRow, color) {
    this.col = initialCol;
    this.row = initialRow;
    this.color = color;
    this.width = tileSize;
    this.height = tileSize;
    this.positionX = 0;
    this.positionY = 0;
    this.positionChangeTimestamp = 0;
    this.direction = 'down';
  }

  moveUp() {
    if (this.row > 0) {
      this.direction = 'up';
      //this.col++;
    }
  }
  moveDown() {
    if (this.row < tileCount - 1) {
      this.direction = 'down';
      //this.row++;
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.direction = 'left';
      //this.col--;
    }
  }
  moveRight() {
    if (this.col < tileCount - 1) {
      this.direction = 'right';
      //this.col++;
    }
  }

  runLogic() {
    if (Date.now() > this.positionChangeTimestamp + 100) {

      if( this.row > 0 && this.direction === 'up') {
        this.row--;
      }

      if( this.row < tileCount - 1 && this.direction === 'down') {
        this.row++;
      }

      if( this.col > 0 && this.direction === 'left') {
        this.col--;
      }
      
      if( this.col < tileCount - 1 && this.direction === 'right') {
        this.col++;
      }


      this.positionChangeTimestamp = Date.now();
    }

  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(
      this.col * tileSize + 0.25 * tileSize,
      this.row * tileSize + 0.25 * tileSize,
      this.width * 0.5,
      this.height * 0.5
    );
  }

  drawImage() {
    if (Date.now() > this.positionChangeTimestamp + 300) {
      this.positionX += 1;
      this.positionX %= 6;
      this.positionChangeTimestamp = Date.now();
    }

    context.drawImage(
      playerImage,
      16 * this.positionX,
      16 * this.positionY,
      16,
      16,
      this.col * tileSize,
      this.row * tileSize,
      this.width,
      this.height
    );
  }
}
