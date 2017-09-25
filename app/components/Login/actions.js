/**
 * Action creator
 */
import * as actionTypes from '../../AppActionTypes';

// The main login function
export const login = (email, password) => {
  //TODO
  //return a promise
  return (dispatch, getState) => {
    const {onLogging} = getLogin(getState()) {
      if(!onLogging) {
        dispatch({type: actionTypes.ON_LOGIN});
      }
    }
  };
}
