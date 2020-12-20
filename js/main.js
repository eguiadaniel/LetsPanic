const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Canvas & Tile sizes

const width = canvas.width;
const height = canvas.height;
const tileCount = 25;
const tileSize = width / tileCount;

// Instance of Game

const game = new Game();
const soundtrack = new Audio(`audio/soundtrack.wav`);

game.loop();

const triggerPlayElement = document.getElementById('trigger-play');
const triggerPlayAgainElement = document.getElementById('trigger-play-again');
const triggerPlayAgainWinElement = document.getElementById(
  'trigger-play-again-win'
);

const sectionScreenPlayElement = document.getElementById('screen-play');
const sectionScreenPlayingElement = document.getElementById('screen-playing');
const sectionScreenPlayAgainElement = document.getElementById(
  'screen-play-again'
);
const sectionScreenWinElement = document.getElementById('screen-win');

triggerPlayElement.addEventListener('click', () => {
  sectionScreenPlayElement.style.display = 'none';
  sectionScreenPlayingElement.style.display = 'initial';
  sectionScreenPlayAgainElement.style.display = 'none';
  sectionScreenWinElement.style.display = 'none';

  soundtrack.play();

  game.background.imageCover.addEventListener('load', () => {
    game.loop();
  });
});

triggerPlayAgainElement.addEventListener('click', () => {
  //debugger;
  sectionScreenPlayElement.style.display = 'none';
  sectionScreenPlayingElement.style.display = 'initial';
  sectionScreenPlayAgainElement.style.display = 'none';
  sectionScreenWinElement.style.display = 'none';

  soundtrack.play();
  loose.pause();

  game.reset();
  game.loop();
});

triggerPlayAgainWinElement.addEventListener('click', () => {
  //debugger;
  sectionScreenPlayElement.style.display = 'none';
  sectionScreenPlayingElement.style.display = 'initial';
  sectionScreenPlayAgainElement.style.display = 'none';
  sectionScreenWinElement.style.display = 'none';

  soundtrack.play();
  loose.pause();

  game.reset();
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

/*
const htmlValue = `"<div id=\"header-score\" class=\"col\" style=\"text-align: center\">\n            <p>Points: <span>${game.percentage}</span></p>\n          </div>"`;

<p>Points: <span>${game.percentage}</span></p>\n

var element = document.getElementById("aaa");
        element.innerHTML = "1";
*/
