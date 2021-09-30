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
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0,0);
  }
}
