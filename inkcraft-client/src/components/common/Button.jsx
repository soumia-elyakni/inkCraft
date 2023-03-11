import React from 'react';


export const Button = (props) => {
  return (
    <button className={`button button-${props.className}  transition-colors duration-300`}>
      {props.text}
    </button>
  );
}