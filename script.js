
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// Canvas & Tile sizes

const width = canvas.width;
const height = canvas.height;
const tileCount = 21;
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


const player = new Players(10,10)

// Set Initial Array of coordinates

let coordinatesArray = new Array;

for (let row = 0; row < tileCount; row++){
  for (let column = 0; column < tileCount; column++){
  let newCoordinate = {      
    'row': row,
    'col': column,
    //'width': tileSize,
    //'height': tileSize   
  }
  coordinatesArray.push(newCoordinate);
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
  context.clearRect(0, 0, width, height);
  drawGrid();
  touchedCoordinates();
  paintArray();
  player.draw();
}

drawEverything();






// Eliminate object from coordinatesArray

//item.col === player.col
//item.row === player.col

// I want only to remove { row: 3, col: 7}, but it deletes all the objects with row:3 and col: 7.  Podría converitr cada objeto en un string y limpiarlo dejando sólo números. Después convertir la posición del jugador en string y eliminar ese valor.

function touchedCoordinates (){
let touchedCoordinates = coordinatesArray.filter(function(value, index){
 return (value.row !== player.row && value.col !== player.col); 
 });
coordinatesArray = touchedCoordinates;
}


// Paint Canvas from coordinatesArray

function paintArray () {
for ( let i = 0; i < coordinatesArray.length; i++) {
context.fillStyle = 'green';
context.fillRect(
  coordinatesArray[i].row * tileSize,
  coordinatesArray[i].col * tileSize,
  tileSize,
  tileSize);
}
}


/*
var workItems =   [
    { "id": 2616, "category": ".category-copy .category-beauty .category-fashion"}, //this is a match
    { "id": 1505, "category": ".category-beauty"}, // NOT
    { "id": 1500, "category": ".category-beauty .category-fashion"}, // NOT
    { "id": 692, "category": ".category-stills .category-retouching"}, // NOT
    { "id": 593, "category": ".category-beauty .category-capture .category-fashion .category-product .category-stills .category-stills-retouching "}, // NOT
    { "id": 636, "category": ".category-beauty .category-copy .category-fashion"}, //this is a match
    { "id": 547, "category": ".category-fashion .category-lifestyle .category-stills .category-stills-retouching "}, // NOT
    { "id": 588, "category": ".category-capture .category-recent-work .category-copy .category-beauty .category-fashion"} //this is a match
];

var	filtersArray = [".category-beauty", ".category-fashion", ".category-copy"];

var filtered = workItems.filter(function(element) {
   var cats = element.category.split(' ');
   
    return cats.filter(function(cat) {
       return filtersArray.indexOf(cat) > -1;
    }).length === filtersArray.length;
});
	
console.log(filtered);

*/








