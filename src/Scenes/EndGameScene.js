import Phaser from 'phaser';
import gameConfig from '../Config/config';
import GameScene from './GameScene';

export default class EndGameScene extends Phaser.Scene {
  constructor() {
    super('EndGame');
    console.log('EndGame scene');
  }
}