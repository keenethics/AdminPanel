import React from 'react';
import PropTypes from 'prop-types';

const Fieldset = ({ children }) => {
  if (!children) return null;

  return (
    <div className="fieldset">
      {children}
    </div>
  );
};

Fieldset.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
};
Fieldset.defaultProps = {
  children: null,
};

export default Fieldset;
