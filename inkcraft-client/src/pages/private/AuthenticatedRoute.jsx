import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router";

export const AuthenticatedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (!user)? <Navigate to="login" /> : <Outlet />
   
};
