// Initial empty array

tileCount = 25;
let myArray1 = new Array(tileCount);

for (let i= 0; i < tileCount; i++){
  myArray1[i] = new Array(tileCount)
}


// populate array 
for (let i = 0; i < tileCount; i++){
  for (let j = 0; j < tileCount; j++){
  myArray1[i][j] = j
}
}

myArray1[0][0] = "a";
myArray1[4][4] = "z";
console.log(myArray1)

/*
let coordinatesArray = new Array;

for (let row = 0; row < tileCount; row++){
  for (let column = 0; column < tileCount; column++){
  let newCoordinate = {      
    'row': row,
    'col': column, 
  }
  coordinatesArray.push(newCoordinate);
}
}
*/