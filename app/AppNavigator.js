/**
 * Application Nagivator using react-navigation
 * Stacks React Components to a Navigator
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from './components/Login';
import MainScreen from './components/Main';
import RegisterScreen from './components/Register';
import DashBoardScreen from './components/Dashboard';

export const AppNavigator = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions:  {
      headerLeft: null
    }
  },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Dashboard: { 
    screen: DashBoardScreen,
    navigationOptions: {
      headerLeft: null
    }
   },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.navReducer,
});

export default connect(mapStateToProps)(AppWithNavigationState);
