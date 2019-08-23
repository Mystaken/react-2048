import { Game, Board } from '@2048/types/game';
import { generateEmptyBoard } from '@2048/services/game.service';
import { IAction } from '@2048/types/redux';

export const ACTIONS = {
  SET_BOARD: 'SET_BOARD'
};

export interface GameState {
  game: Game;
  newCell: [number, number] | null;
}

const initialState: GameState = {
  game: {
    height: 4,
    width: 4,
    board: generateEmptyBoard(4, 4)
  },
  newCell: null
};

export interface SET_BOARD_ACTION {
  board: Board;
  newCell: [number, number] | null;
}

const gameReducer = (
  state: GameState = initialState,
  action: IAction<string, { board: Board; newCell: [number, number] }>
): GameState => {
  switch (action.type) {
    case 'SET_BOARD':
      return {
        ...state,
        game: {
          ...state.game,
          board: (action.body as SET_BOARD_ACTION).board
        },
        newCell: (action.body as SET_BOARD_ACTION).newCell
      };
    default:
      return state;
  }
};

export default gameReducer;
