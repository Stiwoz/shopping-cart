import { Injectable } from '@angular/core';
import { IPlabAction } from '../interfaces';

@Injectable()
export class GlobalActions {
	public static readonly TYPE = 'GLOBAL_ACTION';
	public static readonly LOADING_STARTED = 'LOADING_STARTED';
	public static readonly LOADING_ENDED = 'LOADING_ENDED';
	public static readonly STORE_VIEWPORT = 'STORE_VIEWPORT';
	public static readonly TOGGLE_MENU = 'TOGGLE_MENU';

	public loadingStarted = (): IPlabAction => ({
		type: GlobalActions.LOADING_STARTED,
		meta: { type: GlobalActions.TYPE }
	})

	public loadingEnded = (): IPlabAction => ({
		type: GlobalActions.LOADING_ENDED,
		meta: { type: GlobalActions.TYPE }
	})

	public storeViewport = (device: string): IPlabAction => ({
		type: GlobalActions.STORE_VIEWPORT,
		payload: { viewport: device },
		meta: { type: GlobalActions.TYPE }
	})
}
