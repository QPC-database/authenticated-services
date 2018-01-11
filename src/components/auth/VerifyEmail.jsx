import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './VerifyEmail.scss';

class VerifyEmail extends React.Component {
  componentDidMount() {
    const user = firebase.auth().currentUser;
    const wait = setInterval(() => {
      user.reload();
      if (user.emailVerified) {
        clearInterval(wait);
        this.props.onVerify();
      }
    }, 2000);
  }
  render() {
    return (
      <div className={styles.verify}>
        Please verify your email address.
      </div>
    );
  }
}

VerifyEmail.propTypes = {
  onVerify: PropTypes.func.isRequired,
};

export default VerifyEmail;
