// Enemy

class Enemy {

  constructor (initialCol, initialRow, color, width, height ) {
    this.col = initialCol  - (width/2);
    this.row = initialRow  - (height/2);
    this.color = color;
    this.width = width * tileSize;
    this.height = height * tileSize; 
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
}