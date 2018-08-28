import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import InventoryItem from '../InventoryItem';


const InventoryList = ({ products = [] }) => (
  <Fragment>
    <h1>{'Inventario:'}</h1>
    <ul>
      {
        products.map(({ id }) => <InventoryItem id={id} />)
      }
    </ul>
  </Fragment>
);

export default connect(
  state => ({
    products: state.inventory.order.map(id => state.inventory.byId[id]),
  }),
  undefined,
)(InventoryList);
