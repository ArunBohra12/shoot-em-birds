import { getCanvasAndContext } from "../canvas";

class Wire {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(public wireHeight: number) {
    const { canvas, context } = getCanvasAndContext("#game-canvas");

    this.canvas = canvas;
    this.context = context;
  }

  /**
   * It draws a line on the canvas
   * It will be the wire where the birds will be standing/moving
   */
  draw(): void {
    console.log("arun");
    this.context.fillStyle = "#000";
    this.context.lineWidth = 5;
    this.context.beginPath();
    this.context.moveTo(150, this.wireHeight);
    this.context.lineTo(this.canvas.width - 150, this.wireHeight);
    this.context.stroke();
  }
}

export default Wire;
