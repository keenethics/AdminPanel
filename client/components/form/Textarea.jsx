import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import nanoid from 'nanoid';

const Textarea = ({
  id,
  className,
  name,
  value,
  placeholder,
  rows,
  onChange,
  isDisabled,
  isInvalid,
  isValid,
}) => (
  <textarea
    {...{
      id,
      rows,
      name,
      placeholder,
      onChange,
      ...(onChange ? { value } : { defaultValue: value }),
      className: classNames({
        [className]: true,
        disabled: isDisabled,
        invalid: isInvalid,
        valid: isValid,
      }),
    }}
  />
);

Textarea.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
};
Textarea.defaultProps = {
  id: `textarea-${nanoid(8)}`,
  className: 'textarea',
  placeholder: '',
  name: '',
  value: '',
  rows: 2,
  onChange: null,
  isDisabled: false,
  isInvalid: false,
  isValid: false,
};

export default Textarea;
