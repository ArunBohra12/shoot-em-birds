import { Position, Size } from "../types/gameTypes";
import { createCanvasImage, getCanvasAndContext } from "../canvas";
import obstacle from "../assets/img/obstacle.png";

const ObstacleImage = createCanvasImage(obstacle);

class Obstacle {
  private context: CanvasRenderingContext2D;
  public position: null | Position;

  public size: Size;

  constructor() {
    const { context } = getCanvasAndContext("#game-canvas");

    this.context = context;

    this.size = {
      height: 100,
      width: 100,
    };

    this.position = null;
  }

  /**
   * Draws the obstacle on the given position
   * @param position Position of the obstacle on the wire
   */
  draw(position: Position) {
    this.position = {
      x: position.x,
      y: position.y - this.size.height / 2,
    };
    this.context.drawImage(ObstacleImage, position.x, position.y - this.size.height / 2);
  }
}

export default Obstacle;
