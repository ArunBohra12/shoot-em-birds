import { getCanvasAndContext } from "../canvas";
import { Position } from "../types/gameTypes";
import { LevelBirds } from "../types/levelTypes";
import Bird from "./Bird";
import Bullet from "./Bullet";
import Obstacle from "./Obstacle";

class Wire {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public obstacle: Obstacle;
  public birds: Array<Bird>;

  constructor(
    public wireHeight: number,
    public bullet: Bullet,
    public birdsData?: Array<LevelBirds> | undefined,
    public obstacles?: Array<number>,
  ) {
    const { canvas, context } = getCanvasAndContext("#game-canvas");

    this.canvas = canvas;
    this.context = context;

    this.obstacle = new Obstacle(this.bullet);

    const allBirds: Array<Bird> = [];

    this.birdsData?.map(birdData => {
      allBirds.push(new Bird({ x: birdData.position, y: this.wireHeight }, birdData, this.bullet));
    });

    this.birds = allBirds;
  }

  /**
   * Draws the birds into the canvas
   */
  addBirds(): void {
    if (!this.birds?.length) return;

    this.birds.forEach(bird => bird.draw());
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

    this.obstacles &&
      this.obstacles.forEach(obstacleXPosition => this.addObstacle({ x: obstacleXPosition, y: this.wireHeight }));

    this.birds && this.addBirds();
  }
}

export default Wire;
