import Immutable from 'immutable';
import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_STATE = new Immutable.Map({
  onLogging: false,
  isLoggedIn: false,
  error: '',
  email: '',
  password: '',
});

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ATTEMPT:
        return state.merge({
          onLogging : true,
          email : action.user.email,
          password : action.user.password,
        });
      break;

    case actionTypes.LOGIN_ERROR:
        return state.merge({
          onLogging : true,
          error: action.error,
        });
      break;

    case actionTypes.LOGIN_SUCCESS:
        return state.merge({
          onLogging: false,
          isLoggedIn: true,
        });
      break;

    default:
      return state;
  }
}

export const getIsLogging = (state) => ({
  onLogging: state.loginReducer.get('onLogging')
});
