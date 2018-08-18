import { IPlabAction } from '../interfaces';
import { IAppState, getInitialState } from '../app.state';
import { CartsActions } from '../actions';

export function createCartsReducer(actionType: IPlabAction['type']) {
  return function cartsReducer(
    lastState: IAppState = getInitialState(),
    action: IPlabAction
  ): IAppState {
    if (!action.meta || action.meta.type !== actionType) {
      return lastState;
    }

    switch (action.type) {
      case CartsActions.OPEN_CART:
        const cartIndex = lastState.carts.findIndex(
          cart => cart.id === action.payload.selectedCartId
        );
        return {
          ...lastState,
          selectedCart: lastState.carts[cartIndex]
        };

      case CartsActions.DELETE_CART:
        return {
          ...lastState,
          carts: lastState.carts.filter(
            cart => cart.id !== action.payload.selectedCartId
          )
        };

      case CartsActions.ADD_CART:
        let newCarts = lastState.carts;
        newCarts.push(action.payload.selectedCart);
        return {
          ...lastState,
          carts: newCarts.sort((cart1, cart2) => cart2.order - cart1.order)
        };

      default:
        return lastState;
    }
  };
}
