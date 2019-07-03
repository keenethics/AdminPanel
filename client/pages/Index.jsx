import React from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
} from 'redux-react-hook';
import {
  Button,
} from 'Form';
import {
  logout,
} from 'Actions/auth';

const Index = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>
        Main page
        {user && user.email}
        <Button
          text="Logout"
          className="green"
          onClick={() => dispatch(logout())}
        />
      </h1>
    </div>
  );
};

Index.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

Index.defaultProps = {
  user: {},
};

export default Index;
