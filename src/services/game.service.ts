import { Board } from '@2048/types/game';

export function generateEmptyBoard(width: number, height: number) {
  return new Array(width).map(_ => new Array(height).map(_ => 0));
}

export function isValidBoard(
  width: number,
  height: number,
  board: Board
): boolean {
  if (board.length !== width) return false;
  if (!board.every(r => r.length === height)) return false;
  return true;
}
