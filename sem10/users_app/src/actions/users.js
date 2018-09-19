import * as types from '../types/users';

export const addUser = (id, firstName, lastName, email, username) => ({
  type: types.USER_ADDED,
  payload: {
    id,
    firstName,
    lastName,
    email,
    username,
  },
});

export const removeUser = id => ({
  type: types.USER_REMOVED,
  payload: { id },
});
