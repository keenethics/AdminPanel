import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  value,
  type,
  modifier,
  onClick,
  isDisabled,
  isLoading,
}) => (
  <button
    type={type}
    className={`button button-${isLoading ? 'loading' : modifier}`}
    onClick={isLoading ? null : onClick}
    disabled={isDisabled || isLoading}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  modifier: PropTypes.oneOf(['default', 'green', 'blue', 'red']),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};
Button.defaultProps = {
  value: 'Button',
  type: 'button',
  modifier: 'default',
  onClick: null,
  isLoading: false,
  isDisabled: false,
};

export default Button;
