import React, { useState } from 'react';
import Shape from '../components/Shape/Shape';

import './Problem1.css';

export default function Problem1() {
  const [color, setColor] = useState('red');

  const handleBlue = async () => {
    await setColor('blue');
  };

  return (
    <div className="problem-container">
      <h2>Problem 1: Props and State</h2>

      <div className="description">
        Clicking on each of the small circles should change the color of the large circle. Add
        state, event listeners and update props to make that happen.
      </div>
      <div className="shape-controls">
        <div className="blue-ciricle" onClick={handleBlue}>
          <Shape color="blue" type="circle" small />
        </div>
        <Shape color="purple" type="circle" small />
        <Shape color="green" type="circle" small />
      </div>
      <div className="selected-shape">
        <Shape color={color} type="circle"></Shape>
      </div>
    </div>
  );
}
