/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
import Immutable from 'immutable';
import {
  AsyncStorage
} from 'react-native';
import * as actionTypes from '../../lib/AppActionTypes';
import { getRegister, getIsRegistered } from '../../reducers/registerReducers';
import Http from '../../lib/AppHttp';
import { NavigationActions } from 'react-navigation';

import {
  APP_END_POINT_REGISTER
} from 'react-native-dotenv';

//Actions creator for Success Register
export const registerSuccess = (response) => {
  return (dispatch, getState) => { 
    console.info('Registration Successfull');
    const {onRegistering} = getRegister(getState());
    if(onRegistering)
    {
        dispatch({response, type: actionTypes.REGISTER_SUCCESS});
        dispatch(NavigationActions.navigate({ routeName: 'Dashboard' }));
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
      console.log('Registering');
      // const { registerReducer } = getState(); //other way of implementing it
      const {onRegistering} = getRegister(getState());
      
      //using get() since we are using immutable
      if(!onRegistering)
      {
        //tell app that is registering in
        dispatch(registerRequest(user.name, user.type, user.email, user.password));
      
        // call server for auth
        Http.post(APP_END_POINT_REGISTER, {
          'name' : user.name,
          'email' : user.email,
          'password' : user.password,
          'type' : user.type
        })
        .then(response => {
          // console.log(response.data);
          if(response.status == 200 && response.status < 300)
          {
            try {
              AsyncStorage.setItem('access_token', JSON.stringify(response.data.access_token));
              AsyncStorage.setItem('expires_in', JSON.stringify(response.data.expires_in));
              AsyncStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
              AsyncStorage.setItem('token_type', JSON.stringify(response.data.token_type));
              dispatch(registerSuccess(response));
            } catch (error) {
              // console.log('Storing data error');
              dispatch(registerError(error));
            }
          }
          else{
            dispatch(registerSuccess(response));
          }
        })
        .catch(function (error) {
          // console.log('Error request');
          dispatch(registerError(error));
        });
      }
  };
}
