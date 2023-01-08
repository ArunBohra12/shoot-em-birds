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
        height: 400,
        birds: [
          {
            id: uuid(),
            position: 400,
            willMove: true,
            movingDirection: "left",
            movingBounds: { left: 150, right: 450 },
          },
          {
            id: uuid(),
            position: 500,
            willMove: false,
          },
        ],
        electricShocks: [
          {
            id: uuid(),
            position: 600,
            willMove: false,
          },
          {
            id: uuid(),
            position: 660,
            willMove: true,
            movingDirection: "right",
            movingBounds: {
              left: 620,
              right: 820,
            },
          },
        ],
      },
      {
        id: uuid(),
        height: 150,
        obstacles: [400],
        electricShocks: [
          {
            id: uuid(),
            position: 600,
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
        height: 400,
        birds: [
          {
            id: uuid(),
            position: 400,
            willMove: true,
            movingDirection: "left",
            movingBounds: { left: 150, right: 450 },
          },
          {
            id: uuid(),
            position: 500,
            willMove: false,
          },
        ],
        electricShocks: [
          {
            id: uuid(),
            position: 600,
            willMove: false,
          },
          {
            id: uuid(),
            position: 660,
            willMove: true,
            movingDirection: "right",
            movingBounds: {
              left: 620,
              right: 820,
            },
          },
        ],
      },
      {
        id: uuid(),
        height: 150,
        obstacles: [400],
        electricShocks: [
          {
            id: uuid(),
            position: 600,
            willMove: false,
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
