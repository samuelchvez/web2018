import { combineReducers } from 'redux';

import * as types from '../types';


const byId = (state = {
  '2': {
    id: '2',
    name: 'apple',
    price: 5,
    qty: 10,
  },
  '1': {
    id: '1',
    name: 'banana',
    price: 2,
    qty: 100,
  },
}, action) => {
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

const order = (state = ['1', '2'], action) => {
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

export default inventory;
