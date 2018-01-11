import React from 'react';
import firebase from 'firebase';
import Button from '../core/Button.jsx';
import TextInput from '../core/TextInput.jsx';
import Spinner from '../core/Spinner.jsx';
import styles from './Signup.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      isLoading: false,
    };
    this.onSignup = this.onSignup.bind(this);
  }
  onSignup() {
    this.setState({ isLoading: true });
    if (this.name.value === '') {
      return this.setState({
        error: 'Full name required',
        isLoading: false,
      });
    } else if (this.company.value === '') {
      return this.setState({
        error: 'Company required',
        isLoading: false,
      });
    } else if (this.service.value === '') {
      return this.setState({
        error: 'Service ID required',
        isLoading: false,
      });
    }

    let hasId;
    return firebase.database().ref('/serviceIds/').once('value', (snapshot) => {
      hasId = snapshot.hasChild(`/${this.service.value}`);
      if (!hasId) {
        this.setState({
          error: 'Service ID is invalid',
          isLoading: false,
        });
      }
    }).then(() => {
      if (hasId) {
        firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
          .then(() => {
            console.log('success');
            // TODO set user fields
            this.setState({ error: '', isLoading: false });
          }).catch(error => this.setState({
            error: error.message,
            isLoading: false,
          }));
      }
    });
  }
  render() {
    const { error, isLoading } = this.state;
    return (
      <div className={styles.content}>
        <div className={error !== '' ? styles.error : null}>
          {error !== '' ?
            error
            :
            'Create an Account'
          }
        </div>
        <TextInput
          className={styles.input}
          placeholder={'Full Name'}
          onSubmit={this.onSignup}
          ref={(ref) => { this.name = ref; }}
        />
        <TextInput
          className={styles.input}
          placeholder={'Email'}
          onSubmit={this.onSignup}
          ref={(ref) => { this.email = ref; }}
        />
        <TextInput
          className={styles.input}
          placeholder={'Password'}
          isPassword
          onSubmit={this.onSignup}
          ref={(ref) => { this.password = ref; }}
        />
        <TextInput
          className={styles.input}
          placeholder={'Company'}
          onSubmit={this.onSignup}
          ref={(ref) => { this.company = ref; }}
        />
        <TextInput
          className={styles.input}
          placeholder={'Service ID'}
          onSubmit={this.onSignup}
          ref={(ref) => { this.service = ref; }}
        />
        {isLoading ?
          <Spinner />
          :
          <Button
            onClick={this.onSignup}
            text={'Submit'}
          />
        }
      </div>
    );
  }
}

export default Signup;
