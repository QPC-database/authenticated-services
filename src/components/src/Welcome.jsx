import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'halogen/ringloader';
import * as api from '../../actions/colors.js';
import styles from './Welcome.scss';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'React Starter Template',
    };
  }
  componentDidMount() {
    this.props.generateColor();
  }
  render() {
    const { message } = this.state;
    const { color } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.message}>{message}</div>
        <div className={styles.loader}>
          <Loader size={'40'} color={color} />
        </div>
      </div>
    );
  }
}

Welcome.defaultProps = {
  color: '#000000',
};

Welcome.propTypes = {
  color: PropTypes.string.isRequired,
  generateColor: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  color: state.colors.color,
});

const mapDispatchToProps = dispatch => ({
  generateColor: () => {
    dispatch(api.generateColor());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
