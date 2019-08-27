import { BoardShift, Board, Game } from '@2048/types/game';
import { ACTIONS, SET_BOARD_ACTION } from '@2048/redux/reducers/game.reducer';
import { IAction } from '@2048/types/redux';
import { clone, addRandomCell, propagate } from '@2048/services/game.service';

function shiftBoard(
  board: Board,
  shift: BoardShift
): IAction<string, SET_BOARD_ACTION> {
  const newBoard = clone(board);
  propagate(newBoard, shift);
  return {
    type: ACTIONS.SET_BOARD,
    body: {
      board: newBoard,
      newCell: null
    }
  };
}

function generateRandomCell(
  board: Board,
  val: number
): IAction<string, SET_BOARD_ACTION> {
  const newBoard = clone(board);
  const newCells = addRandomCell(newBoard, val);
  return {
    type: ACTIONS.SET_BOARD,
    body: {
      board: newBoard,
      newCell: newCells
    }
  };
}

function resetBoard(): IAction<string> {
  return { type: ACTIONS.RESET_BOARD };
}

function initialize(game: Game): IAction<string, Game> {
  return {
    type: ACTIONS.INITIALIZE,
    body: game
  };
}

export default { shiftBoard, generateRandomCell, resetBoard, initialize };
