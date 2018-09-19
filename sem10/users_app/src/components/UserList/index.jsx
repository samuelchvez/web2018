import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import * as actions from '../../actions/users';
import User from '../User';


const UserList = ({ userIds }) => (
  userIds.length > 0 ? (
    <ul>
      { userIds.map(id => <User key={id} id={id} />) }
    </ul>
  ) : (
    <div className="noUsers">
      { 'No hay usuarios!' }
    </div>
  )
);


export default connect(
  state => ({
    userIds: selectors.getUserIds(state),
  }),
  undefined,
)(UserList);
