import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Header from './src/Header.jsx';
import Auth from './auth/Auth.jsx';
import styles from './app.scss';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBV1NHuD3LmEgMXvxqXaQ09og5YG1I3S-U',
  authDomain: 'authenticated-service.firebaseapp.com',
  databaseURL: 'https://authenticated-service.firebaseio.com',
  projectId: 'authenticated-service',
  storageBucket: 'authenticated-service.appspot.com',
  messagingSenderId: '834676733145',
};
firebase.initializeApp(config);

const App = ({ children }) => (
  <div className={styles.app}>
    <Header />
    <div className={styles.body}>
      <Auth>{children}</Auth>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
