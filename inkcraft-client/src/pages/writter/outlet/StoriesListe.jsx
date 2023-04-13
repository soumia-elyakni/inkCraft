import React from 'react'
import { GiSilverBullet } from 'react-icons/gi'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { StorieCard } from '../../../components/build/writter/StorieCard'
import { getAllStories } from '../../../services/writter-services';
import { Button } from '../../../components/common/Button';

export const StoriesListe = () => {
  const [stories, setStories] = useState([])
  const navigate = useNavigate()
  const activeStorie = localStorage.getItem("activeStorie")

  useEffect(() => {
    getAllStories()
    .then((response) => {
     
      setStories(response);
    })
    .catch((err) => console.log(err));
  },[]);

 
  
  

return (
  <div className="grid grid-cols-2 gap-6 p-2 mt-3 py-4 bg-slate-50">
      <div className='fixed right-0 bg-lime-800 rounded-3xl'>
          <Button text={<GiSilverBullet/>} onClick={()=> navigate('add')} />
      </div>
      {stories && stories.length > 0 ? (
        stories.map((storie) => {
          const isStorieActive = activeStorie === storie._id;
          return (
            <StorieCard
              key={storie._id}
              id={storie._id}
              title={storie.title}
              description={storie.description}
              langue={storie.langue}
              resume={storie.resume}
              personnages={storie.personnages}
              isActived={isStorieActive}
            />
          );
        })
      ) : (
        <p>No stories found.</p>
      )}
</div>
);
    
    
}
