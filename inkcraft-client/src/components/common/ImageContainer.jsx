import React from 'react';

export const ImageContainer = (props) => {
  return (
    <img  src={props.src} alt={props.alt}  className={`picture  + ${props.className}`}/>
  );
};

