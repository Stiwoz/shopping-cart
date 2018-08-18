import { IPlabAction } from '../interfaces';
import { IAppState, getInitialState } from '../app.state';
import { ItemsActions } from '../actions';

export function createItemsReducer(actionType: IPlabAction['type']) {
  return function itemsReducer(
    lastState: IAppState = getInitialState(),
    action: IPlabAction
  ): IAppState {
    if (!action.meta || action.meta.type !== actionType) {
      return lastState;
    }

    switch (action.type) {
      case ItemsActions.TOGGLE_ITEM:
        let itemsList = lastState.selectedCart.items.map(item => {
          if (item.id === action.payload.selectedItemId) {
            item.checked = !item.checked;
          }
          return item;
        });
        return {
          ...lastState,
          selectedCart: {
            ...lastState.selectedCart,
            items: itemsList
          }
        };

      case ItemsActions.DELETE_ITEM:
        return {
          ...lastState,
          selectedCart: {
            ...lastState.selectedCart,
            items: lastState.selectedCart.items.filter(
              item => item.id !== action.payload.selectedItemId
            )
          }
        };

      case ItemsActions.ADD_ITEM:
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
