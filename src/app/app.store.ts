import { GlobalActions, CartsActions, ItemsActions } from './actions';
import { Reducer } from 'redux';
import {
  createGlobalReducer,
  createCartsReducer,
  createItemsReducer
} from './reducers';
import { IAppState } from './app.state';
import { IPlabAction } from './interfaces';

export const getRootReducer = (): Reducer<IAppState, IPlabAction> =>
  combineReducers(
    createGlobalReducer(GlobalActions.TYPE),
    createCartsReducer(CartsActions.TYPE),
    createItemsReducer(ItemsActions.TYPE)
  );

export const combineReducers = (...reducers) => (prevState, value, ...args) =>
  reducers.reduce(
    (newState, reducer) => reducer(newState, value, ...args),
    prevState
  );
