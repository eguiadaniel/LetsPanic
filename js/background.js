// Background

class Background {
  constructor() {
    this.dogImage = new Image();
    this.drawGrid();
    this.coordinatesArray = [];
    this.populateCoordinates();
    this.coordinatesValues = [];
    this.populateValues();
    this.flatValues = [];
    this.countPercentageValues = 0;

    //this.paintArray();
    //this.paintImage();
  }

  //Grid Lines

  drawGrid() {
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

  populateCoordinates() {
    for (let col = 0; col < tileCount; col++) {
      this.coordinatesArray[col] = new Array(tileCount);
    }
    for (let col = 0; col < tileCount; col++) {
      for (let row = 0; row < tileCount; row++) {
        this.coordinatesArray[col][row] = row;
      }
    }
  }

  // Initiate and Populate coordinatesValues

  populateValues() {
    for (let col = 0; col < tileCount; col++) {
      this.coordinatesValues[col] = new Array(tileCount);
    }
    for (let col = 0; col < tileCount; col++) {
      for (let row = 0; row < tileCount; row++) {
        this.coordinatesValues[col][row] = true;
      }
    }
  }

  // Paint array of arrays

  paintArray() {
    for (let col = 0; col < tileCount; col++) {
      for (let row = 0; row < tileCount; row++) {
        if (this.coordinatesValues[col][row] === true) {
          context.fillStyle = 'green';
          context.save();
          context.fillRect(
            this.coordinatesArray[col][col] * tileSize,
            this.coordinatesArray[col][row] * tileSize,
            tileSize,
            tileSize
          );
          context.restore();
        }
      }
    }
  }


  // Count false values percentage

  
  countPercentage() {
  this.flatValues = this.coordinatesValues.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator.concat(currentValue);
  },
  []);
  
  this.countPercentageValues = ((1 - this.flatValues.filter(Boolean).length / this.flatValues.length) * 100).toFixed(2);
  console.log(this.countPercentageValues)  
}
  
}
