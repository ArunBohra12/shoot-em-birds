import { getCanvasAndContext, setCanvasDimentions } from "./canvas";
import Bullet from "./classes/Bullet";
import Player from "./classes/Player";
import Wire from "./classes/Wire";
import { drawStaticScenes } from "./game/gameScenes";
import { Level } from "./types/levelTypes";
import getLevelData from "./assets/data/levels";

const gameCanvasSelector: string = "#game-canvas";

setCanvasDimentions(gameCanvasSelector);

const level: Level = getLevelData(0);

let gun = new Player(gameCanvasSelector);
const wires: Array<Wire> = [];

/**
 * Restarts the game by reassigning the variables
 */
export const init = function () {
  gun = new Player(gameCanvasSelector);
  // wire = new Wire(wireHeight);

  const bullet: Bullet = gun.bullet;
  level.wires.forEach(wire => {
    wires.push(new Wire(wire.height, bullet, wire.birds, wire.obstacles));
  });
};

/**
 * Creates the animation loop for the game
 */
const animate = function () {
  requestAnimationFrame(animate);

  const { canvas, context } = getCanvasAndContext(gameCanvasSelector);

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#57a3c6";
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawStaticScenes(canvas, context);

  wires.forEach(wire => wire.draw());

  gun.draw();
};

init();
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
