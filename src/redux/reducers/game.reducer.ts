import { Game } from '@2048/types/game';
import {
  generateEmptyBoard,
  propagate,
  clone
} from '@2048/services/game.service';
import { IAction } from '@2048/types/redux';

export const ACTIONS = {
  SHIFT_UP: 'SHIFT_UP',
  SHIFT_DOWN: 'SHIFT_DOWN',
  SHIFT_LEFT: 'SHIFT_LEFT',
  SHIFT_RIGHT: 'SHIFT_RIGHT'
};

export interface GameState {
  game: Game;
}

const initialState: GameState = {
  game: {
    height: 4,
    width: 4,
    board: generateEmptyBoard(4, 4)
  }
};

const gameReducer = (
  state: GameState = initialState,
  action: IAction<keyof typeof ACTIONS, any>
): GameState => {
  let newBoard = clone(state.game.board);
  switch (action.type) {
    case 'SHIFT_UP':
      propagate(newBoard, 'up');
      return {
        ...state,
        game: {
          ...state.game,
          board: newBoard
        }
      };
    case 'SHIFT_DOWN':
      propagate(newBoard, 'down');
      return {
        ...state,
        game: {
          ...state.game,
          board: newBoard
        }
      };
    case 'SHIFT_LEFT':
      propagate(newBoard, 'left');
      return {
        ...state,
        game: {
          ...state.game,
          board: newBoard
        }
      };
    case 'SHIFT_RIGHT':
      propagate(newBoard, 'right');
      return {
        ...state,
        game: {
          ...state.game,
          board: newBoard
        }
      };
    default:
      return state;
  }
};

export default gameReducer;
