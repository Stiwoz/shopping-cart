import { IMetaData } from '../interfaces';
import UUID from '../utils/functions/uuid';

export class ItemModel {
  public id: string;
  public order: number;
  public meta: IMetaData;

  constructor(data?) {
    if (data) {
      this.id = data.id;
      this.order = data.order;
    }
    this.id = UUID();
    this.meta = new IMetaData();
  }
}
