import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { CartModel, ItemModel } from '../../models';
import { IAppState } from '../../app.state';
import { CartsActions, ItemsActions } from '../../actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shop-cart-detail',
  templateUrl: './cart-detail.page.html',
  styleUrls: ['./cart-detail.page.scss']
})
export class CartDetailPage implements OnInit {
  @select('selectedCart')
  selectedCart$: Observable<CartModel>;

  constructor(
    private route: ActivatedRoute,
    private ngRx: NgRedux<IAppState>,
    private cartsActions: CartsActions,
    private itemsActions: ItemsActions
  ) {}

  ngOnInit() {
    const cartId: string = this.route.snapshot.paramMap.get('cartId');
    this.ngRx.dispatch(this.cartsActions.openCart(cartId));
  }

  public toggle = (item: ItemModel) => {
    this.ngRx.dispatch(this.itemsActions.toggleItem(item.id));
  };

  public delete = (item: ItemModel) => {
    this.ngRx.dispatch(this.itemsActions.deleteItem(item.id));
  };
}
