import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
  const textfieldClass = classNames({
    [className]: true,
    disabled: isDisabled,
    invalid: isInvalid,
    valid: isValid,
  });
  const textfieldComputedAttributes = {
    value,
  };

  if (!onChange) {
    delete textfieldComputedAttributes.value;

    textfieldComputedAttributes.defaultValue = value;
  }

  return (
    <input
      id={id}
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
  id: `textfield-${nanoid(8)}`,
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
