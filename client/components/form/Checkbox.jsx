import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

import { Label } from 'Form';

const Checkbox = ({
  id,
  text,
  name,
  onChange,
  isChecked,
}) => {
  const checkboxComputedAttributes = {
    checked: isChecked,
  };

  if (!onChange) {
    delete checkboxComputedAttributes.checked;

    checkboxComputedAttributes.defaultChecked = isChecked;
  }
  return (
    <div className={isChecked ? 'checkbox checked' : 'checkbox'}>
      <input
        id={id}
        type="checkbox"
        name={name}
        onChange={onChange}
        {...checkboxComputedAttributes}
      />
      {text ? (
        <Label htmlFor={id}>
          {text}
        </Label>
      ) : null}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
};
Checkbox.defaultProps = {
  id: `checkbox-${nanoid(8)}`,
  text: 'Checkbox',
  name: '',
  onChange: null,
  isChecked: false,
};

export default Checkbox;
