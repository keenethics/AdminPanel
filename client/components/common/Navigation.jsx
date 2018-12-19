import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav
    className="navigation"
    role="navigation"
    aria-label="primary"
  >
    <div className="container">
      <ul role="menubar">
        <li role="menuitem">
          <NavLink to="/" exact>Main</NavLink>
        </li>
        <li role="menuitem">
          <NavLink to="/form-components">Form components</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
