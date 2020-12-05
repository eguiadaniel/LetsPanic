//Game


const explosion = new Audio(`audio/explosion.wav`)
const positive = new Audio(`audio/positive.ogg`)
const loose = new Audio(`audio/loose.mp3`)
const win = new Audio(`audio/win.mp3`)


class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player(0, 0, this.getRandomColor());
    this.setKeyBindings();
    this.enemies = [];
    this.enemysize = 1;
    this.lastEnemyTimeStamp = 0;
    this.score = 0;
    this.headerScore = [];
    this.percentage = 0;
    this.headerPercentage = [];
    this.lives = 3;
    this.headerLives;
    this.active = true;
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
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
    });
  }

  loop() {
    this.runLogic();
    this.draw();
    this.checkIntersections();
    //console.log(this.background.countFalseValues)

    if (this.percentage >= 10) {
      console.log('You won');
    }

    if (this.active && this.percentage < 100) {
      window.requestAnimationFrame(() => {
        this.loop();
      });
    } else {
      sectionScreenPlayElement.style.display = 'none';
      sectionScreenPlayingElement.style.display = 'none';
      sectionScreenPlayAgainElement.style.display = 'initial';
      loose.play()
      soundtrack.pause()
    }
  }

  runLogic() {
    // Changes value of coordinate when player is on that tile
    //this.background.counter--
    this.background.coordinatesValues[this.player.col][this.player.row] = false;
    this.background.countPercentage();

    //Player Move continiously
    this.player.runLogic()

    // Enemies populated depending time passed
    const currentTimeStamp = Date.now();
    if (currentTimeStamp > this.lastEnemyTimeStamp + 1300) {
      this.enemies.push(
        new Enemy(
          tileCount,
          Math.floor(Math.random() * tileCount),
          'orange',
          this.enemysize,
          this.enemysize
        )
      );
      this.lastEnemyTimeStamp = currentTimeStamp;
    }
    

    if(this.percentage <20){
      this.enemysize = 1;
    } else if (this.percentage <40){
      this.enemysize = this.percentage/15;
    } else if (this.percentage <70){
      this.enemysize = this.percentage/30;
    } else if (this.percentage <100){
      this.enemysize = 3;
    }
    

    for (let enemy of this.enemies) {
      enemy.runLogic();
    }

    if (this.lives <= 0) {
      this.active = false;
    }

    // DOM update

    this.headerScore = document.getElementById('header-score');
    this.headerScore.innerHTML = `<p><span style="font-size: 2rem;">${this.score}</span> points</p>\n`;

    this.headerPercentage = document.getElementById('header-percentage');
    this.headerPercentage.innerHTML = `<p><span style="font-size: 2rem;">${this.percentage}%</span></p>\n`;

    this.headerLives = document.getElementById('header-lives');
    //this.headerLives.innerHTML = '❤ ❤ ❤ ❤ ❤ ❤ ❤';

    if (this.lives === 3) {
      this.headerLives.innerText = '❤ ❤ ❤';
    } else if (this.lives === 2) {
      this.headerLives.innerText = '❤ ❤ 💀';
    } else if (this.lives === 1) {
      this.headerLives.innerText = '❤ 💀 💀';
    } else {
      this.headerLives.innerText = '💀 💀 💀';      
    }
  }

  draw() {
    context.clearRect(0, 0, width, height);

    //Array of tiles with true coordinates get painted
    //this.background.paintArray();
    this.background.drawImage();

    // Array of enemies get painted
    for (let enemy of this.enemies) {
      enemy.drawImage();
    }

    // Player gets painted
    this.player.drawImage();

    //Grid gets painted
    this.background.drawGrid();

    //Lives, Score, Percentage on Canvas
    
    //context.font = '64px sans-serif';
    //context.fillText(this.lives, 400, 300);

    this.score = 25 * this.background.countTotalValues;
    //context.fillText(this.score, 200, 300);

    this.percentage = this.background.countPercentageValues;
    this.percentageRender = `${this.percentage}%`;
    //context.fillText(this.percentageRender, 600, 300);
    

  }

  checkIntersections() {
    for (let enemy of this.enemies) {
      /* console.log(
        `player.col: ${this.player.col * tileSize} | enemy.col: ${enemy.col * tileSize}
          player.row: ${this.player.row * tileSize} | enemy.row: ${enemy.row * tileSize}`
      ); */
      if (
        this.player.col * tileSize + this.player.width >=
          enemy.col * tileSize &&
        this.player.col * tileSize <= enemy.col * tileSize + enemy.width &&
        this.player.row * tileSize + this.player.width >=
          enemy.row * tileSize &&
        this.player.row * tileSize <= enemy.row * tileSize + enemy.height
      ) {
        this.lives -= 1;
        const indexOfEnemies = this.enemies.indexOf(enemy);
        this.enemies.splice(indexOfEnemies, 1);
        explosion.play();
      }
    }
  }

  reset() {
    this.background = new Background();
    this.player = new Player(0, 0, 'purple');
    this.enemies = [];
    this.lastEnemyTimeStamp = 0;
    this.score = 0;
    this.percentage = 0;
    this.lives = 3;
    this.active = true;
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
