import { getCanvasAndContext } from "../canvas";
import { Position } from "../types/gameTypes";
import { LevelWire } from "../types/levelTypes";
import Bird from "./Bird";
import Bullet from "./Bullet";
import ElectricShock from "./ElectricShcok";
import Obstacle from "./Obstacle";

class Wire {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public obstacle: Obstacle;
  public birds: Array<Bird>;
  public electricShocks: Array<ElectricShock>;

  constructor(public wireData: LevelWire, public bullet: Bullet) {
    const { canvas, context } = getCanvasAndContext("#game-canvas");

    this.canvas = canvas;
    this.context = context;

    this.obstacle = new Obstacle(bullet);

    const allBirds: Array<Bird> = [];
    const allElectricShocks: Array<ElectricShock> = [];

    // loop through the birds array
    this.wireData.birds?.map(bird => {
      const birdPosition: Position = { x: bird.position, y: this.wireData.height };

      allBirds.push(new Bird(birdPosition, bird, bullet, wireData.id));
    });

    // loop through the electric shocks array
    this.wireData.electricShocks?.map(shock => {
      const shockPosition: Position = { x: shock.position, y: this.wireData.height };

      allElectricShocks.push(new ElectricShock(shockPosition, shock, bullet));
    });

    this.birds = allBirds || [];
    this.electricShocks = allElectricShocks || [];
  }

  /**
   * Draws the birds into the canvas
   */
  private addBirds(): void {
    if (!this.birds?.length) return;

    this.birds.forEach(bird => bird.draw());
  }

  private addElectricShocks(): void {
    if (!this.electricShocks.length) return;

    this.electricShocks.forEach(shock => shock.draw());
  }

  private addObstacles() {
    if (!this.wireData.obstacles) return;

    /* 
    this will run on every animation frame and therefore
    this.obstacles is instanciated in the constructor so that
    it happens only once
    */

    this.wireData.obstacles.forEach(obstacleXPosition => {
      this.obstacle.draw({ x: obstacleXPosition, y: this.wireData.height });
    });
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
    this.context.moveTo(150, this.wireData.height);
    this.context.lineTo(this.canvas.width - 150, this.wireData.height);
    this.context.stroke();

    this.wireData.obstacles && this.addObstacles();
    this.birds.length && this.addBirds();
    this.electricShocks.length && this.addElectricShocks();
  }
}

export default Wire;
