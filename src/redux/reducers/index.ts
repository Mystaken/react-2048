import { combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'react';
import { IAction } from '@2048/types/redux';
import gameReducer, { GameState } from './game.reducer';

export interface IReduxState {
  game: GameState;
}
export type INormalDispatch<T> = Dispatch<IAction<T>>;
export type IThunkDispatch<T> = ThunkDispatch<IReduxState, any, IAction<T>>;

const rootReducer = combineReducers<IReduxState>({
  game: gameReducer
});

export default rootReducer;
