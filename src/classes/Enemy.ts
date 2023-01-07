import { Position, Size } from "../types/gameTypes";
import { LevelBirds } from "../types/levelTypes";
import Bullet from "./Bullet";

type EnemyPositionData = LevelBirds;

class Enemy {
  protected speed: number = 3;

  protected moveDirection: "left" | "right" | null;

  protected collidedWithBullet = false;

  constructor(
    public size: Size,
    public position: Position,
    public bullet: Bullet,
    public enemyPositionData: EnemyPositionData,
  ) {
    this.moveDirection = null;
    this.moveDirection = this.enemyPositionData.willMove ? this.enemyPositionData.movingDirection : null;
  }

  detectCollisionWithBullet(): void {}

  /**
   * If the bird is at the right edge of the screen, move left. If the bird is at the left edge of the
   * screen, move right
   * @param {number} left - number - The left most position the bird can move to
   * @param {number} right - number - the right side of the screen
   */
  moveLeftAndRight(left: number, right: number): void {
    if (this.position.x > right - this.size.width) {
      this.moveDirection = "left";
    } else if (this.position.x < left + 10) {
      this.moveDirection = "right";
    }

    if (this.moveDirection === "left") {
      this.position.x -= this.speed;
    }

    if (this.moveDirection === "right") {
      this.position.x += this.speed;
    }
  }
}

export default Enemy;
