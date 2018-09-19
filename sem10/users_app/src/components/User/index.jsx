import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/users';


const User = ({ firstName, lastName, username, email, onDelete }) => (
  <li>
    { firstName }
    { '-' }
    { lastName }
    { '-' }
    { username }
    { '-' }
    <a href={`mailto:${email}`}>
      { email }
    </a>
    { '-' }
    <a onClick={onDelete}>
      &times;
    </a>
  </li>
);

export default connect(
  (state, { id }) => ({
    ...selectors.getUser(state, id),
  }),
  (dispatch, { id }) => ({
    onDelete() {
      dispatch(actions.removeUser(id));
    },
  }),
)(User);
