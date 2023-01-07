import { Position, Size } from "../types/gameTypes";
import { detectObstacleAndBulletCollision } from "../game/collisionDetections";
import { createCanvasImage, getCanvasAndContext } from "../canvas";
import obstacle from "../assets/img/obstacle.png";
import Bullet from "./Bullet";

const ObstacleImage = createCanvasImage(obstacle);

class Obstacle {
  private context: CanvasRenderingContext2D;

  public position: null | Position;
  public size: Size;

  constructor(public bullet: Bullet) {
    const { context } = getCanvasAndContext("#game-canvas");

    this.context = context;

    this.size = {
      height: 100,
      width: 100,
    };

    this.position = null;
  }

  detectCollisionWithBullet(): void {
    if (detectObstacleAndBulletCollision(this.bullet, this)) {
      this.bullet.movingDirection = "down";
    }
  }

  /**
   * Draws the obstacle on the given position
   * @param position Position of the obstacle on the wire
   */
  draw(position: Position): void {
    this.position = {
      x: position.x,
      y: position.y - this.size.height / 2,
    };
    this.context.drawImage(ObstacleImage, position.x, position.y - this.size.height / 2);

    this.detectCollisionWithBullet();
  }
}

export default Obstacle;
