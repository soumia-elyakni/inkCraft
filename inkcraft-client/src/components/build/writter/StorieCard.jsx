import React, { useState } from 'react';

const StorieCard = () => {
  const [content, setContent] = useState(
    "L'histoire d'une fille adoptée par une femme qui s'appelle Hadeel. Hadeel a passé une grave période à l'hôpital. Sibel a fait un don de cœur pour Hadeel."
  );
  const [showContent, setShowContent] = useState(false);

  function toggleContent() {
    setShowContent(!showContent);
  }

  return (
    <div className="">
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
        <h3 className="text-2xl font-bold text-black dark:text-white">
          Sibel
        </h3>
        <p className="text-sm inline-block text-gray-400">
          {showContent ? content : content.slice(0, 100) + '...'}
          {!showContent ? (
            <button onClick={toggleContent}>Voir plus</button>
          ) : (
            <button onClick={toggleContent}>Voir moins</button>
          )}
        </p>
        <p className="text-sm text-gray-400">Langue : Français</p>
        <button
          className="mr-2"
          onClick={() =>
            alert('Vous devez vous connecter pour voir les détails')
          }
        >
          Voir en privé
        </button>
        <button
          className="mr-2"
          onClick={() =>
            alert('Vous devez vous connecter pour modifier cette histoire')
          }
        >
          Modifier
        </button>
      </div>
    </div>
  );
};

export  {StorieCard};
