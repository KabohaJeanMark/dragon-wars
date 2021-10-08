import 'regenerator-runtime/runtime';
import Phaser from 'phaser';
import axios from 'axios';
import gameConfig from '../Config/config';
import { playerInfo } from './GameScene';

export const postGameScore = async (scoreInfo) => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9tPsZn1y6N53NhZOXkYG/scores/';
  const response = await axios.post(baseUrl, scoreInfo);
  return response.data;
};

export const getResultofPost = async () => {
  try {
    const data = await postGameScore();
    const { result } = data;
    return result;
  } catch {
    return [{
      error: 'The post of the score was not successful',
    }];
  }
};

if (playerInfo.score) {
  postGameScore(playerInfo);
}

export class EndGameScene extends Phaser.Scene {
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
    playerScore.style.cssText = 'color: #fff; font-size: 3rem; align-text: center; margin: 0.5rem; padding: 0.4rem;';
    playerScore.textContent = `Player ${playerInfo.user}, your Score is ${playerInfo.score}`;

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.classList.add('btn', 'p-1', 'm-1');
    playAgainButton.style.cssText = 'color: #fff; background: rgb(44, 124, 161);';

    playAgainButton.addEventListener('click', () => {
      this.scene.start('Title');
    });

    div.append(header, playerScore, playAgainButton);
    this.add.dom(gameConfig.width / 2, gameConfig.height / 3, div);
  }
}