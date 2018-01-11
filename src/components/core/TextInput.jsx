import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.scss';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.value = '';
  }
  onChange(e) {
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
    this.value = value;
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }
  render() {
    const { className, placeholder, isPassword, isUppercase } = this.props;
    const { value } = this.state;
    return (
      <div className={`${className} ${styles.field}`}>
        <form onSubmit={this.onSubmit}>
          <input
            type={isPassword ? 'password' : 'text'}
            onChange={this.onChange}
            value={value}
            placeholder={placeholder}
            data-uppercase={isUppercase}
          />
        </form>
      </div>
    );
  }
}

TextInput.defaultProps = {
  className: null,
  isPassword: false,
  isUppercase: false,
  onChange: () => null,
  onSubmit: () => null,
  placeholder: '',
};

TextInput.propTypes = {
  className: PropTypes.string,
  isPassword: PropTypes.bool,
  isUppercase: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TextInput;
