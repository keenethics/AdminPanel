import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

const Loader = ({
  size,
  isInverted,
  isActive,
}) => {
  const loaderClass = cc({
    loader: true,
    inverted: isInverted,
  });

  if (isActive) {
    return (
      <div
        className={loaderClass}
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
