import React from 'react';
import firebase from 'firebase';
import Button from '../core/Button.jsx';
import TextInput from '../core/TextInput.jsx';
import Spinner from '../core/Spinner.jsx';
import styles from './Signin.scss';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      isLoading: false,
    };
    this.onSignin = this.onSignin.bind(this);
    this.onResetPw = this.onResetPw.bind(this);
  }
  onResetPw() {
    this.setState({ isLoading: true });
    firebase.auth().sendPasswordResetEmail(this.email.value)
      .then(() => {
        this.setState({
          isLoading: false,
          error: 'Reset Email Sent',
          forgotPw: false,
        });
      }).catch(error => this.setState({
        error,
        isLoading: false,
      }));
  }
  onSignin() {
    this.setState({ isLoading: true });
    const email = this.email.value;
    const password = this.password.value;
    if (email === '') {
      return this.setState({
        error: 'Email required',
        isLoading: false,
        forgotPw: false,
      });
    } else if (password === '') {
      return this.setState({
        error: 'Password required',
        isLoading: false,
      });
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', isLoading: false });
      }).catch((error) => {
        if (error.code === 'auth/wrong-password') {
          return this.setState({
            error: 'Incorrect password',
            isLoading: false,
          });
        } else {
          return this.setState({
            error: error.message,
            isLoading: false,
          });
        }
      });
    return null;
  }
  render() {
    const { error, isLoading, forgotPw } = this.state;
    return (
      <div className={styles.content}>
        <div className={error !== '' ? styles.error : null}>
          {error !== '' ?
            error
            :
            'Enter Account Info'
          }
        </div>
        <TextInput
          className={styles.input}
          placeholder={'Email'}
          onSubmit={forgotPw ? this.onResetPw : this.onSignin}
          ref={(ref) => { this.email = ref; }}
        />
        {!forgotPw &&
          <TextInput
            className={styles.input}
            isPassword
            placeholder={'Password'}
            onSubmit={this.onSignin}
            ref={(ref) => { this.password = ref; }}
          />
        }
        {isLoading ?
          <Spinner />
          :
          <div className={styles.buttons}>
            <div
              className={styles.forgotPw}
              onClick={() => this.setState({ forgotPw: !forgotPw })}
            >
              {forgotPw ?
                'Signin'
                :
                'Forgot your password?'
              }
            </div>
            <Button
              onClick={forgotPw ? this.onResetPw : this.onSignin}
              text={forgotPw ? 'Reset' : 'Login'}
            />
          </div>
        }
      </div>
    );
  }
}

export default Signin;
