import { Position } from "../types/gameTypes";

const GROUND_HEIGHT = 100;

/**
 * Draw a green rectangle at the bottom of the canvas, and then draw a black line above it.
 * @param {HTMLCanvasElement} canvas - The canvas element
 * @param {CanvasRenderingContext2D} context - The context of the canvas.
 */
const drawGrass = function (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  // Draw the grass
  context.fillStyle = "#0f0";
  context.fillRect(0, canvas.height - GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);

  // Draw the line above the grass
  context.fillStyle = "#000";
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(0, canvas.height - GROUND_HEIGHT);
  context.lineTo(canvas.width, canvas.height - GROUND_HEIGHT);
  context.stroke();
};

/**
 * It draws two poles on the canvas
 * @param {HTMLCanvasElement} canvas - HTMLCanvasElement - the canvas element
 * @param {CanvasRenderingContext2D} context - CanvasRenderingContext2D - the context of the canvas
 */
const drawPoles = function (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  const polePosition: Position = { x: 100, y: 100 };

  context.fillStyle = "brown";

  // pole on the left
  context.fillRect(polePosition.x, polePosition.y, 30, canvas.height - polePosition.y - GROUND_HEIGHT);
  // pole on the right
  context.fillRect(canvas.width - polePosition.x, polePosition.y, 30, canvas.height - polePosition.y - GROUND_HEIGHT);
};

/**
 * Draw the poles and grass.
 * @param {HTMLCanvasElement} canvas - The canvas element that we're drawing on.
 * @param {CanvasRenderingContext2D} context - The context of the canvas.
 */
export const drawStaticScenes = function (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  drawPoles(canvas, context);
  drawGrass(canvas, context);
};
