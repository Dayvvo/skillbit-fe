import React, { useEffect,useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import useAuthActions from '../../hooks/useAuth';
import useLogin from '../../hooks/useLogin';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Selectors
  const { auth } = useAuthActions();

  useLogin()

  const isAuthenticated = auth?.isAuthenticated ? true : false;


  const memoizeRenderedComponent = useMemo(
    () => (
      <Box mb="6rem">
        <Route
          {...rest}
          render={(props) =>
            !isAuthenticated ? (
              <Redirect to="/login" />
            ) : (
              <Box>
                <Component {...props} />
              </Box>
            )
          }
        />
      </Box>
    ),

    [isAuthenticated, Component]
  );

  return memoizeRenderedComponent;
};

export default PrivateRoute;
