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

//Game
 class Game {
   constructor () {
     this.player = new Player (0,0,"purple");
     this.setKeyBindings();
     this.enemies = [ ];
     this.lastEnemyTimeStamp = 0;
   }
  
  setKeyBindings() {
    window.addEventListener ('keydown', event => {
      switch (event.keyCode) {
    case 37:
      this.player.moveLeft();
      break;
    case 38:
      this.player.moveUp();
      break;
    case 39:
      this.player.moveRight();
      break;
    case 40:
      this.player.moveDown();
      break;
      }
    })
  }

  loop () {
    this.runLogic();
    this.draw();
    setTimeout(() => {
      this.loop();
    }, 1000 / 30);
  }

  runLogic () {
    const currentTimeStamp = Date.now();
    if (currentTimeStamp > this.lastEnemyTimeStamp + 2000){
    this.enemies.push(new Enemy(tileCount, Math.floor(Math.random() * tileCount) , "orange", 2, 2));
    this.lastEnemyTimeStamp = currentTimeStamp;
    }
    for (let enemy of this.enemies) {
      enemy.runLogic();
    }; 

  }

  draw () {
    coordinatesValues[this.player.col][this.player.row] = false
    context.clearRect(0, 0, width,  height)
    paintArray();
    for (let enemy of this.enemies) {
      enemy.draw();
    };

    this.player.draw();
    drawGrid()
  }
}

function drawEverything() {
  coordinatesValues[player.col][player.row] = false
  context.clearRect(0, 0, width, height);
  paintArray();
  drawGrid();
  player.draw();
  //console.log(player.row, player.col)
  //console.log(coordinatesValues)



}


//Player

class Player {
 
  constructor (initialCol, initialRow, color) {
  this.col = initialCol;
  this.row = initialRow;
  this.color = color;
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
  context.fillStyle = this.color;;
  context.fillRect(
    (this.col * tileSize) + (0.25 * tileSize),  
    (this.row * tileSize) + (0.25 * tileSize), 
    this.width * 0.5,
    this.height * 0.5
    )
  }
}

// Enemy

class Enemy {

  constructor (initialCol, initialRow, color, width, height ) {
    this.col = initialCol - (width/2);
    this.row = initialRow - (height/2);
    this.color = color;
    this.width = width * tileSize;
    this.height = height * tileSize; 
  }

  runLogic() {
    this.col -= this.width/666
  }

  draw(){
  context.fillStyle = this.color;
  context.fillRect(
    (this.col * tileSize), 
    (this.row * tileSize), 
    this.width,
    this.height,
    )
  }
}


// Instance of Game

const game = new Game();
game.loop();


// Loops



function createloopRequestAnimationFrame (callback) {
  window.requestAnimationFrame (() => {
    callback();
    createloopSetimeout(callback);
  });
}
