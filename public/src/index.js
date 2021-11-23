import Phaser from "phaser";
import Game from "./Game";

const config = {
  type: Phaser.AUTO,
  backgroundColor: "87ceeb",
  audio: {
    disableWebAudio: true,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "game",
    width: 800,
    height: 600,
  },
  physics: {
    default: "arcade",
    arcade: {
      fps: 60,
      gravity: { y: 500 },
      debug: true,
    },
  },
  scene: [Game],
};

const game = new Phaser.Game(config);

// function preload() {
//   this.load.image("logo", logoUrl);
// }

// function create() {
//   this.add.image(400, 300, "logo");
// }

// function update() {}
