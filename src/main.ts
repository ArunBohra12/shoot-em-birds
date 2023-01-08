import { getCanvasAndContext, setCanvasDimentions } from "./game/canvas";
import { Level } from "./types/levelTypes";
import getLevelData, { totalLevels } from "./assets/data/levels";
import { createTextBox } from "./game/text";
import { drawStaticScenes } from "./game/gameScenes";

import Bullet from "./classes/Bullet";
import Player from "./classes/Player";
import Wire from "./classes/Wire";
import { updateHighestScore, setHighestScore } from "./game/score";

// -----------------------------------------
// SETTING GAME STATE START

const gameCanvasSelector: string = "#game-canvas";

setCanvasDimentions(gameCanvasSelector);

let levelData: Level = getLevelData(1);
let level = levelData.level;

let birdsKilled = 0;
let score = 0;

let gun = new Player(gameCanvasSelector);
let wires: Array<Wire> = [];

createTextBox("SHOTS: ", { id: "total-shots" });
createTextBox("LEVEL: ", { id: "level" });
createTextBox("HI SCORE: ", { id: "hi-score-box" });

// SETTING GAME STATE FINISH
// -----------------------------------------

/**
 * It updates the score element on the page with the new score
 * @param {number} increment - number - The number to increment the score by.
 * @returns {void}
 */
const updateScore = function (increment: number): void {
  const scoreEl = document.querySelector("#total-shots .text-value")!;
  score += increment;

  scoreEl.textContent = `${score}`;
};

/**
 * Sets the lvel number in the level display box
 * @param {number} level - number - The current level of the game.
 * @returns {void}
 */
const displayLevel = function (level: number): void {
  const levelEl = document.querySelector("#level .text-value")!;

  levelEl.textContent = `${level}/${totalLevels}`;
};

/**
 * Checks if current level is finished or not
 * @returns {boolean}
 */
const checkLevelFinished = function (): boolean {
  // total birds in the level
  const totalBirds = levelData.wires.reduce((acc, el) => {
    const birdsLength = el.birds?.length || 0;

    return acc + birdsLength;
  }, 0);

  if (totalBirds === birdsKilled) {
    return true;
  }

  return false;
};

const finishedGame = function (): void {
  setHighestScore(score);
  updateHighestScore();

  alert(`You have finished the game.\n Your score is ${score}`);

  level = 1;
  score = 0;

  levelData = getLevelData(level);

  displayLevel(level);
  updateScore(score);

  init();
};

const advanceToNextLevel = function (): void {
  const bullet = gun.bullet;

  // Just for visual effect
  // When bullet kills the last bird it stops
  setTimeout(() => bullet.stop(), 100);

  // When bullet kills the last bird, next level comes in .3s
  // Tells user they have finished the game
  setTimeout(() => {
    bullet.stop();
    if (level === totalLevels) {
      finishedGame();
      return;
    }

    level++;

    levelData = getLevelData(level);
    displayLevel(level);

    init();
  }, 300);
};

/**
 * Restarts the game by reassigning the variables
 */
export const init = function (): void {
  gun = new Player(gameCanvasSelector);

  const bullet: Bullet = gun.bullet;
  wires = [];
  levelData.wires.forEach(wire => wires.push(new Wire(wire, bullet)));

  birdsKilled = 0;
};

/**
 * Remove the bird from the birds array
 * @param wireId id of the wire where bird was killed
 * @param birdId id of the bird that was shot
 */
export const removeBirdFromWire = function (wireId: string, birdId: string): void {
  for (let i = 0; i < wires.length; i++) {
    const wire = wires[i];

    if (wire.wireData.id !== wireId) continue;

    for (let j = 0; j < wire.birds.length; j++) {
      if (wire.birds[j].data.id === birdId) wire.birds.splice(j, 1);
    }
  }

  birdsKilled++;

  const isLevelFinished = checkLevelFinished();

  if (isLevelFinished) advanceToNextLevel();
};

/**
 * Creates the animation loop for the game
 */
const animate = function (): void {
  requestAnimationFrame(animate);

  const { canvas, context } = getCanvasAndContext(gameCanvasSelector);

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#57a3c6";
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawStaticScenes(canvas, context);

  wires.forEach(wire => wire.draw());

  gun.draw();
};

// ------------------------------------------
// STARTING THE GAME

// Start the game with score of 0 and level 1
updateScore(0);
displayLevel(level);
updateHighestScore();

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
  updateScore(1);
});
