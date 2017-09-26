/**
 * Action creator
 */
import * as actionTypes from '../../AppActionTypes';
import {getLogin} from '../../reducers/loginReducer';
import Axios from 'axios';
import {
  AsyncStorage,
  XMLHttpRequest
} from 'react-native';

var $http = Axios.create({
  baseURL: APP_URL,
  timeout: 5000,
  auth: {
    username: BASIC_AUTH_UNAME,
    password: BASIC_AUTH_PASSWORD
  }
});

https://github.com/reactjs/redux/issues/291
export const loginError(error) {
  return {error, type: actionTypes.LOGIN_ERROR};
}

export const loginSuccess(reponse) {
  return {error, type: actionTypes.LOGIN_SUCCESS};
}

// The main login function
export const login = (email, password) => {
  //return a promise
  return (dispatch, getState) => {
    const {user} = {email: email, password: password};
    const {onLogging} = getLogin(getState())
    if(!onLogging) {
      dispatch({type: actionTypes.ON_LOGIN});
    }
  };
}
