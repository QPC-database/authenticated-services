import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Header from './src/Header.jsx';
import Login from './src/Login.jsx';
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

class App extends React.Component {
  componentDidMount() {
    console.log(firebase.auth());
  }
  render() {
    const { children } = this.props;
    const isLoggedIn = firebase.auth().currentUser;
    let content;
    if (isLoggedIn) {
      content = children;
    } else {
      content = <Login />;
    }
    return (
      <div className={styles.app}>
        <Header isLoggedIn={isLoggedIn} />
        {content}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
