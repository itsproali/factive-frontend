import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoggedIn = () => {
  const { user } = useSelector((state) => state);
  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default LoggedIn;
