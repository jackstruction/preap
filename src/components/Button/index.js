import React from 'react';
import './Button.css';
// The Button component is a stateless functional component.
// It receives the props object, and returns a React element.
// A React element is a JS object that has a render() method.
const Button = props => {
  return (
    // The button element.
    <button
      // The className property is a string containing one or more space-separated classes.
      className={`Button${props.style}`}
      // The onClick property is a function that takes an event object as an argument.
      onClick={props.onClick}
      // The type property is a string that specifies the type of button.
      type="button"
    >
      {props.text}
    </button>
  );
};

export default Button;

