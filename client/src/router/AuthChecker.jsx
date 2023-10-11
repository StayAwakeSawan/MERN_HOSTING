import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthChecker({ children }) {
  // login
  // if auth
  // not login page

  const token = useSelector((state) => state.user.token);

  let authentication = token ? true : false;

  if (authentication) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
}

export default AuthChecker;
