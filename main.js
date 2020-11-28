const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Canvas & Tile sizes

const width = canvas.width;
const height = canvas.height;
const tileCount = 25;
const tileSize = width / tileCount;


//Grid Lines

function drawGrid() {
  context.lineWidth = 0.5;

  // Draw the vertical lines
  for (let x = 0; x <= height; x += tileSize) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }

  // Draw the horizontal lines
  for (let y = 0; y <= width; y += tileSize) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
}

// Initiate and Populate coordinatesArray 

const coordinatesArray = [];

for (let col = 0; col < tileCount; col++) {
  coordinatesArray[col] = new Array(tileCount)
  //coordinatesArray[row] = [...coordinatesArray]
}
for (let col = 0; col < tileCount; col++) {
  for (let row = 0; row < tileCount; row++) {
    coordinatesArray[col][row] = row
  }
}

// Initiate and Populate coordinatesValues

const coordinatesValues = [];
for (let col = 0; col < tileCount; col++) {
  coordinatesValues[col] = new Array(tileCount)
}
for (let col = 0; col < tileCount; col++) {
  for (let row = 0; row < tileCount; row++) {
    coordinatesValues[col][row] = true
  }
}

// Paint array of arrays

function paintArray() {
  for (let col = 0; col < tileCount; col++) {
    for (let row = 0; row < tileCount; row++) {
      if (coordinatesValues[col][row] === true) {
        //console.log(coordinatesValues[col][row])
        //console.log(`${coordinatesArray[col][row]}:${coordinatesArray[col][row]}`)
        context.fillStyle = 'green';
        context.fillRect(
          coordinatesArray[col][col] * tileSize,
          coordinatesArray[col][row] * tileSize,
          tileSize,
          tileSize);
      }
    }
  }
}

// Instance of Game

const game = new Game();
game.loop();
