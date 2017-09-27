/**
 * Reducers - consolidate all reducer
 */
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';

import nav, * as fromNav from './navReducers';
import login, * as fromLogin from './loginReducers';
import register, * as fromRegister from './registerReducers';
import dashboard, * as fromDashboard from './dashboardReducers';

const AppReducer = combineReducers({
  nav,
  login,
  register,
  dashboard
});

export default AppReducer;
