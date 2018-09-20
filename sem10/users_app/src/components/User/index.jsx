import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import * as selectors from '../../reducers';
import * as actions from '../../actions/users';


const User = ({ firstName, lastName, username, email, isConfirmed, onDelete }) => (
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
    {
      !isConfirmed && (
        <Spinner name="ball-beat" color="purple"/>
      )
    }
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
