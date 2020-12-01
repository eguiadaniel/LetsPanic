// Images
//https://repl.it/@eguiadaniel/background-image#index.html



/*class Image {
  constructor() {
    this.image = new Image();
    this.image.src = 'images/dogImage.jpg';
  }
  
}
*/
  // Paint Image

function paintImage() {
  

const dogImageCover = new Image();
dogImageCover.src = 'images/dogImageCover.jpg';

    dogImageCover.addEventListener('load', () => {  
    for (let col = 0; col < tileCount; col++) {
      for (let row = 0; row < tileCount; row++) {
        if (coordinatesValues[col][row] === true) {
          context.drawImage(dogImageCover, 
          coordinatesArray[col][col] * tileSize, 
          coordinatesArray[col][row] * tileSize, 
          tileSize, 
          tileSize, 
          coordinatesArray[col][col] * tileSize, 
          coordinatesArray[col][row] * tileSize, 
          tileSize -1, 
          tileSize -1
            );}
        }
      }
    })
}
