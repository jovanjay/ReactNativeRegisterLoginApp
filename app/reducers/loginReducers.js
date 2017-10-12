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
        state.merge({
          onLogging : true,
          email : action.email,
          password : action.password
        });
        return state;
      break;

    case actionTypes.LOGIN_ERROR:
        state.merge({
          onLogging : true,
          error: action.error
        });
        return state;
      break;

    case actionTypes.LOGIN_SUCCESS:
        state.merge({
          onLogging: false,
          isLoggedIn: true
        });
        return state;
      break;

    default:
      return state;
  }
}
