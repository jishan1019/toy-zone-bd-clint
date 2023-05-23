import React from "react";
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }

  console.log(user, location);

  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
