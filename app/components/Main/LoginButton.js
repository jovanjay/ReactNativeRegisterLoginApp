import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from '../../AppStyles';

const LoginButton = ({ loginScreen }) => (
  <View style={styles._buttonContainer}>
    <Button
      title='Login'
      color='#ffffff'
      onPress={ loginScreen }
    />
  </View>
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
