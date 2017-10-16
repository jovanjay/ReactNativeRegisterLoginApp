import Immutable from 'immutable';
import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_STATE = new Immutable.Map({
    onRegistering: false,
    isRegistered: false,
    error: '',
    name: '',
    type: '',
    email: '',
    password: '',
  });

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.REGISTER_ATTEMPT:
      return state.merge({
        onRegistering: true,
        isRegistered: false,
        name: action.user.name,
        type: action.user.type,
        email: action.user.email,
        password: action.user.password
      });
      break;

    case actionTypes.REGISTER_ERROR:
      return state.merge({
        onRegistering: false,
        isRegistered: false,
        error : action.error
      });
      break;

    case actionTypes.REGISTER_SUCCESS:
      return state.merge({
        onRegistering: false,
        isRegistered: true,
      });
      break;

    default:
      return state;
  }
}

//Selector - what is selector?????
export const getRegister = (state) => ({
  onRegistering: state.onRegistering
});

export const getIsRegistered = (state) => ({
  isRegistered: state.isRegistered
});
