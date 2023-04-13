import React from 'react';
import { useLocation } from 'react-router-dom';

const StorieDetails = () => {
  const location = useLocation();
  console.log(location.state)
  const state = location.state

  return (
    <div>
        
      <h2>{state.title}</h2>
      <p>{state.description}</p>
      <p>Langue: {state.langue}</p>
      <p>Résumé: {state.resume}</p>
   
    </div>
  );
};

export  {StorieDetails};
