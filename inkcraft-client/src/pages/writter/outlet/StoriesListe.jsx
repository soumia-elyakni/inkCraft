import React from 'react'
// import { Link } from 'react-router-dom'
// import { GiSilverBullet } from 'react-icons/gi'
import { useState, useEffect } from 'react';
import { StorieCard } from '../../../components/build/writter/StorieCard'
import { getAllStories } from '../../../services/writter-services';

export const StoriesListe = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    getAllStories()
    .then((response) => {
     
      setStories(response);
    })
    .catch((err) => console.log(err));
  },[]);
  

return (
  <div className="grid grid-cols-2 gap-6 p-2 mt-3 py-4">
  {stories && stories.length > 0 ? (
    stories.map((storie) => (
      <StorieCard
        key={storie._id}
        id={storie._id}
        title={storie.title}
        description={storie.description}
        langue={storie.langue}
        resume={storie.resume}
        personnages={storie.personnages}
      />
    ))
  ) : (
    <p>No stories found.</p>
  )}
</div>
);
    
    
}
