import { Game, Board } from '@2048/types/game';
import { generateEmptyBoard } from '@2048/services/game.service';
import { IAction } from '@2048/types/redux';

export const ACTIONS = {
  SET_BOARD: 'SET_BOARD',
  RESET_BOARD: 'RESET_BOARD',
  INITIALIZE: 'INITIALIZE'
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
  action: IAction<string, { board: Board; newCell: [number, number] } | Game>
): GameState => {
  switch (action.type) {
    case ACTIONS.SET_BOARD:
      return {
        ...state,
        game: {
          ...state.game,
          board: (action.body as SET_BOARD_ACTION).board
        },
        newCell: (action.body as SET_BOARD_ACTION).newCell || state.newCell
      };
    case ACTIONS.RESET_BOARD:
      return {
        ...initialState
      };
    case ACTIONS.INITIALIZE:
      return {
        game: action.body as Game,
        newCell: null
      };
    default:
      return state;
  }
};

export default gameReducer;
