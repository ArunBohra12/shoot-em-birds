interface CanvasAndContextInterface {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

/**
 * Set the width and height of the canvas to the width and height of the window.
 * @param {string} canvasSelector - The selector of the canvas element.
 */
export const setCanvasDimentions = function (canvasSelector: string): void {
  const canvas: HTMLCanvasElement = document.querySelector(canvasSelector)!;

  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
};

/**
 * It takes selector for canvas
 * and returns an object with two properties: a canvas and a context
 *
 * @param {string} canvasSelector - The selector for the canvas element.
 * @returns An object with two properties: canvas and context.
 */
export const getCanvasAndContext = function (canvasSelector: string): CanvasAndContextInterface {
  const canvas: HTMLCanvasElement = document.querySelector(canvasSelector)!;

  const context = canvas.getContext("2d")!;

  return {
    canvas,
    context,
  };
};
