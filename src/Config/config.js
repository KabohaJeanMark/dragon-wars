import Phaser from "phaser";
const gameConfig = {
  type: Phaser.AUTO,
  width:  1366,
  height: 741,
  parent: "canvas",
  dom: {
    createContainer: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 600 },
    },
  },
  user: "",
};

export default gameConfig;
