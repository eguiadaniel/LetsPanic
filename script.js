
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Canvas & Tile sizes

const width = canvas.width;
const height = canvas.height;
const tileCount = 10;
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
 
  constructor (initialCol, initialRow) {
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

  draw(){
  context.fillStyle = 'blue';
  context.fillRect(
    (this.col * tileSize) + (0.25 * tileSize), 
    (this.row * tileSize) + (0.25 * tileSize), 
    this.width * 0.5,
    this.height * 0.5
    )
  }
}


const player = new Players(2,2)

// Initial empty array of arrays

const coordinatesArray = [];

for (let i= 0; i < tileCount; i++){
  // coordinatesArray[i] = new Array(tileCount)
  coordinatesArray[i] = [...coordinatesArray]
}
console.log('------------------coordinatesArray-INITIAL----------------')
console.log(coordinatesArray)

// Populate array of arrays

for (let i = 0; i < tileCount; i++){
  for (let j = 0; j < tileCount; j++){
  coordinatesArray[i][j] = j
}
}

// First time Passed Over array
let coordinatesStatus = [...coordinatesArray];


console.log('------------------coordinatesArray-POPULATED----------------')
console.log(coordinatesArray)
console.log('------------------coordinatesStaus-SPREAD/COPY----------------')
console.log(coordinatesStatus)



function firstOverArray () {
for (let i = 0; i < tileCount; i++){
  for (let j = 0; j < tileCount; j++){
    coordinatesStatus[i][j] = false;
  }
}
}

// ERROR HERE - why if i only change the coordinateStatus variable it changes both?
// firstOverArray()
coordinatesStatus[0][0] = "WHY CLONE?";


console.log('------------------coordinatesArray-CLONE???----------------')
console.log(coordinatesArray)
console.log('------------------coordinatesStaus-CLONE???----------------')
console.log(coordinatesStatus)

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

  console.log(player.row, player.col)
  drawEverything();
});

function drawEverything() {
  context.clearRect(0, 0, width, height);
  paintArray();
  drawGrid();
  player.draw();
}

drawEverything();


// Paint array of arrays

function paintArray () {
for (let i = 0; i < tileCount; i++){
  for (let j = 0; j < tileCount; j++){
  context.fillStyle = 'green';
  context.fillRect(
  coordinatesArray[i][i] * tileSize,
  coordinatesArray[i][j] * tileSize,
  tileSize,
  tileSize);
  }
}
}

// Update Passed Over array to False

function statusUpdate () {
for (let i = 0; i < tileCount; i++){
  for (let j = 0; j < tileCount; j++){
    coordinatesStatus[i][j] = false
    }
  }
}




