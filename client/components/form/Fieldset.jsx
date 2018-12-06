import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Fieldset = ({ children, legend, className }) => {
  if (!children) return null;

  const fieldsetClass = classNames({
    [className]: true,
    fieldset: true,
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
  ]),
};
Fieldset.defaultProps = {
  legend: null,
  className: null,
  children: null,
};

export default Fieldset;
