import React, { useEffect, useCallback } from 'react';

import { Button } from 'Form';
import {
  useDispatch,
  useMappedState,
} from 'redux-react-hook';
import {
  getAuthUrl,
} from 'Actions/getData';


const Auth = () => {
  const dispatch = useDispatch();
  const mapState = useCallback(({ getData }) => ({
    authUrl: getData.authUrl,
  }), []);
  const { authUrl } = useMappedState(mapState);

  useEffect(() => {
    dispatch(getAuthUrl());
  }, []);

  return (
    <div className="container">
      <Button
        text="Sign in with Google"
        className="green"
        onClick={() => {
          window.location.href = authUrl;
        }}
      />
    </div>
  );
};

export default Auth;
