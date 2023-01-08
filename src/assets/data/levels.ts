import { Level } from "../../types/levelTypes";
import uuid from "../../uuid";

/**
 * It returns the level data for the level number passed to it
 * @param {number} level - The level number.
 * @returns An array of objects.
 */
const levelsData: Array<Level> = [
  {
    level: 1,
    wires: [
      {
        id: uuid(),
        height: 300,
        birds: [
          {
            id: uuid(),
            position: 500,
            willMove: false,
          },
        ],
      },
    ],
  },
  {
    level: 2,
    wires: [
      {
        id: uuid(),
        height: 200,
        birds: [
          {
            id: uuid(),
            position: 500,
            willMove: false,
          },
        ],
      },
      {
        id: uuid(),
        height: 450,
        birds: [
          {
            id: uuid(),
            position: 500,
            willMove: false,
          },
        ],
      },
    ],
  },
  {
    level: 3,
    wires: [
      {
        id: uuid(),
        height: 200,
        birds: [
          {
            id: uuid(),
            position: 500,
            willMove: false,
          },
        ],
      },
      {
        id: uuid(),
        height: 450,
        electricShocks: [
          {
            id: uuid(),
            position: 495,
            willMove: false,
          },
          {
            id: uuid(),
            position: 555,
            willMove: false,
          },
        ],
      },
    ],
  },
  {
    level: 4,
    wires: [
      {
        id: uuid(),
        height: 400,
        birds: [
          {
            id: uuid(),
            position: 500,
            willMove: true,
            movingDirection: "left",
            movingBounds: {
              left: 300,
              right: 700,
            },
          },
        ],
      },
      {
        id: uuid(),
        height: 250,
        birds: [
          {
            id: uuid(),
            position: 500,
            willMove: true,
            movingDirection: "right",
            movingBounds: {
              left: 300,
              right: 700,
            },
          },
        ],
      },
    ],
  },
  {
    level: 5,
    wires: [
      {
        id: uuid(),
        height: 150,
        obstacles: [400],
      },
      {
        id: uuid(),
        height: 400,
        birds: [
          {
            id: uuid(),
            position: 400,
            willMove: true,
            movingDirection: "right",
            movingBounds: {
              left: 200,
              right: 700,
            },
          },
        ],
      },
      {
        id: uuid(),
        height: 430,
        electricShocks: [
          {
            id: uuid(),
            position: 380,
            willMove: true,
            movingDirection: "right",
            movingBounds: {
              left: 180,
              right: 660,
            },
          },
          {
            id: uuid(),
            position: 400,
            willMove: true,
            movingDirection: "right",
            movingBounds: {
              left: 200,
              right: 680,
            },
          },
          {
            id: uuid(),
            position: 420,
            willMove: true,
            movingDirection: "right",
            movingBounds: {
              left: 220,
              right: 700,
            },
          },
          {
            id: uuid(),
            position: 440,
            willMove: true,
            movingDirection: "right",
            movingBounds: {
              left: 240,
              right: 720,
            },
          },
        ],
      },
    ],
  },
];

const getLevelData = function (level: number): Level {
  return levelsData[level - 1];
};

export const totalLevels = levelsData.length;

export default getLevelData;
