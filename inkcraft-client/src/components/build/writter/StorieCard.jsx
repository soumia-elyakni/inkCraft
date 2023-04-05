import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const StorieCard = ({ id, title, description, langue, resume, personnages }) => {
  const navigate = useNavigate()
  const [showDetails, setShowDetails] = useState(false);
  const [showContent, setShowContent] = useState(false);

  function toggleContent() {
    setShowContent(!showContent);
  }
  const [content, setContent] = useState(
    description
  );

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="" style={{ width: 300 }}>
      <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
        <h3 className="text-2xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-sm inline-block text-gray-400">
          {showContent ? content : content.slice(0, 70) + '...'}
        </p>
        {!showContent ? (
            <button onClick={toggleContent}>Voir plus</button>
          ) : (
            <button onClick={toggleContent}>Voir moins</button>
          )}
      
        <p className="text-sm text-gray-400">Langue :{langue}</p>
        <button className="mr-2"
        onClick={()=>{
            navigate(`${id}` , {state : {id: id, title: title, description: description, resume: resume, langue: langue, personnages: personnages}})
        }}>
        Voir en détail
</button>

        <button
          className="mr-2"
          onClick={() =>
            alert("Vous devez vous connecter pour modifier cette histoire")
          }
        >
          Modifier
        </button>
      </div>
    </div>
  );
};

export { StorieCard };
