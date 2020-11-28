// Background

class Image {
  constructor() {
    this.image = new Image();
    this.image.src = 'images/dogImage.jpg';
  }

  // Paint Image
 
  paintImage() {
    
      for (let col = 0; col < tileCount; col++) {
        for (let row = 0; row < tileCount; row++) {
          if (this.coordinatesValues[col][row] === true) {

            const sx = this.coordinatesArray[col][col] * tileSize;
            const sy = this.coordinatesArray[col][row] * tileSize;
            const sWidth = tileSize;
            const sHeight = tileSize;
            const dx = sx;
            const dy = sy;
            const dWidth = sWidth;
            const dHeight = sHeight;

            context.drawImage(this.image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

          }
        }
      }
    }

}