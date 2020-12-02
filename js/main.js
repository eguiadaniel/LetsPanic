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


// Count true values


  let flatFalseValuesMain = game.background.coordinatesValues.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator.concat(currentValue);
  },
  []);

  let countFalseValues = ((1 - flatFalseValuesMain.filter(Boolean).length / flatFalseValuesMain.length) * 100).toFixed(2);


/*
let flattened = game.background.coordinatesValues.reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]
*/

console.log(flatFalseValuesMain)
console.log(countFalseValues)