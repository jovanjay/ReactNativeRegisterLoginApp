import { Map } from 'immutable';
import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_STATE = Map({
    onLogging: false,
    isLoggedIn: false,
    error: '',
    email: '',
    password: '',
  });

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ATTEMPT:
        state.set('onLogging', true);
        state.set('email', action.email);
        state.set('password', action.password);
        return state;
      break;

    case actionTypes.LOGIN_ERROR:
        state.set('onLogging', false);
        state.set('error', action.error);
        return state;
      break;

    case actionTypes.LOGIN_SUCCESS:
        state.set('onLogging', false);
        state.set('isLoggedIn', true);
        return state;
      break;

    default:
      return state;
  }
}

//we want to check what is the state are we right now
export const getLogin = (state) => ({
  onLogging: state.login.onLogging
});

export const getIsLogin = (state) => ({
  isLoggedIn: state.login.isLoggedIn
});
