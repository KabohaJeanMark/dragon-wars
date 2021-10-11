import Phaser from 'phaser';
import blueButton1 from '../assets/blue_button02.png';
import blueButton2 from '../assets/blue_button03.png';
import logo from '../assets/right0.png';
import greyBox from '../assets/grey_box.png';
import checkedBox from '../assets/blue_boxCheckmark.png';
import ost from '../assets/got.mp3';
import background from '../assets/volcano.jpeg';
import player from '../assets/right0.png';
import blueDragon from '../assets/bluedragon.png';
import dragonEgg from '../assets/dragonegg.png';
import star from '../assets/star.png';
import left1 from '../assets/left1.png';
import left2 from '../assets/left2.png';
import left3 from '../assets/left3.png';
import left4 from '../assets/left4.png';
import left5 from '../assets/left5.png';
import left6 from '../assets/left6.png';
import right1 from '../assets/right1.png';
import right2 from '../assets/right2.png';
import right3 from '../assets/right3.png';
import right4 from '../assets/right4.png';
import right5 from '../assets/right5.png';
import right6 from '../assets/right6.png';
import up1 from '../assets/up1.png';
import up2 from '../assets/up2.png';
import up3 from '../assets/up3.png';
import up4 from '../assets/up4.png';
import up5 from '../assets/up5.png';
import up6 from '../assets/up6.png';
import down1 from '../assets/down1.png';
import down2 from '../assets/down2.png';
import down3 from '../assets/down3.png';
import down4 from '../assets/down4.png';
import down5 from '../assets/down5.png';
import down6 from '../assets/down6.png';



export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    // add logo image
    this.add.image(400, 200, 'logo');
    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);
    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);
    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });
    // remove progress bar when complete
    this.load.on(
      'complete',
      () => {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        this.ready();
      },
    );
    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
    // load assets needed in our game
    this.load.image('blueButton1', blueButton1);
    this.load.image('blueButton2', blueButton2);
    this.load.image('phaserLogo', logo);
    this.load.image('box', greyBox);
    this.load.image('checkedBox', checkedBox);
    this.load.audio('bgMusic', ost);
    // load assets for dragon movement
    this.load.image('background', background);
    this.load.image('player', player);
    this.load.image('blueDragon', blueDragon);
    this.load.image('treasure', dragonEgg);
    this.load.image('star', star);
    this.load.image('left1', left1);
    this.load.image('left2', left2);
    this.load.image('left3', left3);
    this.load.image('left4', left4);
    this.load.image('left5', left5);
    this.load.image('left6', left6);
    this.load.image('right1', right1);
    this.load.image('right2', right2);
    this.load.image('right3', right3);
    this.load.image('right4', right4);
    this.load.image('right5', right5);
    this.load.image('right6', right6);
    this.load.image('up1', up1);
    this.load.image('up2', up2);
    this.load.image('up3', up3);
    this.load.image('up4', up4);
    this.load.image('up5', up5);
    this.load.image('up6', up6);
    this.load.image('down1', down1);
    this.load.image('down2', down2);
    this.load.image('down3', down3);
    this.load.image('down4', down4);
    this.load.image('down5', down5);
    this.load.image('down6', down6);
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
