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


let falseValues = game.background.coordinatesValues.filter(function (value) {
  return (value === false);
});

console.log(falseValues)

function sumFalseValues () {
    for (let col = 0; col < tileCount; col++) {
      for (let row = 0; row < tileCount; row++) {
        if(background.coordinatesValues[col][row] = false){
            totalValues += 1
        }}
      }
}


console.log(falseValues)

let flattened = game.background.coordinatesValues.reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]

console.log(flattened)