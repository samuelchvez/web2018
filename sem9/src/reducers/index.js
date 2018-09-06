import { combineReducers } from 'redux';

import inventory, * as fromInventory from './inventory';
import cart, * as fromCart from './cart';

const reducer = combineReducers({
  inventory,
  cart,
});

export default reducer;


export const getProduct = (state, id) =>
  fromInventory.getProduct(state.inventory, id);
export const getProducts = (state) =>
  fromInventory.getProducts(state.inventory);

export const getPricesInCart = (state) => fromCart.getProductIdsInCart(state.cart).map(id => fromInventory.getProduct(state.inventory, id).price);

export const getCartTotal = (state) => {
  let total = 0;
  const prices = getPricesInCart(state);
  const qtys = fromCart.getProductQtysInCart(state.cart);
  for (let i = 0; i < prices.length; i++) {
    total += prices[i] * qtys[i];
  }

  return total;
};

/*

LOS SELECTORES

const leState = {
  inventory: {
    byId: {},
    order: []
  },
  cart: {
    byId: {},
    order: []
  },
};

getProduct(leState, 3);


*/
