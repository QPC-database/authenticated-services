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
  }
  onSignin() {
    this.setState({ isLoading: true });
    const email = this.email.value;
    const password = this.password.value;
    if (email === '') {
      return this.setState({
        error: 'Email required',
        isLoading: false,
      });
    } else if (password === '') {
      return this.setState({
        error: 'Password required',
        isLoading: false,
      });
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('signin success');
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
    const { error, isLoading } = this.state;
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
          onSubmit={this.onSignin}
          ref={(ref) => { this.email = ref; }}
        />
        <TextInput
          className={styles.input}
          isPassword
          placeholder={'Password'}
          onSubmit={this.onSignin}
          ref={(ref) => { this.password = ref; }}
        />
        {isLoading ?
          <Spinner />
          :
          <Button
            onClick={this.onSignin}
            text={'Login'}
          />
        }
      </div>
    );
  }
}

export default Signin;
