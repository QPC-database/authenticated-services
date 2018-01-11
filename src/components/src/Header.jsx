import React from 'react';
import Logo from '../../assets/logo.png';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src={Logo} alt="" />
    </div>
    <div className={styles.title}>Authenticated Services</div>
    <div className={styles.menuBar}>Menu</div>
  </div>
);

export default Header;
