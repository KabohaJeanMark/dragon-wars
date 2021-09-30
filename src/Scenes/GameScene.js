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
}
