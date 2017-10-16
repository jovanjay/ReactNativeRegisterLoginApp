import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const RegisterButton = ({ registerScreen }) => (
  <Button
    title='Register'
    onPress={ registerScreen }
  />
);

RegisterButton.propTypes = {
  registerScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  registerScreen: state.navReducer.RegisterScreen,
});

const mapDispatchToProps = dispatch => ({
  registerScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Register' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterButton);
