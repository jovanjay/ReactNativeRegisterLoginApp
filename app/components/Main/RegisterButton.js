import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const RegisterButton = ({ RegisterScreen }) => (
  <Button
    title='Register'
    onPress={ RegisterScreen }
  />
);

RegisterButton.propTypes = {
  RegisterScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  RegisterScreen: state.nav.RegisterScreen,
});

const mapDispatchToProps = dispatch => ({
  RegisterScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Register' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterButton);
