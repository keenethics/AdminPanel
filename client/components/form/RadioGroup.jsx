import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({
  id,
  children,
}) => (
  <div
    role="radiogroup"
    aria-labelledby={id}
  >
    {children}
  </div>
);

RadioGroup.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
    PropTypes.array,
  ]).isRequired,
};

export default RadioGroup;
