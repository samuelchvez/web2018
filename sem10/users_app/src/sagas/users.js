import {
  // call,
  takeEvery,
  // put,
} from 'redux-saga/effects';

import { createUser } from '../api/users';
import * as types from '../types/users';


function* addUserGenerator(action) {
  const {
    payload: {
      firstName,
      lastName,
      username,
      email,
    }
  } = action;

  console.log("ESTO ESTA SUCEDIENDO!!!", firstName, lastName, username, email);

  // yield call(
  //   [Clients, 'remove'],
  //   { token, id: payload, mock },
  // );
}


export function* watchUserCreation() {
  yield takeEvery(
    types.USER_ADDED,
    addUserGenerator,
  );
}
