import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const composeEnhancers = (process as any).browser
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
