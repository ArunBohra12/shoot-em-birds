interface CanvasAndContextInterface {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export const setCanvasDimentions = function (canvasSelector: string): void {
  const canvas: HTMLCanvasElement = document.querySelector(canvasSelector)!;

  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
};

export const getCanvasAndContext = function (canvasSelector: string): CanvasAndContextInterface {
  const canvas: HTMLCanvasElement = document.querySelector(canvasSelector)!;

  const context = canvas.getContext("2d")!;

  return {
    canvas,
    context,
  };
};
