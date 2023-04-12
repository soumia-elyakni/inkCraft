import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router";

export const AuthorizedRoute = (params) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  return role === params.role ? <Outlet /> : <Navigate to="login" />;
};
