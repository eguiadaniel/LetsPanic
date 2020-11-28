const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Canvas & Tile sizes

const width = canvas.width;
const height = canvas.height;
const tileCount = 25;
const tileSize = width / tileCount;


// Instance of Game

const game = new Game();
game.loop();


/*
// Image

const dogImage = new Image();
dogImage.src = 'images/dogImage.jpg';

dogImage.addEventListener('load', () => {

  const sx = 15 * tileCount;
  const sy = 15 * tileCount;
  const sWidth = tileCount;
  const sHeight = tileCount;
  const dx = sx;
  const dy = sy;
  const dWidth = sWidth;
  const dHeight = sHeight;

   context.drawImage(dogImage, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight); 

})

*/
