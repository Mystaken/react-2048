import { Board } from '@2048/types/game';

export function generateEmptyBoard(width: number, height: number) {
  return new Array(width).map(_ => new Array(height).map(_ => 0));
}

export function isValidBoard(
  width: number,
  height: number,
  board: Board
): boolean {
  const widthValid = board.length === width;
  const heightValid = board.every(r => r.length === height);
  return widthValid && heightValid;
}
