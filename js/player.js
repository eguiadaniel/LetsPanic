//Player

class Player {
 
  constructor (initialCol, initialRow, color) {
  this.col = initialCol;
  this.row = initialRow;
  this.color = color;
  this.width = tileSize;
  this.height = tileSize; 
  }
  
  moveUp() {
    this.row--;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.col--;
  }
  moveRight() {
    this.col++;
  }
 
  draw(){
  context.fillStyle = this.color;;
  context.fillRect(
    (this.col * tileSize) + (0.25 * tileSize),  
    (this.row * tileSize) + (0.25 * tileSize), 
    this.width * 0.5,
    this.height * 0.5
    )
  }
}