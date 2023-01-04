import { createCanvasImage, getCanvasAndContext } from "../canvas";
import { Size, Position } from "../types/gameTypes";
import Bullet from "./Bullet";
import gun from "../assets/img/gun.png";

const GunImage = createCanvasImage(gun);

interface PlayerInterface {
  size: Size;
  position: Position;
  speed: number;
  shoot: () => void;
}

class Player implements PlayerInterface {
  private context: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;

  public bullet: Bullet;
  public position: Position;
  public size: Size = {
    height: 107,
    width: 52,
  };

  public speed = 0;

  constructor(public canvasSelector: string) {
    const { canvas, context } = getCanvasAndContext(canvasSelector);

    this.context = context;
    this.canvas = canvas;

    // Calculate the position at the center in x-axis
    this.position = {
      x: canvas.width / 2 - this.size.width / 2,
      y: canvas.height - 150,
    };

    this.bullet = new Bullet({ x: this.position.x + this.size.width / 2, y: this.position.y });
  }

  stop(): void {
    this.speed = 0;
  }

  /**
   * If the side is left, set the speed to -5, otherwise if the side is right, set the speed to 5.
   * @param {string} side - string - this is the side that the player is moving to.
   */
  move(side: string): void {
    const speedChange = 5;
    const maxX = this.canvas.width - 100;

    if (side === "left" && this.position.x >= 100) {
      this.speed = -speedChange;
      return;
    }

    if (side === "right" && this.position.x <= maxX) {
      this.speed = speedChange;
      return;
    }

    this.speed = 0;
  }

  // Shoot the bullet
  shoot(): void {
    this.bullet.move();
  }

  // Catch the bullet
  // by stopping it when it is colliding with the gun
  catchBullet(): void {
    /* This is checking if the bullet is moving down or not. 
      If it is not moving down, then it will stop trying to catch bullet & return.
    */
    if (this.bullet.movingDirection === "up" || this.bullet.isBulletMoving === false) return;

    if (
      this.bullet.position.x > this.position.x &&
      this.bullet.position.x + this.bullet.size.width < this.position.x + this.size.width &&
      this.bullet.position.y >= this.position.y
    ) {
      this.bullet.stop();
    }
  }

  // Draw and update the player
  draw(): void {
    this.context.fillStyle = "#f00";

    this.bullet.updatePosition({ x: this.position.x + this.size.width / 3, y: this.bullet.position.y });

    this.position.x += this.speed;
    this.context.drawImage(GunImage, this.position.x, this.position.y);

    this.catchBullet();
    this.bullet.draw();
  }
}

export default Player;
