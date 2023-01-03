import { createCanvasImage, getCanvasAndContext } from "../canvas";
import { Position, Size } from "../types/gameTypes";
import bullet from "../assets/stone.png";

const BulletImage = createCanvasImage(bullet);

interface BulletInterface {
  size: Size;
  position: Position;
}

class Bullet implements BulletInterface {
  public canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private isMoving = false;
  private readonly bulletSpeed = 5;
  private moveDirection: "up" | "down" = "up";

  size: Size;

  constructor(public position: Position) {
    const { canvas, context } = getCanvasAndContext("#game-canvas");

    this.canvas = canvas;
    this.context = context;

    this.position = {
      x: position.x,
      y: position.y,
    };

    this.size = {
      width: 20,
      height: 20,
    };
  }

  /**
   * If the moveDirection is up, return the bulletSpeed multiplied by -1
   * otherwise return the bulletSpeed multiplied by 1
   * @returns The bullet speed is being returned.
   */
  get getSpeed() {
    return this.moveDirection === "up" ? this.bulletSpeed * -1 : this.bulletSpeed * 1;
  }

  /**
   * Stop the bullet from moving.
   */
  stop(): void {
    this.isMoving = false;
  }

  /**
   * The move function sets the isMoving property to true.
   */
  move(): void {
    this.isMoving = true;
  }

  /**
   * If the bullet is not moving and player is moving
   * update the bullet's position on x-axis to move bullet along with the gun
   * @param {Position} position - The position object containing x and y coordinates
   * @returns the value of the variable isMoving.
   */
  updatePosition(position: Position): void {
    if (this.isMoving === true) return;

    this.position = { x: position.x, y: position.y };
  }

  /**
   * Draw the bullet
   * If this.isMoving is true then update position of the bullet on the y-axis
   */
  draw() {
    this.context.fillStyle = "#777";
    this.context.drawImage(BulletImage, this.position.x, this.position.y);

    if (this.isMoving) {
      this.position.y += this.getSpeed;
    }
  }
}

export default Bullet;
