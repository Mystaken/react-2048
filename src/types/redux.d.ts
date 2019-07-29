import { Action } from 'redux';

interface IActionError {
  error?: Error;
  message: string;
}

interface IAction<T> extends Action<string> {
  body: T;
  error?: IActionError;
}
