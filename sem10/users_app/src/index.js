import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';
import UserApp from './components/UserApp';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <UserApp />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
