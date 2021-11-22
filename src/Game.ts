//import logoUrl from "../public/sprites/phaser-logo.png";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  init() {
    console.log("init");
  }

  preload() {
    this.load.image("logo", "sprites/phaser-logo.png");
  }

  create() {
    console.log("create");
    this.add.image(400, 300, "logo");
  }
}
