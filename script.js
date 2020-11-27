
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Canvas & Tile sizes

const width = canvas.width;
const height = canvas.height;
const tileCount = 100;
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

//Players

class Players {

  constructor(initialCol, initialRow) {
    this.col = initialCol;
    this.row = initialRow;
    this.width = tileSize;
    this.height = tileSize;
  }

  moveUp() {
    this.row--;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.col--;
  }
  moveRight() {
    this.col++;
  }

  draw() {
    context.fillStyle = 'blue';
    context.fillRect(
      (this.col * tileSize) + (0.25 * tileSize),
      (this.row * tileSize) + (0.25 * tileSize),
      this.width * 0.5,
      this.height * 0.5
    )
  }
}


const player = new Players(0, 0)

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


// Key bindings

document.addEventListener('keydown', event => {
  event.preventDefault();

  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 38:
      player.moveUp();
      break;
    case 39:
      player.moveRight();
      break;
    case 40:
      player.moveDown();
      break;
  }

  drawEverything();
});

function drawEverything() {
  coordinatesValues[player.col][player.row] = false
  context.clearRect(0, 0, width, height);
  paintArray();
  drawGrid();
  player.draw();
  //console.log(player.row, player.col)
  //console.log(coordinatesValues)



}

drawEverything();


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

/*
console.log(coordinatesArray)
console.log(coordinatesValues)
console.log(player.row, player.col)
console.log(coordinatesValues[player.row][player.col])
console.log(coordinatesArray[player.row][player.col])
*/



