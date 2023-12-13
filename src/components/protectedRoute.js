
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element, isAuthenticated, fallbackPath }) => {
//   if (!isAuthenticated) {
//     return <Navigate to={fallbackPath} />;
//   }

//   return <Route element={element} />;
// };

// export default PrivateRoute;
import React from "react";
import { Outlet, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, redirect = "/login" }) => {
  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to={redirect} />;
};

export default ProtectedRoute;
