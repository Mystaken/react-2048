import { Game, Board } from '@2048/types/game';
import { generateEmptyBoard } from '@2048/services/game.service';
import { IAction } from '@2048/types/redux';

export const ACTIONS = {
  SET_BOARD: 'SET_BOARD'
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
  action: IAction<keyof typeof ACTIONS, Board>
): GameState => {
  switch (action.type) {
    case 'SET_BOARD':
      return {
        ...state,
        game: {
          ...state.game,
          board: action.body as Board
        }
      };
    default:
      return state;
  }
};

export default gameReducer;
