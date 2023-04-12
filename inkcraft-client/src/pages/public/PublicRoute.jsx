import React from 'react';
import { Outlet } from 'react-router';
import {  Navigate } from "react-router-dom";


export const PublicRoute = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem('token'))
  let isAuthenticated = false;
  user ? isAuthenticated = true : isAuthenticated = false;

  console.log("qmskqmlsmlqsmqlskqmlsq",isAuthenticated)
  
return (
<>
{isAuthenticated ? <>
    { (user.role === 'writter')? <Navigate to="/dash" /> :(user.role === "translator")? <Navigate to="/tdash" /> 
    : <Navigate to="/adash" /> }  </> :<Outlet/>}</>
)
   
 

};
