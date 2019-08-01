export type Board = number[][];

export interface Game {
  height: number;
  width: number;
  board: Board;
}
