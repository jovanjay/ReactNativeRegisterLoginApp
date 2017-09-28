import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_STATE = {
    onLogging: false,
    isLoggedIn: false,
    error: '',
    email: '',
    password: '',
  };

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ATTEMPT:
      return state.merge({
        onLogging: true,
        email: action.email,
        password: action.password
      });
      break;

    case actionTypes.LOGIN_ERROR:
      return state.merge({
        onLogging: false,
        error : action.error
      });
      break;

    case actionTypes.LOGIN_SUCCESS:
      return state.merge({
        onLogging: false,
      });
      break;

    default:
      return state;
  }
}

//we want to check what is the state are we right now
export const getLogin = (state) => ({
  onLogging: state.onLogging
});

export const getIsLogin = (state) => ({
  isLoggedIn: state.isLoggedIn
});
