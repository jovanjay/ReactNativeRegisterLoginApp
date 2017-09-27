import * as actionTypes from '../../AppActionTypes';
import { NavigationActions } from 'react-navigation';

export const login = (state) => {
  NavigationActions.navigate({ routeName: 'Dashboard' });
};
