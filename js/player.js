//Player

class Player {
  constructor(initialCol, initialRow, color) {
    this.col = initialCol;
    this.row = initialRow;
    this.color = color;
    this.width = tileSize;
    this.height = tileSize;
  }

  moveUp() {
    if (this.row > 0) {
      this.row--;
    }
  }
  moveDown() {
    if (this.row < tileCount - 1) {
      this.row++;
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.col--;
    }
  }
  moveRight() {
    if (this.col < tileCount - 1) {
      this.col++;
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
}
