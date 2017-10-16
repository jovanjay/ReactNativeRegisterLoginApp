import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const LoginButton = ({ loginScreen }) => (
  <Button
    title='Login'
    onPress={ loginScreen }
  />
);

LoginButton.propTypes = {
  loginScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loginScreen: state.navReducer.loginScreen,
});

const mapDispatchToProps = dispatch => ({
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
