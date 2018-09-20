import {
  createStore,
  applyMiddleware, // nuevo
} from 'redux';
import createSagaMiddleware from 'redux-saga'; // nuevo

import reducer from './reducers';
import mainSaga from './sagas'; // nuevo


const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [sagaMiddleware]; // nuevo
  const store = createStore(
    reducer,
    applyMiddleware(...middlewares), // nuevo
  );

  sagaMiddleware.run(mainSaga); // nuevo

  return store;
};

export default configureStore;
