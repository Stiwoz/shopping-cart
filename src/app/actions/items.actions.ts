import { Injectable } from '@angular/core';
import { IPlabAction } from '../interfaces';
import { CartModel } from '../models';

@Injectable()
export class ItemsActions {
  public static readonly TYPE = 'ITEMS_ACTION';
  public static readonly TOGGLE_ITEM = 'TOGGLE_ITEM';
  public static readonly DELETE_ITEM = 'DELETE_ITEM';
  public static readonly ADD_ITEM = 'ADD_ITEM';

  public toggleItem = (itemId: string): IPlabAction => ({
    type: ItemsActions.TOGGLE_ITEM,
    payload: { selectedItemId: itemId },
    meta: { type: ItemsActions.TYPE }
  });

  public deleteItem = (itemId: string): IPlabAction => ({
    type: ItemsActions.DELETE_ITEM,
    payload: { selectedItemId: itemId },
    meta: { type: ItemsActions.TYPE }
  });

  public addItem = (cart: CartModel): IPlabAction => ({
    type: ItemsActions.ADD_ITEM,
    payload: { selectedCart: cart },
    meta: { type: ItemsActions.TYPE }
  });
}
