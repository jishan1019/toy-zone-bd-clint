import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const user = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
