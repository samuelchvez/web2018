import React, { Fragment } from 'react';

import { getRndInteger } from '../../utils/random';
import TrafficLight from '../TrafficLight';


class TrafficApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLight: 0,
      colors: ['green', 'yellow', 'red'],
    };
  }

  _changeLight() {
    const {
      currentLight,
      colors,
    } = this.state;
    this.setState({
      currentLight: (currentLight + 1) % colors.length,
    })
  }

  _addRandomColor() {
    const { colors } = this.state;
    const red = getRndInteger(0, 255);
    const green = getRndInteger(0, 255);
    const blue = getRndInteger(0, 255);

    this.setState({
      colors: [
        ...colors,
        `rgb(${red}, ${green}, ${blue})`,
      ]
    });
  }

  render() {
    const { colors, currentLight } = this.state;
    return (
      <Fragment>
        <TrafficLight
          colors={colors}
          turnedOnLight={colors[currentLight]}
        />
        <button onClick={this._changeLight.bind(this)}>Cambiar!</button>
        <button onClick={this._addRandomColor.bind(this)}>Agregar!</button>
      </Fragment>
    );
  }
}


export default TrafficApp;
