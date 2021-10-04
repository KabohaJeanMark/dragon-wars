import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.playerSpeed = 1.5;
    this.enemyMaxY = 600;
    this.enemyMinY = 80;
  }

  create() {
    const bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    // initialize the score
    let score = 0;
    const scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });

    // player is alive
    this.isPlayerAlive = true;

    this.player = this.physics.add.sprite(40, this.sys.game.config.height / 3, 'player', 6);
    this.player.setScale(0.9);
    this.player.setCollideWorldBounds(true);
    // reduce colision area
    this.player.body.setSize(60, 60, 8, 8);

    // goal
    this.treasure = this.physics.add.sprite(this.sys.game.config.width - 120, this.sys.game.config.height / 3, 'treasure');
    this.treasure.setScale(0.6);

    // group of enemies
    this.enemies = this.physics.add.group({
      key: 'blueDragon',
      repeat: 4,
      setXY: {
        x: 300,
        y: 100,
        stepX: 300,
        stepY: 60,
      },
    });

    const enemies = this.enemies.getChildren();

    enemies.forEach((enemy) => {
      enemy.setScale(1.1);
      enemy.speed = Math.random() * 2 + 2;
    });

    // group of stars, dragon food
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 4,
      setXY: {
        x: 300,
        y: 100,
        stepX: 300,
        stepY: 80,
      },
    });

    function collectStar(player, star) {
      star.disableBody(true, true);
      score += 25;
      scoreText.setText(`Score: ${score}`);

      if (this.stars.countActive(true) === 0) {
        //  A new batch of stars to collect
        this.stars.children.iterate((child) => {
          child.enableBody(true, child.x, 200, true, true);
        });
      }
    }

    this.physics.add.overlap(this.player, this.stars, collectStar, null, this);

    // enable keyboard inputs
    this.cursors = this.input.keyboard.createCursorKeys();

    // animation movements
    this.anims.create({
      key: 'left',
      frames: [{ key: 'left1' }, { key: 'left2' }, { key: 'left3' }, { key: 'left4' }, { key: 'left5' }, { key: 'left6' }],
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'right',
      frames: [{ key: 'right1' }, { key: 'right2' }, { key: 'right3' }, { key: 'right4' }, { key: 'right5' }, { key: 'right6' }],
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'right1' }],
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: 'up',
      frames: [{ key: 'up1' }, { key: 'up2' }, { key: 'up3' }, { key: 'up4' }, { key: 'up5' }, { key: 'up6' }],
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'down',
      frames: [{ key: 'down1' }, { key: 'down2' }, { key: 'down3' }, { key: 'down4' }, { key: 'down5' }, { key: 'down6' }],
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    if (!this.isPlayerAlive) {
      return;
    }

    // ADD MOVEMENT BASED ON THE KEYBOARD
    this.player.body.setVelocity(0);
    // Horizontal movement
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-80);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(80);
      this.player.anims.play('right', true);
    }
    // Vertical movement
    if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-80);
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(80);
      this.player.anims.play('down', true);
    }

    // enemy movement
    const enemies = this.enemies.getChildren();
    const numEnemies = enemies.length;
    for (let i = 0; i < numEnemies; i += 1) {
      // move enemies
      enemies[i].y += enemies[i].speed;
      // reverse movement if reached the edges
      if (enemies[i].y >= this.enemyMaxY && enemies[i].speed > 0) {
        enemies[i].speed *= -1;
      } else if (enemies[i].y <= this.enemyMinY && enemies[i].speed < 0) {
        enemies[i].speed *= -1;
      }

      // add collision
      this.physics.add.collider(this.player, enemies[i], this.hitDragon, null, this);
    }
  }

  hitDragon(player, enemy) {
    console.log('hit this function');
    this.physics.pause();
    player.anims.play('turn', true);
  }
}
