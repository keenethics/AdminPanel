import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import nanoid from 'nanoid';

const Textfield = ({
  id,
  className,
  type,
  tabIndex,
  value,
  name,
  onChange,
  placeholder,
  autoComplete,
  isDisabled,
  isInvalid,
  isValid,
}) => {
  const textfieldId = id || `textfield-${nanoid(8)}`;
  const textfieldClass = cc({
    [className]: className,
    disabled: isDisabled,
    invalid: isInvalid,
    valid: isValid,
  });
  const textfieldComputedAttributes = {
    [onChange ? 'value' : 'defaultValue']: value,
  };

  return (
    <input
      id={textfieldId}
      type={type}
      tabIndex={tabIndex}
      name={name}
      onChange={onChange || null}
      className={textfieldClass}
      placeholder={placeholder}
      autoComplete={autoComplete ? 'on' : 'off'}
      disabled={isDisabled}
      {...textfieldComputedAttributes}
    />
  );
};

Textfield.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
};
Textfield.defaultProps = {
  id: null,
  className: 'textfield',
  type: 'text',
  tabIndex: null,
  value: '',
  name: null,
  onChange: null,
  placeholder: '',
  autoComplete: false,
  isDisabled: false,
  isInvalid: false,
  isValid: false,
};

export default Textfield;
