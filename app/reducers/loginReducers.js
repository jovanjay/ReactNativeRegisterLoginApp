import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_ STATE = {onLogin: false};
export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.ON_LOGIN:
      return {
            ...state,
            onLogging: true
          }
      break;

    default:
      return state;
  }
}

//Selector - what is selector?
export const getLogin = (state) => ({
  onLogging: state.onLogging
});
