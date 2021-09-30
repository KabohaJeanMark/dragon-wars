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

  // preload() {
  //   // load images
  //   this.load.image('logo', 'src/assets/logo.png');
  // }

  // create() {
  //   // this.add.image(400, 300, 'logo');
  // }
}
