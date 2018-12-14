import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import nanoid from 'nanoid';

export default class Textarea extends PureComponent {
  constructor(props) {
    super(props);

    this.id = props.id || `textarea-${nanoid(8)}`;
    this.state = {
      value: props.value,
    };
  }

  onChange = (e) => {
    const { onChange } = this.props;

    this.setState({
      value: e.target.value,
    });

    if (onChange) onChange(e);
  }

  render() {
    const {
      className,
      name,
      placeholder,
      rows,
      onChange,
      isDisabled,
      isInvalid,
      isValid,
    } = this.props;
    const { value } = this.state;

    const textareaProps = {
      id: this.id,
      rows,
      name,
      placeholder,
      onChange: this.onChange,
      className: cc({
        textarea: true,
        [className]: className,
        disabled: isDisabled,
        invalid: isInvalid,
        valid: isValid,
      }),
    };
    const textareaComputedAttributes = {
      [onChange ? 'value' : 'defaultValue']: value,
    };

    return (
      <div className="textarea">
        <pre>
          {value}
          <br />
          <br />
        </pre>
        <textarea {...textareaProps} {...textareaComputedAttributes} />
      </div>
    );
  }
}

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
  id: null,
  className: null,
  placeholder: '',
  name: '',
  value: '',
  rows: 2,
  onChange: null,
  isDisabled: false,
  isInvalid: false,
  isValid: false,
};
