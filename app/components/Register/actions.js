/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
 import {
   AsyncStorage,
   XMLHttpRequest
 } from 'react-native';

import * as actionTypes from '../../AppActionTypes';
import { getRegister, getIsRegistered } from '../../reducers/registerReducers';
import Http from '../../AppHttp';

//Actions creator for Success Login
export const registerSuccess = (reponse) => {
  return (dispatch, getState) => {
    const {onRegistering} = getRegister(getState());
    const {isRegistered} = getIsRegistered(getState());
    if(!onRegistering && isRegistered)
    {
        dispatch({error, type: actionTypes.REGISTER_SUCCESS});
        NavigationActions.navigate({ routeName: 'Dashboard' });
    }
  };
}

//Actions creator for Login Request
export const registerRequest = (name, type, email, password) => {
  const user = {name: name, type: type, email: email, password: password};
  return { user, type: REGISTER_ATTEMPT };
}

//Action creator for Login Error
export const registerError = (error) => {
  return {error, type: actionTypes.REGISTER_ERROR};
}

/**
 * The main login action
 * call this on the component as :
 * this.props.login(); or this.props.dispatch(login());
 */
export const register = (user) => {
  return (dispatch, getState) => {
    const {onRegistering} = getRegister(getState());
    const {isRegistered} = getIsRegistered(getState());
    if(!onRegistering && !isRegistered) {

      //tell app that is logging in
      dispatch(loginRequest(user.name, user.type, user.email, user.password));

      //call server for auth
      Http.post('/m/register', {
        'name' : user.name,
        'email' : user.email,
        'password' : user.password,
        'type' : user.type
      })
      .then(response => {
        if(reponse.status == 200 && response.status < 300)
        {
          try {
            AsyncStorage.setItem('access_token', JSON.stringify(response.data.access_token));
            AsyncStorage.setItem('expires_in', JSON.stringify(response.data.expires_in));
            AsyncStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
            AsyncStorage.setItem('token_type', JSON.stringify(response.data.token_type));
            dispatch(registerSuccess(response));
          } catch (error) {
            dispatch(registerError(error));
          }
        }
      })
      .catch(function (error) {
        console.error(error);
        dispatch(registerError(error));
      });
    }
  };
}
