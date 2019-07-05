import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
  useMappedState,
} from 'redux-react-hook';
import { Route, Redirect } from 'react-router-dom';

import Loader from 'Common/Loader';

import { fetchUser } from 'Actions/auth';

const RouteWrapper = ({
  path,
  component: Component,
  onlyAuthenticated,
  onlyUnauthenticated,
}) => {
  const dispatch = useDispatch();
  const mapState = useCallback(({ auth }) => auth);
  const {
    isLoading,
    user,
  } = useMappedState(mapState);

  useEffect(() => {
    if (
      (
        onlyAuthenticated
        || onlyUnauthenticated
      )
      && !user
    ) {
      dispatch(fetchUser());
    }
  }, [path]);

  return (
    <Route
      path={path}
      render={(props) => {
        if (path.includes('/callback') && user) return <Redirect to={{ pathname: '/' }} />;
        if (isLoading) return <Loader />;

        if (onlyAuthenticated && !user) {
          return <Redirect to={{ pathname: '/auth' }} />;
        }
        if (onlyUnauthenticated && user) {
          return <Redirect to={{ pathname: '/' }} />;
        }
        if (Component) return <Component {...props} user={user} />;

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
