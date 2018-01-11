import React from 'react';
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import styles from './Auth.scss';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: 'signin',
    };
  }
  render() {
    const { tabName } = this.state;
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
  }
}

export default Auth;
