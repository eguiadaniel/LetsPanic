//context.fillRect(100,100,100,100)


if ( i % 2 === 0) {
context.fillStyle = 'orange';
} else {
context.fillStyle = 'blue';
}


for (let x = 0; x < 10; x++) {
  for (let y = 0; y <10; y++) {
    if ( (x + y) % 2 === 0) {
    context.fillStyle = 'orange';
    } else {
    context.fillStyle = 'blue';
    }
    context.fillRect ( y * 50, x * 50, 50, 50 )
  }
}

context.fillStyle = 'white';
context.fillRect(0,0,1000,1000)



context.strokeStyle = 'red';
context.lineWidth = 2;

context.beginPath();
context.moveTo(100,100);
context.lineTo(200,200)
context.lineTo(450, 250)
context.closePath();
context.stroke()



class Character {
  constructor(initialCol, initalRow) {
    this.col = initialCol;
    this.row = initalRow;
    
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
}

class Circles {
  constructor (x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw () {
  context.fillStyle = 'tomato'
  context.beginPath();
  context.arc(this.x * tileSize, this.y * tileSize, this.radius, 0, Math.PI * 2)
  context.closePath()
  context.fill()
  }

}

console.log(`-------------coordinatesFiltered------------`);
let coordinatesFiltered = coordinatesArray.filter ( (value, index) => {
  if (value.row === 0){
    return true
  } else {
    return false
  }

});
console.log(coordinatesFiltered);

