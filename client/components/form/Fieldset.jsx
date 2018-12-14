import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

const Fieldset = ({ children, legend, className }) => {
  if (!children) return null;

  const fieldsetClass = cc({
    fieldset: true,
    [className]: className,
  });

  return (
    <div className={fieldsetClass}>
      {legend ? <legend>{legend}</legend> : null}
      {children}
    </div>
  );
};

Fieldset.propTypes = {
  legend: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
};
Fieldset.defaultProps = {
  legend: null,
  className: null,
  children: null,
};

export default Fieldset;
