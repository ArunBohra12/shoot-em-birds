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

  /**
   * If the bird is at the right edge of the screen, move left. If the bird is at the left edge of the
   * screen, move right
   * @param {number} left - number - The left most position the bird can move to
   * @param {number} right - number - the right side of the screen
   */
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

  /**
   * Sets the moveDirection property to left or right.
   * @param {"left" | "right"} direction - The direction the bird should move.
   */
  set setMoveDirection(direction: "left" | "right") {
    this.moveDirection = direction;
  }

  /**
   * Draw the bird at the wire
   *
   * The reason we subtract the height of the bird is because the bird's position is the top left corner
   * of the bird, but we want to draw the bird from the bottom left corner
   */
  draw(): void {
    this.context.drawImage(BirdImage, this.birdPosition.x, this.birdPosition.y - this.size.height);
  }
}

export default Bird;
