import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


const InventoryItem = ({
  name,
  price,
  qty,
  onClick,
}) => (
  <li>
    {name}
    {'-'}
    {price}
    {'-'}
    ({qty}):
    {
      qty > 0
      ? (
        <button onClick={onClick}>Add!</button>
      ) : <button disabled>Add!</button>
    }
  </li>
);

export default connect(
  (state, { id }) => ({
    ...state.inventory.byId[id],
  }),
  (dispatch, { id }) => ({
    onClick() {
      dispatch(actions.addToCart(id));
    }
  }),
)(InventoryItem);
