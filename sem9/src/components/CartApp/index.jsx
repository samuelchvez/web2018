import React, { Fragment } from 'react';

import Inventory from '../Inventory';
import CartTotal from '../CartTotal';


const CartApp = () => (
  <Fragment>
    <Inventory />
    <CartTotal />
  </Fragment>
);

export default CartApp;
