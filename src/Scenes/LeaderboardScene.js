import Phaser from 'phaser';
import axios from 'axios';
import gameConfig from '../Config/config';

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
  }
}