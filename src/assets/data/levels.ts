import { Level } from "../../types/levelTypes";

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
          height: 400,
          obstacles: [200, 300],
          birds: [
            {
              position: 400,
              willMove: true,
              movingDirection: "left",
              movingBounds: { left: 150, right: 450 },
            },
          ],
        },
        {
          height: 150,
          obstacles: [400],
        },
      ],
    },
  ];

  return levelsData[level];
};

export default getLevelData;
