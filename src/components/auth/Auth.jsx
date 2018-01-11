import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import VerifyEmail from './VerifyEmail.jsx';
import styles from './Auth.scss';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: '',
      tabName: 'signin',
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        this.setState({ auth: 'valid' });
      } else if (user && !user.emailVerified) {
        this.setState({ auth: 'verify' });
      } else {
        this.setState({ auth: 'invalid' });
      }
    });
  }
  render() {
    const { auth, tabName } = this.state;
    const { children } = this.props;
    if (auth === 'valid') {
      return children;
    } else if (auth === 'invalid') {
      return (
        <div className={styles.container}>
          <div className={styles.loginBox}>
            <div className={styles.tabs}>
              <div
                className={styles.tab}
                data-active={tabName === 'signin'}
                onClick={() => this.setState({ tabName: 'signin' })}
              >
                Sign-in
              </div>
              <div
                className={styles.tab}
                data-active={tabName === 'signup'}
                onClick={() => this.setState({ tabName: 'signup' })}
              >
                Sign-up
              </div>
            </div>
            {tabName === 'signin' ?
              <Signin />
              :
              <Signup />
            }
          </div>
        </div>
      );
    } else if (auth === 'verify') {
      return (
        <div className={styles.container}>
          <div className={styles.loginBox}>
            <VerifyEmail
              onVerify={() => this.setState({ auth: 'valid' })}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Auth.defaultProps = {
  children: null,
};

Auth.propTypes = {
  children: PropTypes.node,
};

export default Auth;
