/**
 * Stato dell'applicazione
 */
export interface IAppState {
	loadingInProgress: boolean;
	viewport: 'desktop' | 'mobile';
}

const _INITIAL_STATE: IAppState = {
	loadingInProgress: false,
	viewport: 'mobile',
};

/**
 * Estendo lo stato iniziale dell'applicazione con i valori del sessionStorage e del localStorage
 */
export const getInitialState = (): IAppState => {
	return {
		..._INITIAL_STATE,
	};
};
