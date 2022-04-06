import React from 'react';
import './Shape.css';

export default function Shape(props) {
  const classes = `shape ${props.type} ${props.color} ${props.small ? 'small' : ''}`;
  return <div className={classes}></div>;
}
