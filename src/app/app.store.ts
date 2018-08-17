import { GlobalActions } from './actions';
import { Reducer } from 'redux';
import { createGlobalReducer } from './reducers';
import { IAppState } from './app.state';
import { IPlabAction } from './interfaces';

export const getRootReducer = (): Reducer<IAppState, IPlabAction> =>
  combineReducers(createGlobalReducer(GlobalActions.TYPE));

export const combineReducers = (...reducers) => (prevState, value, ...args) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState
  );
