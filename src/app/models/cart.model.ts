import { IMetaData } from '../interfaces';
import { ItemModel } from './item.model';
import UUID from '../utils/functions/uuid';

export class CartModel {
  public id: string;
  public order: number;
  public name: string;
  public city?: string;
  public items: ItemModel[];
  public meta: IMetaData;

  constructor(data?, order?: number) {
    if (data) {
      this.id = data.id;
      this.order = data.order;
      this.items = data.items.map(item => new ItemModel(item));
      this.name = data.name;
      this.city = data.city;
    } else {
      this.id = UUID();
    }
    if (order !== undefined) {
      this.order = order;
    }
    this.meta = new IMetaData();
  }
}
