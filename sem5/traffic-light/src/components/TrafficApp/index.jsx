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

  _startRotating() {
    const timer = setInterval(this._changeLight.bind(this), 500);
    this.setState({
      timer,
    });
  }

  _stopRotating() {
    const { timer } = this.state;
    clearInterval(timer);
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
        <br/>
        <button onClick={this._startRotating.bind(this)}>Empezar!</button>
        <button onClick={this._stopRotating.bind(this)}>Parar!</button>
      </Fragment>
    );
  }
}


export default TrafficApp;

// let currentInterval = 0;

// for(let i = 0; i < 10; i++) {
//   const startTimeout = (
//     lInterval => setTimeout(() => {
//       // Encender la luz
//       currentInterval = lInterval;
//     }, timeout)
//   )(i);
// }
