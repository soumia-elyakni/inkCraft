import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { CgDetailsMore, CgDetailsLess } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";
import { activestorie, desactivateStorie } from "../../../actions/storie-actions";



const StorieCard = ({
  id,
  title,
  description,
  langue,
  resume,
  isActived
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeStorie = localStorage.getItem("activeStorie")
  const [showDetails, setShowDetails] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isActive, setIsActive] = useState(isActived);

  useEffect(() => {
    
    setIsActive(activeStorie === id);
  }, [activeStorie]);
  
  
  function toggleActive(id) {
    if (!isActive) {
      localStorage.setItem("activeStorie", id);
      dispatch(activestorie(id));
      setIsActive(true);
    } else {
      const verified = activeStorie === id;
      if (!verified) {
        localStorage.setItem("activeStorie", id);
        dispatch(activestorie(id));
      } else {
        localStorage.removeItem("activeStorie");
        dispatch(desactivateStorie());
        setIsActive(false);
      }
    }
  }
 
  
  
  
  
  
  
 


  function toggleContent() {
    setShowContent(!showContent);
  }

  // const [content, setContent] = useState(description);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="" style={{ width: "275px" }}>
      <div
        className="relative flex flex-row w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700 rounded-2xl"
        style={{ minHeight: "250px", maxHeight: "300px" }}
      >
        <div className="flex flex-col">

       
        <h3 className="text-2xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-sm inline-block text-gray-400">
          {showContent ? description : description.slice(0, 50) + "..."}
        </p>
        {!showContent ? (
          <button onClick={toggleContent}>
            <CgDetailsMore />
          </button>
        ) : (
          <button onClick={toggleContent}>
            <CgDetailsLess />
          </button>
        )}
        <p className="text-sm text-gray-400">Langue :{langue}</p>
        </div>
        <div className="flex flex-col top-0 right-0">
          <button
            className="mr-2"
            onClick={() => {
              navigate(`${id}`, {
                state: {
                  id: id,
                  title: title,
                  description: description,
                  resume: resume,
                  langue: langue,
                },
              });
            }}
          >
            <AiOutlineEye className="" />
          </button>
          <button
            className="mr-2"
            onClick={() =>
              alert("Vous devez vous connecter pour modifier cette histoire")
            }
          >
            <AiOutlineEdit />
          </button>
          <button className="mr-2" onClick={()=> toggleActive(id)}>
            {isActive ? <BsLightbulbOff /> : <BsLightbulb />}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export { StorieCard };
