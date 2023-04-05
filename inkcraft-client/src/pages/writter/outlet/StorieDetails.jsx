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
      <h3>Personnages:</h3>
      <ul>
        {state.personnages.map((personnage, index) => (
          <li key={index}>{personnage.name}</li>
        ))}
      </ul>
    </div>
  );
};

export  {StorieDetails};
