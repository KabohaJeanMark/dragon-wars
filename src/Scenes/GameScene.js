import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  // init() {
  //   this.playerSpeed = 1.5;
  //   this.enemyMaxY = 440;
  //   this.enemyMinY = 80;
  // }

  create() {
    const bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    // player is alive
    this.isPlayerAlive = true;

    this.player = this.physics.add.sprite(40, this.sys.game.config.height / 4, 'player', 6);
    this.player.setScale(0.5);
  }
}
