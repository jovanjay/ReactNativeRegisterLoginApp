/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
import Immutable from 'immutable';

import {
  AsyncStorage,
  XMLHttpRequest
} from 'react-native';

import * as actionTypes from '../../AppActionTypes';
import { getRegister, getIsRegistered } from '../../reducers/registerReducers';
import Http from '../../AppHttp';

import {
  APP_URL,
  BASIC_AUTH_UNAME,
  BASIC_AUTH_PASSWORD
} from 'react-native-dotenv';

//Actions creator for Success Register
export const registerSuccess = (reponse) => {
  return (dispatch, getState) => { 
    console.info('Registration Successfull');
    const {onRegistering} = getRegister(getState());
    console.log(onRegistering);
    if(onRegistering)
    {
        dispatch({reponse, type: actionTypes.REGISTER_SUCCESS});
        NavigationActions.navigate({ routeName: 'Dashboard' });
    }
  };
}

//Actions creator for Register Request
export const registerRequest = (name, type, email, password) => {
  const user = {
    name: name, 
    type: type, 
    email: email, 
    password: password
  };
  console.info('Registration requested');
  return { user, type: actionTypes.REGISTER_ATTEMPT };
}

//Action creator for Register Error
export const registerError = (error) => {
  console.info('Registration Error');
  console.log(error);
  return {error, type: actionTypes.REGISTER_ERROR};
}

/**
 * The main register action
 * call this on the component as :
 * this.props.login(); or this.props.dispatch(login());
 */
export const register = (user) => {
  return (dispatch, getState) => {

      // const { registerReducer } = getState(); //other way of implementing it
      const {onRegistering} = getRegister(getState());
      
      //using get() since we are using immutable
      if(!onRegistering)
      {
        //tell app that is registering in
        dispatch(registerRequest(user.name, user.type, user.email, user.password));
      
        // call server for auth
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
          else{
            dispatch(registerSuccess(reponse));
          }
        })
        .catch(function (error) {
          dispatch(registerError(error));
        });
      }
  };
}
