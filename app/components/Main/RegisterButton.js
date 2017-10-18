import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from '../../AppStyles';

const RegisterButton = ({ registerScreen }) => (
  
  <View style={styles._buttonContainer}>
    <Button
      title='Register'
      color='#ffffff'
      onPress={ registerScreen }
    />
  </View>
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
