import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import nanoid from 'nanoid';

import Label from 'Form/Label';

export default class RadioButton extends PureComponent {
  constructor(props) {
    super(props);

    this.id = props.id || `radio-button-${nanoid(8)}`;
  }

  render() {
    const {
      className,
      name,
      value,
      onChange,
      isChecked,
      isDisabled,
      tabIndex,
      text,
    } = this.props;
    const radioButtonComputedAttributes = {
      [onChange ? 'checked' : 'defaultChecked']: isChecked,
    };
    const radioButtonClass = cc({
      'radio-button': true,
      [className]: className,
      disabled: isDisabled,
    });

    return (
      <div className={radioButtonClass}>
        <input
          id={this.id}
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          tabIndex={tabIndex}
          {...radioButtonComputedAttributes}
        />
        {text ? (
          <Label htmlFor={this.id}>
            {text}
          </Label>
        ) : null}
      </div>
    );
  }
}

RadioButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  text: PropTypes.string,
};
RadioButton.defaultProps = {
  id: null,
  className: null,
  name: null,
  value: null,
  onChange: null,
  isChecked: false,
  isDisabled: false,
  tabIndex: null,
  text: 'Radio button',
};
