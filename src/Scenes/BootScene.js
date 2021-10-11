import Phaser from 'phaser';
import dragon_logo from '../assets/dragon_logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', dragon_logo);
  }

  create() {
    this.scene.start('Preloader');
  }
}
