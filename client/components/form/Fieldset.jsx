import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

const Fieldset = ({
  children,
  legend,
  legendId,
  className,
  isDisabled,
}) => {
  const fieldsetClass = cc({
    fieldset: true,
    [className]: className,
    disabled: isDisabled,
  });

  return (
    <fieldset className={fieldsetClass} disabled={isDisabled}>
      {legend ? <legend {...(legendId ? { id: legendId } : {})}>{legend}</legend> : null}
      {children}
    </fieldset>
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
  isDisabled: PropTypes.bool,
};
Fieldset.defaultProps = {
  legend: null,
  legendId: null,
  className: null,
  children: null,
  isDisabled: false,
};

export default Fieldset;
