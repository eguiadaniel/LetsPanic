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



let totalValues = 0;

function sumFalseValues () {
    for (let col = 0; col < tileCount; col++) {
      for (let row = 0; row < tileCount; row++) {
        if(this.coordinatesValues[col][row] = false){
            totalValues += 1
        }}
      }
}

console.log(totalValues)