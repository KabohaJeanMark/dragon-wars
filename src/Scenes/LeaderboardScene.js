import Phaser from 'phaser';
import axios from 'axios';
import gameConfig from '../Config/config';
import Button from '../Objects/Button';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9tPsZn1y6N53NhZOXkYG/scores/';

let scores;

const getResults = async () => {
  const response = await axios.get(url);
  return response.data.result;
};

getResults()
  .then((data) => {
    scores = data;
  }).catch((err) => {
    console.log(err.message);
  });

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
    console.log('Leaderboard scene');
  }

  create() {
    console.log(scores);
    const sortedScores = scores.sort((a, b) => ((a.score > b.score) ? -1 : 1));
    console.log(sortedScores);

    const topFive = sortedScores.slice(0,5);
    console.log(topFive);

    this.menuButton = new Button(
      this,
      gameConfig.width / 2,
      gameConfig.height / 4,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Title',
    );
  }
}