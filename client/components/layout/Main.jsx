import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'Common/Navigation';

const MainLayout = ({ children }) => (
  <>
    <header className="header" role="banner">
      <Navigation />
    </header>
    <main className="main" role="main">
      {children}
    </main>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
