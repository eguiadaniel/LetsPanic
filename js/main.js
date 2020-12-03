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

const triggerPlayElement = document.getElementById('trigger-play');
const triggerPlayAgainElement = document.getElementById('trigger-play-again');

const sectionScreenPlayElement = document.getElementById('screen-play');
const sectionScreenPlayingElement = document.getElementById('screen-playing');
const sectionScreenPlayAgainElement = document.getElementById(
  'screen-play-again'
);

triggerPlayElement.addEventListener('click', () => {
  sectionScreenPlayElement.style.display = 'none';
  sectionScreenPlayingElement.style.display = 'initial';
  sectionScreenPlayAgainElement.style.display = 'none';

  game.loop();
});

triggerPlayAgainElement.addEventListener('click', () => {
  debugger;
  sectionScreenPlayElement.style.display = 'none';
  sectionScreenPlayingElement.style.display = 'initial';
  sectionScreenPlayAgainElement.style.display = 'none';

  game.active = true;
  game.loop();
});

//Image
/*
const dogImageCover = new Image();
dogImageCover.src = 'images/dogImageCover.jpg';

dogImageCover.addEventListener('load', () => {
  for (let col = 0; col < tileCount; col++) {
    for (let row = 0; row < tileCount; row++) {
      if (coordinatesValues[col][row] === true) {
        context.drawImage(
          dogImageCover,
          coordinatesArray[col][col] * tileSize,
          coordinatesArray[col][row] * tileSize,
          tileSize,
          tileSize,
          coordinatesArray[col][col] * tileSize,
          coordinatesArray[col][row] * tileSize,
          tileSize - 5,
          tileSize - 5
        );
      }
    }
  }
});
*/
