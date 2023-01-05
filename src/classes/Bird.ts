import { createCanvasImage, getCanvasAndContext } from "../canvas";
import Enemy from "./Enemy";
import bird from "../assets/img/bird.png";
import { Position, Size } from "../types/gameTypes";
import { LevelBirds } from "../types/levelTypes";

const BirdImage = createCanvasImage(bird);

class Bird extends Enemy {
  private context: CanvasRenderingContext2D;

  public size: Size = {
    height: 75,
    width: 42,
  };

  private moveDirection: "left" | "right";

  constructor(public position: Position, public data: LevelBirds) {
    super();

    const { context } = getCanvasAndContext("#game-canvas");

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
    console.log(JSON.stringify(this.position), JSON.stringify({ left, right }));

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
    this.context.drawImage(BirdImage, this.position.x, this.position.y - this.size.height);
  }
}

export default Bird;
