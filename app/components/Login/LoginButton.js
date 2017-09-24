import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

const LoginButton = ({ login }) => (
  <Button
    title='Login'
    onPress={() => {
        //TODO - Do real login here then route to Dashboard else just stay on
        //this state and flag error
        dispatch(NavigationActions.navigate({ routeName: 'Dashboard' }))
    }}
  />
);

LoginButton.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginButton;
