import { combineReducers } from 'redux';

import * as types from '../types';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.INVENTORY_ADDED: {
      const { id } = action.payload;

      return {
        ...state,
        [id]: action.payload,
      };
    }
    case types.PRODUCT_ADDED_TO_CART: {
      const { id } = action.payload;
      const product = state[id];
      const { qty } = product;
      if (qty > 0) {
        return {
          ...state,
          [id]: {
            ...product,
            qty: qty - 1,
          }
        };
      }

      return state;
    }
    default: return state;
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.INVENTORY_ADDED: {
      const { id } = action.payload;

      return [
        ...state,
        id,
      ];
    }
    default: return state;
  }
};

const inventory = combineReducers({
  byId,
  order,
});

export const getProduct = (state, id) => state.byId[id];
export const getProducts = (state) => state.order.map(
  id => getProduct(state, id),
);


/*

state = {
  byId: {},
  order: []
}

*/

export default inventory;
