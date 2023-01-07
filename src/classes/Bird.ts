import { createCanvasImage, getCanvasAndContext } from "../canvas";
import { Position, Size } from "../types/gameTypes";
import { LevelBirds } from "../types/levelTypes";
import bird from "../assets/img/bird.png";

import Enemy from "./Enemy";
import Bullet from "./Bullet";
import { removeBirdFromWire } from "../main";

const BirdImage = createCanvasImage(bird);

class Bird extends Enemy {
  private context: CanvasRenderingContext2D;

  public size: Size;

  constructor(public position: Position, public data: LevelBirds, public bullet: Bullet, public wireId: string) {
    const size: Size = {
      height: 75,
      width: 42,
    };

    super(size, position, bullet, data);

    const { context } = getCanvasAndContext("#game-canvas");

    this.context = context;
    this.size = size;
  }

  /**
   * The bird gets killed, remove it from the birds array
   */
  die(): void {
    // this.data.id
    removeBirdFromWire(this.wireId, this.data.id);
  }

  /**
   * Draw the bird at the wire
   *
   * The reason we subtract the height of the bird is because the bird's position is the top left corner
   * of the bird, but we want to draw the bird from the bottom left corner
   */
  draw(): void {
    this.detectCollisionWithBullet();

    if (this.collidedWithBullet) this.die();

    if (this.data.willMove) {
      this.moveLeftAndRight(this.data.movingBounds.left, this.data.movingBounds.right);
    }

    this.context.drawImage(BirdImage, this.position.x, this.position.y - this.size.height);
  }
}

export default Bird;
