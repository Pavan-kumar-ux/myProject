import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, redirectTo = "/", path }) => {
  const token = Cookies.get("jwt_token");

  // Check if the user is authenticated
  if (token !==undefined) {
    // If user is already authenticated and trying to access login page, redirect them to home
    if (path === "/login") {
      return <Navigate to={redirectTo} replace />;
    }
    // Otherwise, render the requested element
    return element;
  }

  // If the user is not authenticated, redirect them to the login page
  if (token === undefined && path !== "/login") {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
