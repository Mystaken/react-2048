import { combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'react';
import { IAction } from '@2048/types/redux';
import gameReducer, { GameState } from './game.reducer';

export interface IReduxState {
  game: GameState;
}
export type INormalDispatch<T extends string, B> = Dispatch<IAction<T, B>>;
export type IThunkDispatch<T extends string, B> = ThunkDispatch<
  IReduxState,
  any,
  IAction<T, B>
>;

const rootReducer = combineReducers<IReduxState>({
  game: gameReducer
});

export default rootReducer;
