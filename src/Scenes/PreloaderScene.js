import Phaser from 'phaser';

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
    this.load.image('blueButton1', 'src/assets/blue_button02.png');
    this.load.image('blueButton2', 'src/assets/blue_button03.png');
    this.load.image('phaserLogo', 'src/assets/right0.png');
    this.load.image('box', 'src/assets/grey_box.png');
    this.load.image('checkedBox', 'src/assets/blue_boxCheckmark.png');
    this.load.audio('bgMusic', ['src/assets/got.mp3']);
    // load assets for dragon movement
    this.load.image('background', 'src/assets/volcano.jpeg');
    this.load.image('player', 'src/assets/right0.png');
    this.load.image('blueDragon', 'src/assets/bluedragon.png');
    this.load.image('treasure', 'src/assets/dragonegg.png');
    this.load.image('star', 'src/assets/star.png');
    this.load.image('left1', 'src/assets/left1.png');
    this.load.image('left2', 'src/assets/left2.png');
    this.load.image('left3', 'src/assets/left3.png');
    this.load.image('left4', 'src/assets/left4.png');
    this.load.image('left5', 'src/assets/left5.png');
    this.load.image('left6', 'src/assets/left6.png');
    this.load.image('right1', 'src/assets/right1.png');
    this.load.image('right2', 'src/assets/right2.png');
    this.load.image('right3', 'src/assets/right3.png');
    this.load.image('right4', 'src/assets/right4.png');
    this.load.image('right5', 'src/assets/right5.png');
    this.load.image('right6', 'src/assets/right6.png');
    this.load.image('up1', 'src/assets/up1.png');
    this.load.image('up2', 'src/assets/up2.png');
    this.load.image('up3', 'src/assets/up3.png');
    this.load.image('up4', 'src/assets/up4.png');
    this.load.image('up5', 'src/assets/up5.png');
    this.load.image('up6', 'src/assets/up6.png');
    this.load.image('down1', 'src/assets/down1.png');
    this.load.image('down2', 'src/assets/down2.png');
    this.load.image('down3', 'src/assets/down3.png');
    this.load.image('down4', 'src/assets/down4.png');
    this.load.image('down5', 'src/assets/down5.png');
    this.load.image('down6', 'src/assets/down6.png');
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount += 1;
    console.log('ready');
    if (this.readyCount === 2) {
      this.scene.start('Title');
      console.log('ready-title');
    }
  }
}
