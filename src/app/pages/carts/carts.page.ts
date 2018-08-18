import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { CartModel } from '../../models/cart.model';
import { IAppState } from '../../app.state';
import { CartsActions } from '../../actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'carts.page.html',
  styleUrls: ['carts.page.scss']
})
export class CartsPage {
  @select('carts')
  carts$: Observable<CartModel[]>;

  constructor(
    private ngRx: NgRedux<IAppState>,
    private cartsActions: CartsActions,
    private router: Router
  ) {}

  public delete = (cart: CartModel) => {
    this.ngRx.dispatch(this.cartsActions.deleteCart(cart.id));
  };

  public open = (cart: CartModel) => {
    this.router.navigate(['cart-detail', cart.id]);
  };
}
