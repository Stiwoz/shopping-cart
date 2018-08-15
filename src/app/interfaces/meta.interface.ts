export class IMetaData {
	public isSelected = false;
	public isNew = false;
	public isDeleting = false;
	public isSaving = false;
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
