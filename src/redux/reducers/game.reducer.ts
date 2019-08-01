import { Game, Board } from '@2048/types/game';
import { generateEmptyBoard } from '@2048/services/game.service';
import { IAction } from '@2048/types/redux';

export interface GameState {
  game: Game;
  history: Board[];
}

const initialState: GameState = {
  game: {
    height: 4,
    width: 4,
    board: generateEmptyBoard(4, 4)
  },
  history: []
};

const gameReducer = (
  state: GameState = initialState,
  action: IAction<any>
): GameState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default gameReducer;
