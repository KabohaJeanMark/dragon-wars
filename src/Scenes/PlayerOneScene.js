import Phaser from 'phaser';
import gameConfig from '../Config/config';

export default class PlayerOneScene extends Phaser.Scene {
  constructor() {
    super('PlayerOne');
    console.log('Player name input scene');
  }

  create() {
    const div = document.createElement('div');
    div.setAttribute('id', 'div');
    div.innerHTML = "<input type='text' id='nameInput' placeholder='Enter Player Name...' required/></br><button type='submit' id = 'nameButton'> Submit</button>";
    this.add.dom(gameConfig.width / 2, gameConfig.height / 2, div);

    const nameButton = document.getElementById('nameButton');
    nameButton.classList.add('btn', 'btn-danger', 'm-1', 'p-1');

    const playerNameText = document.getElementById('nameInput');
    playerNameText.classList.add('form-text', 'm-1', 'p-1');

    nameButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (playerNameText.value !== '') {
        gameConfig.user = playerNameText.value;
        this.scene.start('Game');
      } else {
        this.add.text(gameConfig.width / 3, gameConfig.height / 3, 'Please Type In Player Name', { fontSize: 30, fill: '#fff' });
      }
    });
  }
}
