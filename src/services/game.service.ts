import { Board, BoardShift } from '@2048/types/game';

export function generateEmptyBoard(width: number, height: number): Board {
  return [...Array(height)].map(_ => new Array(width).fill(1));
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

function merge(
  getPoint: (coord: number) => number,
  setPoint: (coord: number, value: number) => void,
  from: number,
  to: number
): void {
  setPoint(to, getPoint(from) + getPoint(to));
  setPoint(from, 0);
}

function mergeFirst(
  getPoint: (coord: number) => number,
  setPoint: (coord: number, value: number) => void,
  length: number
): boolean {
  for (let i = 0; i < length - 1; i++) {
    if (getPoint(i) !== 0 && getPoint(i) === getPoint(i + 1)) {
      merge(getPoint, setPoint, i, i + 1);
      return true;
    }
  }
  return false;
}

function push(
  getPoint: (coord: number) => number,
  setPoint: (coord: number, value: number) => void,
  length: number,
  startIdx: number
): boolean {
  let curr = startIdx + 1;
  if (curr >= length || getPoint(curr) !== 0) return false;
  while (curr < length - 1 && getPoint(curr + 1) === 0) {
    curr++;
  }
  merge(getPoint, setPoint, startIdx, curr);
  return true;
}

export function propagateLine(
  getPoint: (coord: number) => number,
  setPoint: (coord: number, value: number) => void,
  length: number
): boolean {
  let moved = false;
  for (let i = length - 1; i > 0; i--) {
    if (getPoint(i) !== 0) {
      moved = push(getPoint, setPoint, length, i) || moved;
    }
  }
  moved = mergeFirst(getPoint, setPoint, length) || moved;
  return moved;
}

export function getHeight(board: Board) {
  if (board.length === 0) {
    return 0;
  } else {
    return board[0].length;
  }
}

export function getWidth(board: Board) {
  return board.length;
}

export function propagateGrid(
  getLine: (lineIdx: number) => (coord: number) => number,
  setLine: (lineIdx: number) => (coord: number, value: number) => void,
  numLines: number,
  lineLength: number
): boolean {
  let moved = false;
  for (let i = 0; i < numLines; i++) {
    moved = propagateLine(getLine(i), setLine(i), lineLength) || moved;
  }
  return moved;
}

function getPropagateLineFunc(
  board: Board,
  shift: 'up' | 'down' | 'left' | 'right'
): {
  getLine: (lineIdx: number) => (coord: number) => number;
  setLine: (lineIdx: number) => (coord: number, value: number) => void;
  numLines: number;
  lineLength: number;
} {
  const height = getHeight(board);
  const width = getWidth(board);
  switch (shift) {
    case 'up':
      return {
        getLine: (lineIdx: number) => (coord: number) =>
          board[height - coord - 1][lineIdx],
        setLine: (lineIdx: number) => (coord: number, value: number) => {
          board[height - coord - 1][lineIdx] = value;
        },
        numLines: width,
        lineLength: height
      };
    case 'down':
      return {
        getLine: (lineIdx: number) => (coord: number) => board[coord][lineIdx],
        setLine: (lineIdx: number) => (coord: number, value: number) => {
          board[coord][lineIdx] = value;
        },
        numLines: width,
        lineLength: height
      };
    case 'left':
      return {
        getLine: (lineIdx: number) => (coord: number) =>
          board[lineIdx][width - coord - 1],
        setLine: (lineIdx: number) => (coord: number, value: number) => {
          board[lineIdx][width - coord - 1] = value;
        },
        numLines: height,
        lineLength: width
      };
    case 'right':
      return {
        getLine: (lineIdx: number) => (coord: number) => board[lineIdx][coord],
        setLine: (lineIdx: number) => (coord: number, value: number) => {
          board[lineIdx][coord] = value;
        },
        numLines: height,
        lineLength: width
      };
  }
}

export function propagate(board: Board, shift: BoardShift): boolean {
  const boardFuncs = getPropagateLineFunc(board, shift);
  return propagateGrid(
    boardFuncs.getLine,
    boardFuncs.setLine,
    boardFuncs.numLines,
    boardFuncs.lineLength
  );
}

export function clone(board: Board): Board {
  return board.map(row => [...row]);
}
