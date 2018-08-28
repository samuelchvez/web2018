import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';
import CartApp from './components/CartApp';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <CartApp />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
