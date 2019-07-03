import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ user }) => (
  <div className="container">
    <h1>
      Main page
      {user && user.email}
    </h1>
  </div>
);

Index.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

Index.defaultProps = {
  user: {},
};

export default Index;
