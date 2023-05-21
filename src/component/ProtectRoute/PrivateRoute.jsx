import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const user = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate replace state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;
