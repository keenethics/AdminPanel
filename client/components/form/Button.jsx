import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import nanoid from 'nanoid';

export default class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.id = props.id || `button-${nanoid(8)}`;
  }

  render() {
    const {
      children,
      className,
      text,
      type,
      onClick,
      isDisabled,
      isLoading,
    } = this.props;
    const buttonClass = cc({
      button: true,
      [className]: className,
      disabled: isDisabled,
      loading: isLoading,
    });

    return (
      <button
        id={this.id}
        className={buttonClass}
        type={type}
        onClick={isLoading ? null : onClick}
        disabled={isDisabled || isLoading}
      >
        {children || text}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};
Button.defaultProps = {
  children: null,
  id: null,
  className: null,
  text: 'Button',
  type: 'button',
  onClick: null,
  isLoading: false,
  isDisabled: false,
};
