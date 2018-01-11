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
    const { placeholder } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.field}>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChange}
            value={value}
            placeholder={placeholder}
          />
        </form>
      </div>
    );
  }
}

TextInput.defaultProps = {
  onChange: () => null,
  onSubmit: () => null,
  placeholder: '',
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TextInput;
