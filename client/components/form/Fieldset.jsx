import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

const Fieldset = ({
  children,
  legend,
  legendId,
  className,
}) => {
  if (!children) return null;

  const fieldsetClass = cc({
    fieldset: true,
    [className]: className,
  });
  const legendAttr = legendId ? { id: legendId } : null;

  return (
    <div className={fieldsetClass}>
      {legend ? <legend {...legendAttr}>{legend}</legend> : null}
      {children}
    </div>
  );
};

Fieldset.propTypes = {
  legend: PropTypes.string,
  legendId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
};
Fieldset.defaultProps = {
  legend: null,
  legendId: null,
  className: null,
  children: null,
};

export default Fieldset;
