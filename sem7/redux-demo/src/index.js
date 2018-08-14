import {
  createStore,
  combineReducers,
} from 'redux';

//     V----- action creator (function)
const toggle = () => ({  // <------- action (pojo)
  type: 'TOGGLED',
});

const changeIsTurned = (isOn) => ({
  type: 'TURNED_ON_CHANGED',
  payload: isOn,
});

//                                   v----- action (pojo)
const isTurnedOn = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLED': {
      return !state;
    }
    case 'TURNED_ON_CHANGED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};


const reducer = combineReducers({
  isTurnedOn,
});

const store = createStore(reducer);

console.log("S0:", store.getState());
console.log("A0", toggle());
store.dispatch(toggle());
console.log("S1:", store.getState());

/*
Estado:

{
  isTurnedOn: true,
}

*/

















/*
{
  type: 'TOGGLE',
}
*/



























// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
