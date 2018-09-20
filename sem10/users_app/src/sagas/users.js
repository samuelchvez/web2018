import {
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';

import { saveUser } from '../api/users';
import * as types from '../types/users';
import * as actions from '../actions/users';


function* addUserGenerator(action) {
  const {
    payload: {
      id,
      firstName,
      lastName,
      username,
      email,
    }
  } = action;

  const returnedUser = yield call(
    saveUser,
    firstName,
    lastName,
    username,
    email,
  );

  yield put(actions.confirmUser(id));
}


export function* watchUserCreation() {
  yield takeEvery(
    types.USER_ADDED,
    addUserGenerator,
  );
}
