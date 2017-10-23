import * as actionTypes from '../../lib/AppActionTypes';
import { NavigationActions } from 'react-navigation';

export const login = (state) => {
  NavigationActions.navigate({ routeName: 'Dashboard' });
};
