import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as actions from './actions';

class LoginButton extends Component {
  render() {
    const email = this.props.email;
    const password = this.props.password;

    return(
      <Button
        title='Login'
        onPress={ this.props.login(email, password) }
      />
    );
  }
}

LoginButton.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginButton;
