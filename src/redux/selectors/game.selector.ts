import { IReduxState } from '../reducers';
import { createSelector } from 'reselect';
import { hasValue, canMove } from '@2048/services/game.service';

export const $game = (state: IReduxState) => state.game.game;
export const $board = createSelector(
  $game,
  game => game.board
);
export const $dimensions = createSelector(
  $game,
  ({ height, width }) => ({ height, width })
);

export const $won = createSelector(
  $board,
  board => hasValue(board, value => value >= 2048)
);

export const $lost = createSelector(
  $board,
  board => !canMove(board)
);
