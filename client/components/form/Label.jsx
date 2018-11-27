import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children }) => (
  <label className="label" htmlFor={htmlFor}>
    {children}
  </label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
};
Label.defaultProps = {
  children: 'Label',
};

export default Label;
