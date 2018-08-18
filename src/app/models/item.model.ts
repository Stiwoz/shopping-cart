import { IMetaData } from '../interfaces';
import UUID from '../utils/functions/uuid';

export class ItemModel {
  public id: string;
  public order: number;
  public name: string;
  public qt: string;
  public price: string;
  public checked: boolean = false;
  public meta: IMetaData;

  constructor(data?, order?: number) {
    if (data) {
      this.id = data.id;
      this.order = data.order;
      this.checked = data.checked;
      this.name = data.name;
      this.qt = data.qt;
      this.price = data.price;
    } else {
      this.id = UUID();
    }
    if (order !== undefined) {
      this.order = order;
    }
    this.meta = new IMetaData();
  }
}
