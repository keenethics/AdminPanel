import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import fetchHeaders from '../extensions/FetchHeaders';

const RouteWrapper = ({
  path,
  component: Component,
  onlyAuthenticated,
  onlyUnauthenticated,
}) => {
  useEffect(() => {
    fetchHeaders('api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'john.doe@example.com', password: '123321' }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((data) => {
        if (data.token) {
          sessionStorage.setItem('jwtToken', data.token);
          // user = true;
        }
        console.log(data);
      });
  });
  return (
    <Route
      path={path}
      render={(props) => {
        const user = null;
        // const user = true;
        if (onlyAuthenticated && !user) {
          return <Redirect to={{ pathname: '/signin' }} />;
        }
        if (onlyUnauthenticated && user) {
          return <Redirect to={{ pathname: '/' }} />;
        }
        if (Component) {
          return <Component {...props} />;
        }

        return null;
      }}
    />
  );
};

RouteWrapper.propTypes = {
  path: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
  onlyAuthenticated: PropTypes.bool,
  onlyUnauthenticated: PropTypes.bool,
};
RouteWrapper.defaultProps = {
  path: '',
  component: null,
  onlyAuthenticated: false,
  onlyUnauthenticated: false,
};

export default RouteWrapper;
