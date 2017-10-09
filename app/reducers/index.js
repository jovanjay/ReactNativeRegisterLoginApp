/**
 * Consolidate all reducers to be used on the Components
 */
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';

/**
 * Main Navigation Reducer
 */
import nav from './navReducers';

/**
 * Component Reducers / Selectors (*)
 */
import login from './loginReducers';
import register from './registerReducers';
import dashboard from './dashboardReducers';

//Combine all reducers
const AppReducer = combineReducers({
  nav,
  login,
  register,
  dashboard,
});

export default AppReducer;
