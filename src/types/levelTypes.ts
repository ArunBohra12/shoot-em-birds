export type LevelBirds =
  | {
      id: string;
      position: number;
      willMove: false;
    }
  | {
      id: string;
      position: number;
      willMove: true;
      movingDirection: "right" | "left";
      movingBounds: {
        left: number;
        right: number;
      };
    };

export type LevelWire = {
  id: string;
  height: number;
  obstacles?: Array<number>;
  birds?: Array<LevelBirds>;
};

export type Level = {
  level: number;
  wires: Array<LevelWire>;
};
