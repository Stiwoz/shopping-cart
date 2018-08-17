import { IMetaData } from '../interfaces';
import { ItemModel } from './item.model';

export class CartModel {
  id: string;
  order: number;
  items: ItemModel[];
  meta: IMetaData;

  constructor(data?) {
    if (data) {
      this.id = data.id;
      this.order = data.order;
      this.items = data.items.map(item => new ItemModel(item));
    }
    this.meta = new IMetaData();
  }
}
