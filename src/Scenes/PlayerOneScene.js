import Phaser from 'phaser';
import gameConfig from '../Config/config';
import GameScene from './GameScene';

export default class PlayerOneScene extends Phaser.Scene {
  constructor() {
    super('PlayerOne');
    console.log('Player name input scene');
  }

  create() {
    const bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    const div = document.createElement('div');
    div.setAttribute('id', 'div');
    div.innerHTML = "<input type='text' id='nameInput' placeholder='Enter Player Name...' required/></br><button type='submit' id = 'nameButton'> Submit</button>";
    this.add.dom(gameConfig.width / 2, gameConfig.height / 2, div);

    const nameButton = document.getElementById('nameButton');

    nameButton.addEventListener('click', (e) => {
      e.preventDefault();
      const playerNameText = document.querySelector('.nameInput');
      if (playerNameText.value !== '') {
        gameConfig.user = playerNameText.value;
        this.scene.add('Game', GameScene);
        this.scene.start('Game');
      }
    });
  }
}
