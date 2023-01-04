import { createCanvasImage, getCanvasAndContext } from "../canvas";
import Enemy from "./Enemy";
import bird from "../assets/bird.png";
import { Position, Size } from "../types/gameTypes";

const BirdImage = createCanvasImage(bird);

class Bird extends Enemy {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public size: Size = {
    height: 75,
    width: 42,
  };

  private moveDirection: "left" | "right";

  constructor(public birdPosition: Position) {
    super();

    const { canvas, context } = getCanvasAndContext("#game-canvas");

    this.canvas = canvas;
    this.context = context;

    this.moveDirection = "right";
  }

  moveLeftAndRight(left: number, right: number): void {
    if (this.birdPosition.x > right - this.size.width) {
      this.moveDirection = "left";
    } else if (this.birdPosition.x < left + 10) {
      this.moveDirection = "right";
    }

    if (this.moveDirection === "left") {
      this.birdPosition.x -= this.speed;
    }

    if (this.moveDirection === "right") {
      this.birdPosition.x += this.speed;
    }
  }

  set setMoveDirection(direction: "left" | "right") {
    this.moveDirection = direction;
  }

  draw(): void {
    this.context.drawImage(BirdImage, this.birdPosition.x, this.birdPosition.y - this.size.height);
  }
}

export default Bird;
