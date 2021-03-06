import 'regenerator-runtime/runtime';
import Phaser from 'phaser';
import axios from 'axios';
import gameConfig from '../Config/config';
import Button from '../Objects/Button';

export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9tPsZn1y6N53NhZOXkYG/scores/';

let scores;

export const getPlayers = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const getResults = async () => {
  try {
    const data = await getPlayers();
    scores = data.result;
    return scores;
  } catch {
    return [];
  }
};

getResults();

export class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    const sortedScores = scores.sort((a, b) => ((a.score > b.score) ? -1 : 1));

    const topFive = sortedScores.slice(0, 5);

    this.menuButton = new Button(
      this,
      gameConfig.width / 2,
      gameConfig.height / 8,
      'blueButton1',
      'blueButton2',
      '<- Menu',
      'Title',
    );
    const div = document.createElement('div');
    const d1 = document.createElement('h1');
    d1.textContent = 'TOP SCORERS';
    d1.style.cssText = 'font-size: 3rem; color: #f00;';
    const div2 = document.createElement('div');
    div2.innerHTML = `
    <table class="table table-dark table-bordered">
    <thead class="thead-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Player</th>
        <th scope="col">Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>${topFive[0].user}</td>
        <td>${topFive[0].score}</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>${topFive[1].user}</td>
        <td>${topFive[1].score}</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>${topFive[2].user}</td>
        <td>${topFive[2].score}</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>${topFive[3].user}</td>
        <td>${topFive[3].score}</td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>${topFive[4].user}</td>
        <td>${topFive[4].score}</td>
      </tr>
    </tbody>
  </table>
    `;
    div.append(d1, div2);

    this.add.dom(gameConfig.width / 2, gameConfig.height / 2, div);
  }
}