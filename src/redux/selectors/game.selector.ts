import { IReduxState } from '../reducers';
import { createSelector } from 'reselect';

export const $game = (state: IReduxState) => state.game.game;
export const $board = createSelector(
  $game,
  game => game.board
);
export const $dimensions = createSelector(
  $game,
  ({ height, width }) => ({ height, width })
);
