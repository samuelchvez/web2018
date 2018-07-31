import React from 'react';

import Light from '../Light';
import './trafficlight.css';


const TrafficLight = ({
  colors = ['red', 'yellow', 'green'],
  turnedOnLight = 'red',
  size = 'medium',
}) => (
  <div className="trafficLight">
    {
      colors.map(
        color => (
          <Light
            color={color}
            size={size}
            isTurnedOn={color === turnedOnLight}
          />
        )
      )
    }
  </div>
);


export default TrafficLight;
