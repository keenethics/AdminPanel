import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({
  size,
  isInverted,
  isActive,
}) => {
  if (isActive) {
    return (
      <div
        className={isInverted ? 'loader inverted' : 'loader'}
        style={{
          width: size,
          height: size,
        }}
      />
    );
  }

  return null;
};

Loader.propTypes = {
  size: PropTypes.number,
  isInverted: PropTypes.bool,
  isActive: PropTypes.bool,
};
Loader.defaultProps = {
  size: 24,
  isInverted: false,
  isActive: true,
};

export default Loader;
