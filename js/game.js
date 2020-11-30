//Game

 class Game {
   constructor () {
     this.background = new Background();
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
    this.checkIntersections();  

    window.requestAnimationFrame(() => {
      this.loop();
    })
  }

  runLogic () {
    // Changes value of coordinate when player is on that tile
    this.background.coordinatesValues[this.player.col][this.player.row] = false

    // Enemies populated depending time passed
    const currentTimeStamp = Date.now();
    if (currentTimeStamp > this.lastEnemyTimeStamp + 20000){
    this.enemies.push(new Enemy(tileCount, Math.floor(Math.random() * tileCount) , "orange", 2, 2));
    this.lastEnemyTimeStamp = currentTimeStamp;
    }
    for (let enemy of this.enemies) {
      enemy.runLogic();
    }; 

  }

  draw () {
    context.clearRect(0, 0, width,  height)
    
    //Array of tiles with true coordinates get painted
    this.background.paintArray();

    // Array of enemies get painted
    for (let enemy of this.enemies) {
      enemy.draw();
    };

    // Player gets painted
    this.player.draw();

    //Grid gets painted
    this.background.drawGrid()
  }

 
  checkIntersections () {
    
    for (let enemy of this.enemies){
      console.log(`player.col: ${this.player.col*tileSize} | enemy.col: ${enemy.col*tileSize}`)
      if (this.player.col*tileSize + this.player.width >= enemy.col*tileSize) 
      {
        alert('BOOOOM!')
      }
    }

  }
  
}

/*
 checkIntersectionBetweenBulletsAndEnemies () {
    for (let bullet of this.bullets) {
      for (let enemy of this.enemies) {
        if (
          bullet.x >= enemy.x - bullet.width &&
          bullet.y >= enemy.y &&
          bullet.y <= enemy.y + enemy.height
        ) {
          const indexOfBullet = this.bullets.indexOf(bullet);
          const indexOfEnemy = this.enemies.indexOf(enemy);
          this.bullets.splice(indexOfBullet, 1);
          this.enemies.splice(indexOfEnemy, 1);
          this.score += 10;
        }
      }
    }
  }
        */