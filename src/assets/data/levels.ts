import { Level } from "../../types/levelTypes";
import uuid from "../../uuid";

/**
 * It returns the level data for the level number passed to it
 * @param {number} level - The level number.
 * @returns An array of objects.
 */
const getLevelData = function (level: number): Level {
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
        },
        {
          id: uuid(),
          height: 150,
          obstacles: [400],
        },
      ],
    },
  ];

  return levelsData[level];
};

export default getLevelData;
