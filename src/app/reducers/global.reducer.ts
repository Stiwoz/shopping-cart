import { IPlabAction } from '../interfaces';
import { IAppState, getInitialState } from '../app.state';
import { GlobalActions } from '../actions';

export function createGlobalReducer(actionType: IPlabAction['type']) {
  return function globalReducer(
    lastState: IAppState = getInitialState(),
    action: IPlabAction
  ): IAppState {
    if (!action.meta || action.meta.type !== actionType) {
      return lastState;
    }
    const loadingBar: HTMLElement | null = document.getElementById('load-bar');

    switch (action.type) {
      case GlobalActions.STORE_VIEWPORT:
        return {
          ...lastState,
          viewport: action.payload.viewport
        };

      case GlobalActions.LOADING_STARTED:
        if (loadingBar) {
          loadingBar.style.display = 'block';
        }
        return {
          ...lastState,
          loadingInProgress: true
        };

      case GlobalActions.LOADING_ENDED:
        if (loadingBar) {
          loadingBar.style.display = 'none';
        }
        return {
          ...lastState,
          loadingInProgress: false
        };

      default:
        return lastState;
    }
  };
}
