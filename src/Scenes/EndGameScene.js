// import 'regenerator-runtime/runtime'
import Phaser from 'phaser';
import axios from 'axios';
import gameConfig from '../Config/config';
import { playerInfo } from './GameScene';

export default class EndGameScene extends Phaser.Scene {
  constructor() {
    super('EndGame');
    console.log('EndGame scene');
  }

  create() {
    const div = document.createElement('div');
    div.setAttribute('id', 'div');

    const header = document.createElement('hi');
    header.setAttribute('id', 'gameOverHeader');
    header.textContent = 'GAME OVER';

    const playerScore = document.createElement('p');
    playerScore.style.cssText = 'color: #fff; font-size: 3rem; align-text: center';
    playerScore.textContent = `Player ${playerInfo.user}, your Score is ${playerInfo.score}`;

    div.append(header, playerScore);
    this.add.dom(gameConfig.width / 2, gameConfig.height / 3, div);

    // this.add.text(
    //   gameConfig.width / 3,
    //   gameConfig.height / 3,
    //   `Player ${playerInfo.user}, your score is ${playerInfo.score}`,
    //   { fontSize: '3rem', fill: '#fff' },
    // );

    // const playAgainButton = this.add.text(
    //   gameConfig.width / 2,
    //   gameConfig.height / 4,
    //   'Play Again',
    //   { fontSize: '5rem', fill: '#f00' },
    // );
    // playAgainButton.setInteractive();

    // playAgainButton.on('pointerdown', () => {
    //   this.scene.stop();
    //   this.scene.start('Title');
    // });

    const postGameScore = async (scoreInfo) => {
      const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9tPsZn1y6N53NhZOXkYG/scores/';
      const response = await axios.post(baseUrl, scoreInfo);
      return response.data;
    };

    if (playerInfo.score) {
      postGameScore(playerInfo);
    }
  }
}