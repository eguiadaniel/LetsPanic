const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Canvas & Tile sizes

const width = canvas.width;
const height = canvas.height;
const tileCount = 20;
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

  game.background.imageCover.addEventListener('load', () => {
    game.loop();
  });
});

triggerPlayAgainElement.addEventListener('click', () => {
  
  sectionScreenPlayElement.style.display = 'none';
  sectionScreenPlayingElement.style.display = 'initial';
  sectionScreenPlayAgainElement.style.display = 'none';

  game.reset();
  game.loop();
});

//

