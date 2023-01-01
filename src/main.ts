import { getCanvasAndContext, setCanvasDimentions } from "./canvas";
import Player from "./classes/Player";

const gameCanvasSelector: string = "#game-canvas";

setCanvasDimentions(gameCanvasSelector);

const gun = new Player(gameCanvasSelector);

const animate = function () {
  requestAnimationFrame(animate);

  const { canvas, context } = getCanvasAndContext(gameCanvasSelector);

  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);

  gun.draw();
};

animate();

// Event listeners to move player left and right
window.addEventListener("keydown", function (e) {
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

  gun.move(e.key === "ArrowLeft" ? "left" : "right");
});

window.addEventListener("keyup", function (e) {
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

  gun.stop();
});
