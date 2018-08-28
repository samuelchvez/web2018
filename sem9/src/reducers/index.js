import { combineReducers } from 'redux';

import inventory from './inventory';
import cart from './cart';

const reducer = combineReducers({
  inventory,
  cart,
});
