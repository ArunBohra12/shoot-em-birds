import { getCanvasAndContext } from "../canvas";
import { Size, Position } from "../types/gameTypes";

interface PlayerInterface {
  size: Size;
  position: Position;
  speed: number;
}

class Player implements PlayerInterface {
  private context: CanvasRenderingContext2D;

  public position: Position;
  public size: Size = {
    height: 90,
    width: 60,
  };

  public speed = 0;

  constructor(public canvasSelector: string) {
    const { canvas, context } = getCanvasAndContext(canvasSelector);

    this.context = context;

    // Calculate the position at the center in x-axis
    this.position = {
      x: canvas.width / 2 - this.size.width / 2,
      y: canvas.height - 150,
    };
  }

  stop(): void {
    this.speed = 0;
  }

  move(side: string): void {
    const speedChange = 5;

    if (side === "left") {
      this.speed = -speedChange;
      return;
    }

    if (side === "right") {
      this.speed = speedChange;
      return;
    }
  }

  draw(): void {
    this.context.fillStyle = "#f00";

    this.position.x += this.speed;
    this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }
}

export default Player;
