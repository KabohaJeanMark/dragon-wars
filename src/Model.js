export default class Model {
  constructor() {
    this.ingamesoundOn = true;
    this.ingamemusicOn = true;
    this.ingamebgMusicPlaying = false;
  }

  set musicOn(value) {
    this.ingamemusicOn = value;
  }

  get musicOn() {
    return this.ingamemusicOn;
  }

  set soundOn(value) {
    this.ingamesoundOn = value;
  }

  get soundOn() {
    return this.ingamesoundOn;
  }

  set bgMusicPlaying(value) {
    this.ingamebgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this.ingamebgMusicPlaying;
  }
}
