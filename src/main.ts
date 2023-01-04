import { getCanvasAndContext, setCanvasDimentions } from "./canvas";
import Player from "./classes/Player";
import Wire from "./classes/Wire";
import { drawStaticScenes } from "./game/gameScenes";

const gameCanvasSelector: string = "#game-canvas";
const wireLength: number = 150;

setCanvasDimentions(gameCanvasSelector);

let gun = new Player(gameCanvasSelector);
let wire = new Wire(wireLength);

/**
 * Restarts the game by reassigning the variables
 */
export const init = function () {
  gun = new Player(gameCanvasSelector);
  wire = new Wire(wireLength);
};

const animate = function () {
  requestAnimationFrame(animate);

  const { canvas, context } = getCanvasAndContext(gameCanvasSelector);

  context.fillStyle = "#57a3c6";
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawStaticScenes(canvas, context);

  wire.draw();
  wire.addEnemy();
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

window.addEventListener("keyup", function (e) {
  if (e.code !== "Space") return;

  gun.shoot();
});
