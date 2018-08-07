import React, { Component, Fragment } from 'react';

import LifeCycleEventDemo from './LifeCycleEventDemo';
import { getRandomText } from './utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false,
      currentText: 'frase X',
    };
  }

  render() {
    const {
      isShowing,
      currentText,
    } = this.state;
    return (
      <Fragment>
        { isShowing && <LifeCycleEventDemo text={currentText} /> }
        <button
          type="button"
          onClick={() => this.setState({
            isShowing: !isShowing,
          })}
        >
          {'Toggle!'}
        </button>
        <button
          type="button"
          onClick={() => this.setState({
            currentText: getRandomText(),
          })}
        >
          {'Change text!'}
        </button>
      </Fragment>
    );
  }
}

export default App;
