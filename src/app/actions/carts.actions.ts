import { Injectable } from '@angular/core';
import { IPlabAction } from '../interfaces';
import { CartModel } from '../models';

@Injectable()
export class CartsActions {
  public static readonly TYPE = 'CARTS_ACTION';
  public static readonly OPEN_CART = 'OPEN_CART';
  public static readonly DELETE_CART = 'DELETE_CART';
  public static readonly ADD_CART = 'ADD_CART';

  public openCart = (cartId: string): IPlabAction => ({
    type: CartsActions.OPEN_CART,
    payload: { selectedCartId: cartId },
    meta: { type: CartsActions.TYPE }
  });

  public deleteCart = (cartId: string): IPlabAction => ({
    type: CartsActions.DELETE_CART,
    payload: { selectedCartId: cartId },
    meta: { type: CartsActions.TYPE }
  });

  public addCart = (cart: CartModel): IPlabAction => ({
    type: CartsActions.ADD_CART,
    payload: { selectedCart: cart },
    meta: { type: CartsActions.TYPE }
  });
}
