import { fork, all } from 'redux-saga/effects';

import { watchUserCreation } from './users';


function* mainSaga() {
  yield all([
    fork(watchUserCreation),
  ]);
}

export default mainSaga
