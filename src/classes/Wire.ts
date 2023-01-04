import { getCanvasAndContext } from "../canvas";
import { Position } from "../types/gameTypes";
import Bird from "./Bird";
import Obstacle from "./Obstacle";

class Wire {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public bird: Bird;
  public obstacle: Obstacle;

  constructor(public wireHeight: number) {
    const { canvas, context } = getCanvasAndContext("#game-canvas");

    this.canvas = canvas;
    this.context = context;

    this.bird = new Bird({ x: 400, y: this.wireHeight });
    this.bird.setMoveDirection = "left";

    this.obstacle = new Obstacle();
  }

  /**
   * Draws the birds/ememies (currently birds) into the canvas
   */
  addEnemy(): void {
    this.bird.draw();
  }

  addObstacle(position: Position) {
    this.obstacle.draw({ x: position.x, y: position.y });
  }

  /**
   * It draws a line on the canvas
   * It will be the wire where the birds will be standing/moving
   * It will also hold the obstacles
   */
  draw(): void {
    this.context.fillStyle = "#000";
    this.context.lineWidth = 5;
    this.context.beginPath();
    this.context.moveTo(150, this.wireHeight);
    this.context.lineTo(this.canvas.width - 150, this.wireHeight);
    this.context.stroke();

    this.addObstacle({ x: 500, y: this.wireHeight });
    // this.bird.moveLeftAndRight(150, this.canvas.width - 150);
  }
}

export default Wire;
