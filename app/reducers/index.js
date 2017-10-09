/**
 * Consolidate all reducers to be used on the Components
 */
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';

/**
 * Main Navigation Reducer
 */
import nav, * as NavSelector from './navReducers';

/**
 * Component Reducers / Selectors (*)
 */
import login, * as LoginSelector from './loginReducers';
import register, * as RegisterSelector from './registerReducers';
import dashboard, * as DashboardSelector from './dashboardReducers';

//Combine all reducers
const AppReducer = combineReducers({
  nav,
  login,
  register,
  dashboard,
});

export default AppReducer;
