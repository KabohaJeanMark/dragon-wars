import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.playerSpeed = 1.5;
    this.enemyMaxY = 440;
    this.enemyMinY = 80;
  }

  create() {
    const bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    // player is alive
    this.isPlayerAlive = true;

    this.player = this.physics.add.sprite(40, this.sys.game.config.height / 4, 'player', 6);
    this.player.setScale(0.5);

    // goal
    this.treasure = this.add.sprite(this.sys.game.config.width - 60, this.sys.game.config.height / 4, 'treasure');
    this.treasure.setScale(0.6);

    // group of enemies
    this.enemies = this.add.group({
      key: 'blueDragon',
      repeat: 4,
      setXY: {
        x: 150,
        y: 100,
        stepX: 180,
        stepY: 60,
      },
    });

    const enemies = this.enemies.getChildren();

    enemies.forEach((dragon) => {
      dragon.setScale(0.9);
    });

    // scale enemies. Phaser.Actions.ScaleXY helps us scale each array element
    Phaser.Actions.ScaleXY(enemies, -0.5, -0.5);

    // set speeds. Phaser.Actions.Call helps us call each a function on array element
    Phaser.Actions.Call(enemies, (enemy) => {
      enemy.speed = Math.random() * 2 + 1;
    }, this);

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
  }
}
