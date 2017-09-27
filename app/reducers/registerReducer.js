import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_ STATE = Immutable.new({
    onRegistering: false,
    error: '',
    name: '',
    type: '',
    email: '',
    password: '',
  });

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.REGISTER_ATTEMPT:
      return state.merge({
        onRegistering: true,
        name: action.name,
        type: action.type,
        email: action.email,
        password: action.password
      });
      break;

    case actionTypes.REGISTER_ERROR:
      return state.merge({
        onRegistering: false,
        error : action.error
      });
      break;

    case actionTypes.REGISTER_SUCCESS:
      return state.merge({
        onRegistering: false,
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
