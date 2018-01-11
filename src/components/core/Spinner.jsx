import React from 'react';
import PropTypes from 'prop-types';
import { MoonLoader } from 'halogen';
import styles from './Spinner.scss';

const Spinner = ({ color, size }) => (
  <div className={styles.container}>
    <MoonLoader color={color} size={size} />
  </div>
);

Spinner.defaultProps = {
  color: '#ccc',
  size: '25px',
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Spinner;
