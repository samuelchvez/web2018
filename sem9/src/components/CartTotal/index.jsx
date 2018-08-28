import React from 'react';
import { connect } from 'react-redux';


const CartTotal = ({ total }) => (
  <h2>
    { total }
  </h2>
);

export default connect(
  state => {
    let total = 0;
    const prices = state.cart.order.map(id => state.inventory.byId[id].price);
    const qtys = state.cart.order.map(id => state.cart.byId[id]);
    for (let i = 0; i < prices.length; i++) {
      total += prices[i] * qtys[i];
    }

    return {
      total,
    }
  },
  undefined,
)(CartTotal);
