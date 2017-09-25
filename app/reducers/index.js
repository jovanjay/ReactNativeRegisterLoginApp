/**
 * Reducers - consolidate all reducer
 */
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';

import nav, * as fromNav from './navReducers';
import login, * as fromLogin from './loginReducer';

const AppReducer = combineReducers({
  nav,
  login
});

export default AppReducer;
