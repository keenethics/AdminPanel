import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      id,
      name,
      value,
      placeholder,
      onChange,
    } = this.props;

    return (
      <textarea
        id={id}
        className="textarea"
        rows={2}
        name={name || ''}
        placeholder={placeholder || ''}
        onChange={onChange}
      >
        {value}
      </textarea>
    );
  }
}

Textarea.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
Textarea.defaultProps = {
  id: `textfield-${nanoid(8)}`,
  placeholder: '',
  name: '',
  value: '',
  onChange: null,
};
