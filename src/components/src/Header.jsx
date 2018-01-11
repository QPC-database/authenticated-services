import React from 'react';
import firebase from 'firebase';
import Logo from '../../assets/logo.png';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src={Logo} alt="" />
    </div>
    <div className={styles.title}>Authenticated Services</div>
    <div
      className={styles.menuBar}
      onClick={() => firebase.auth().signOut()}
    >Logout</div>
  </div>
);

export default Header;
