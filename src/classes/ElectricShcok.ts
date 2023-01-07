import { createCanvasImage, getCanvasAndContext } from "../canvas";
import { Position, Size } from "../types/gameTypes";
import { LevelEnemy } from "../types/levelTypes";
import { init as resetGame } from "../main";
import electricShock from "../assets/img/electric-shock.png";

import Bullet from "./Bullet";
import Enemy from "./Enemy";

const ElectricShockImage = createCanvasImage(electricShock);

class ElectricShock extends Enemy {
  private context: CanvasRenderingContext2D;

  public size: Size;

  constructor(public position: Position, public data: LevelEnemy, public bullet: Bullet) {
    const size: Size = {
      width: 20,
      height: 20,
    };

    super(size, position, bullet, data);

    const { context } = getCanvasAndContext("#game-canvas");

    this.context = context;

    this.size = size;
  }

  /**
   * Will trigger when the bullet collides with the electric shock
   * Will result in resetting the game
   */
  kill(): void {
    resetGame();
  }

  /**
   * If the electric shock has collided with a bullet, reset the game.
   * Draw the electric shock
   */
  draw(): void {
    this.detectCollisionWithBullet();

    if (this.collidedWithBullet) this.kill();

    if (this.data.willMove) {
      this.moveLeftAndRight(this.data.movingBounds.left, this.data.movingBounds.right);
    }

    this.context.drawImage(ElectricShockImage, this.position.x, this.position.y - this.size.height / 2);
  }
}

export default ElectricShock;
