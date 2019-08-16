export type Board = number[][];

export type BoardShift = 'up' | 'down' | 'left' | 'right';

export interface Game {
  height: number;
  width: number;
  board: Board;
}
