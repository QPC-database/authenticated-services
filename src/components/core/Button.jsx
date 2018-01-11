import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ disabled, text, onClick }) => (
  <div
    className={styles.container}
    data-disabled={disabled}
    onClick={onClick}
  >
    <div className={styles.text}>
      {text}
    </div>
  </div>
);

Button.defaultProps = {
  disabled: false,
  text: 'Button',
  onClick: () => null,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
