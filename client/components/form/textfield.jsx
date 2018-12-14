import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import nanoid from 'nanoid';

export default class Textfield extends PureComponent {
  constructor(props) {
    super(props);

    this.id = props.id || `textfield-${nanoid(8)}`;
  }

  render() {
    const {
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
    } = this.props;
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
        id={this.id}
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
  }
}
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
