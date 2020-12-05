// Enemy


class Enemy {
  
  constructor (initialCol, initialRow, color, width, height ) {
    this.enemyImage = new Image();
    this.enemyImage.src = 'images/enemy128.png';
    this.col = initialCol  - (width/2);
    this.row = initialRow  - (height/2);
    this.color = color;
    this.width = width * tileSize;
    this.height = height * tileSize; 
    this.positionX = 0;
    this.positionY = 3  ;
    this.positionChangeTimestamp = 0;
    this.direction = null;
    this.enemyPixelSize= 32;
  }

  runLogic() {
    this.col -= this.width/666
  }

  draw(){
  context.fillStyle = this.color;
  context.fillRect(
    (this.col * tileSize), 
    (this.row * tileSize), 
    this.width,
    this.height,
    )
  }

  drawImage(){
    if (Date.now() > this.positionChangeTimestamp + 150) {
      
      this.positionX += 1;
      this.positionX %= 4;

      this.positionChangeTimestamp = Date.now();
    }

    context.drawImage(
      this.enemyImage,
      this.enemyPixelSize * this.positionX,
      this.enemyPixelSize * this.positionY,
      this.enemyPixelSize,
      this.enemyPixelSize,
      this.col * tileSize -10,
      (this.row * tileSize) - (this.enemyPixelSize/2),
      this.width,
      this.height
    );
  }
}