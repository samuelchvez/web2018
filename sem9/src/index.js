import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


const toggle = () => ({
  type: 'TOGGLED',
});

const isTurnedOn = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLED': {
      return !state;
    }
    default: return state;
  }
};

const reducer = combineReducers({
  isTurnedOn,
});

const store = createStore(reducer);


const DummyLight = ({ isTurnedOn }) => (
  <div className={
    `
      light
      ${ isTurnedOn ? 'on' : 'off' }
    `
  } />
);

const Light = connect(
  state => ({
    isTurnedOn: state.isTurnedOn,
  }),
  undefined,
)(DummyLight);

const DummyToggleButton = (props) => <button { ...props } />;

const ToggleButton = connect(
  undefined,
  dispatch => ({
    onClick() {
      dispatch(toggle());
    }
  })
)(DummyToggleButton);

const LightApp = () => (
  <Fragment>
    <Light />
    <ToggleButton>Toggle!</ToggleButton>
  </Fragment>
);

ReactDOM.render(
  <Provider store={store}>
    <LightApp />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
