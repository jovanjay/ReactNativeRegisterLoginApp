import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_ STATE = {onLogin: false};
export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.ON_LOGIN:
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

//Selector - what is selector?????
export const getLogin = (state) => ({
  onLogging: state.onLogging
});
