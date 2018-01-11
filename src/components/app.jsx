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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: '',
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ auth: 'valid' });
      } else {
        this.setState({ auth: 'invalid' });
      }
    });
  }
  render() {
    const { children } = this.props;
    let content = null;
    if (this.state.auth === 'valid') {
      content = children;
    } else if (this.state.auth === 'invalid') {
      content = <Auth />;
    }
    return (
      <div className={styles.app}>
        <Header isLoggedIn={this.state.loggedIn} />
        <div className={styles.body}>
          {content}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
