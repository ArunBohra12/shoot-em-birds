export type LevelBirds =
  | {
      position: number;
      willMove: false;
    }
  | {
      position: number;
      willMove: true;
      movingDirection: "right" | "left";
      movingBounds: {
        left: number;
        right: number;
      };
    };

export type LevelWire = {
  height: number;
  obstacles?: Array<number>;
  birds?: Array<LevelBirds>;
};

export type Level = {
  level: number;
  wires: Array<LevelWire>;
};
