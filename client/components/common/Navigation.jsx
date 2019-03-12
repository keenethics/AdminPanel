import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'Common/Container';

const Navigation = () => (
  <nav
    className="navigation"
    role="navigation"
    aria-label="primary"
  >
    <Container>
      <ul role="menubar">
        <li role="menuitem">
          <NavLink to="/" exact>Main</NavLink>
        </li>
        <li role="menuitem">
          <NavLink to="/form-components">Form components</NavLink>
        </li>
        <li role="menuitem">
          <NavLink to="/signin">Sign in</NavLink>
        </li>
        <li role="menuitem">
          <NavLink to="/signup">Sign up</NavLink>
        </li>
      </ul>
    </Container>
  </nav>
);

export default Navigation;
