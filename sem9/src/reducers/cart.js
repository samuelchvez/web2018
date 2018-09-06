import { combineReducers } from 'redux';

import * as types from '../types';


const byId = (state = {}, action) => {
  switch (action.type) {
    case types.PRODUCT_ADDED_TO_CART: {
      const { id } = action.payload;
      const qty = state[id];

      if (typeof qty !== 'undefined') {
        return {
          ...state,
          [id]: qty + 1,
        };
      }

      return {
        ...state,
        [id]: 1,
      };
    }
    default: return state;
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.PRODUCT_ADDED_TO_CART: {
      const { id } = action.payload;

      if (!state.includes(id)) {
        return [...state, id];
      }

      return state;
    }
    default: return state;
  }
};

const cart = combineReducers({
  byId,
  order,
});

export default cart;

export const getProductQuantity = (state, id) => state.byId[id] || 0;
export const getProductIdsInCart = (state) => state.order;
export const getProductQtysInCart = (state) => getProductIdsInCart(state).map(id => getProductQuantity(state, id));

/*

LOS SELECTORES LOCALES

state = {
  byId: {},
  order: []
}

*/
