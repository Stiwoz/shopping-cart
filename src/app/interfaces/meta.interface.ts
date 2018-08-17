export class IMetaData {
  public isSelected: boolean = false;
  public isNew: boolean = false;
  public isDeleting: boolean = false;
  public isSaving: boolean = false;
  public originalState?: any;

  constructor(obj?) {
    if (obj) {
      this.isSelected = obj.isSelected;
      this.isNew = obj.isNew;
      this.isDeleting = obj.isDeleting;
      this.isSaving = obj.isSaving;
      this.originalState = obj.originalState;
    }
  }
}
