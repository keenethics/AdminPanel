import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children }) => (
  <form className="form" onSubmit={onSubmit}>
    {children}
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
    PropTypes.array,
  ]).isRequired,
};

export default Form;
