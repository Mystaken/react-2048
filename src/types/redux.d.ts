import { Action } from 'redux';

interface IActionError {
  error?: Error;
  message: string;
}

interface IAction<T extends string, B = any> extends Action<T> {
  body?: B;
  error?: IActionError;
}
