import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';


const CartTotal = ({ total }) => (
  <h2>
    { total }
  </h2>
);

export default connect(
  state => ({
    total: selectors.getCartTotal(state),
  }),
  undefined,
)(CartTotal);
