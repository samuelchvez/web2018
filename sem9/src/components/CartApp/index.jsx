import React, { Fragment } from 'react';

import InventoryList from '../InventoryList';
import CartTotal from '../CartTotal';


const CartApp = () => (
  <Fragment>
    <InventoryList />
    <CartTotal />
  </Fragment>
);

export default CartApp;
