import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  // Note: Coming from backend

  const isAuthenticated = true,
    loading = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoutes;
