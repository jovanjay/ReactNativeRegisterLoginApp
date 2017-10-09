import * as actionTypes from '../AppActionTypes';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator'

/**
 * Initial State
 */
const mainAction  = AppNavigator.router.getActionForPathAndParams('Main');
const mainNavState = AppNavigator.router.getStateForAction(mainAction);
const initialNavState = AppNavigator.router.getStateForAction(
  mainAction,
  mainNavState
);

// Main Nav reducer
export default function (state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case actionTypes.NAV_MAIN:
      nextState = state;
      break;

    case actionTypes.NAV_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;

    case actionTypes.NAV_REGISTER:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;

    case actionTypes.NAV_DASHBOARD:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );

    case actionTypes.NAV_LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;

    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export const getNav = (state) => ({
});
