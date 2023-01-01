export const setCanvasDimentions = function () {
  const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
};
