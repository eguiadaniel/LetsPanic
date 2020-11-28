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