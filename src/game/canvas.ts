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

  canvas.width = 1200;
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

/**
 * CreateCanvasImage takes a string and returns a CanvasImageSource
 * The generated image will be rendered on the canvas
 * @param {string} imageSrc - string - The image source.
 * @returns CanvasImageSource
 */
export const createCanvasImage = function (imageSrc: string): CanvasImageSource {
  const image = new Image();
  image.src = imageSrc;
  return image;
};
