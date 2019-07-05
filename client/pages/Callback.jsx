import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  signinUserWithGoogle,
} from 'Actions/auth';
import queryString from 'query-string';
import {
  useDispatch,
} from 'redux-react-hook';
import Loader from 'Common/Loader';


const CallBack = ({ location }) => {
  const dispatch = useDispatch();
  const { code } = queryString.parse(location.search);
  useEffect(() => {
    dispatch(signinUserWithGoogle(code));
  }, []);

  return <Loader />;
};

CallBack.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default CallBack;
