import * as types from '../types';

export const addToInventory = (
  id,
  name,
  price,
  qty,
) => ({
  type: types.INVENTORY_ADDED,
  payload: {
    id,
    name,
    price,
    qty,
  }
});

export const addToCart = id => ({
  type: types.PRODUCT_ADDED_TO_CART,
  payload: {
    id,
  }
});
