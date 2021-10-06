import Phaser from 'phaser';
import axios from 'axios';
import gameConfig from '../Config/config';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9tPsZn1y6N53NhZOXkYG/scores/';

const getResults = async () => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data.result;
};

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
    console.log('Leaderboard scene');
  }

  create() {
    const scores = getResults();
    console.log(scores);
  }
}