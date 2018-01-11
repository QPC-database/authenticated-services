import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Button from '../core/Button.jsx';
import TextInput from '../core/TextInput.jsx';
import styles from './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: 'join',
      joinCode: '',
      joinText: 'Enter class code to join',
    };
    this.onSignin = this.onSignin.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }
  onSignin(e) {
  }
  onSignup(e) {
  }
  render() {
    const { tabName, joinText } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.tabs}>
            <div
              className={styles.tab}
              data-active={tabName === 'join'}
              onClick={() => this.setState({ tabName: 'join' })}
            >
              Sign-in
            </div>
            <div
              className={styles.tab}
              data-active={tabName === 'create'}
              onClick={() => this.setState({ tabName: 'create' })}
            >
              Sign-up
            </div>
          </div>
          {tabName === 'join' ?
            <div className={styles.content}>
              <div>Enter Account Info</div>
              <TextInput
                onChange={value => this.setState({ joinCode: value })}
                placeholder={'Username'}
              />
              <TextInput
                onChange={value => this.setState({ joinCode: value })}
                placeholder={'Password'}
              />
              <Button
                onClick={this.onCreate}
                text={'Login'}
              >
                Create
              </Button>
            </div>
            :
            <div className={styles.content}>
              <div>Enter Account Info</div>
              <Button
                onClick={this.onCreate}
              >
                Create
              </Button>
            </div>
          }
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  joinAction: PropTypes.func.isRequired,
  createAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(Login);
