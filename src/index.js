import Phaser from 'phaser';
import Model from './Model';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import EndGameScene from './Scenes/EndGameScene';
import PlayerOneScene from './Scenes/PlayerOneScene';
import LeaderboardScene from './Scenes/LeaderboardScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('PlayerOne', PlayerOneScene);
    this.scene.add('Game', GameScene);
    this.scene.add('EndGame', EndGameScene);
    this.scene.add('Leaderboard', LeaderboardScene);
    this.scene.start('Boot');
  }
}
window.game = new Game();
