import Phaser from "phaser";

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
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {}

function create() {}

function update() {}
