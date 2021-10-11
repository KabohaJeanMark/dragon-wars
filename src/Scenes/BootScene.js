import Phaser from 'phaser';
import dragonLogo from '../assets/dragon_logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', dragonLogo);
  }

  create() {
    this.scene.start('Preloader');
  }
}
