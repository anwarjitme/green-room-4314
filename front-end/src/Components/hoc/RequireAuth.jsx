import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isAuth, token } = useSelector((store) => store.login);
  const { pathname } = useLocation();

  if (isAuth) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default RequireAuth;
