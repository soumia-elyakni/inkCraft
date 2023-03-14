import React from 'react';

export const Input = (props) => {
    return (
      <input
        type={props.type}
        className={`w-full + ${props.className}`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        name={props.name}
      />
    );
  }