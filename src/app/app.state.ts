import { CartModel } from './models/cart.model';
import { MockDataService } from './utils/classes/mock-data';

/**
 * Stato dell'applicazione
 */
export interface IAppState {
  loadingInProgress: boolean;
  viewport: 'desktop' | 'mobile';
  carts: CartModel[];
  selectedCart: CartModel;
}

const _INITIAL_STATE: IAppState = {
  loadingInProgress: false,
  viewport: 'mobile',
  carts: undefined,
  selectedCart: undefined
};

/**
 * Estendo lo stato iniziale dell'applicazione con i valori del sessionStorage e del localStorage
 */
export const getInitialState = (): IAppState => {
  return { ..._INITIAL_STATE, carts: MockDataService.staticMockData };
};
