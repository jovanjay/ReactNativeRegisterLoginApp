/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
import * as actionTypes from '../../AppActionTypes';
import { getIsLogging } from '../../reducers/loginReducers';
import Http from '../../AppHttp';
import { NavigationActions } from 'react-navigation';
import thunk from 'redux-thunk';
import {
  AsyncStorage,
  XMLHttpRequest
} from 'react-native';

//Actions creator for Success Login
export const loginSuccess = (reponse) => {
  console.log('login success dispatched');
  return dispatch => {
    dispatch({error, type: actionTypes.LOGIN_SUCCESS});
    NavigationActions.navigate({ routeName: 'Dashboard' });
  };
}

//Actions creator for Login Request -
//not part of dispatch for synchronous calls
export const loginRequest = (email, password) => {
  console.log('login request fired');
  const user = {email: email, password: password};
  return {
      user,
      type: actionTypes.LOGIN_ATTEMPT
  }
}

//Action creator for Login Error -
//not part of dispatch for synchronous calls
export const loginError = (error) => {
  console.log('An error occured : ' + error);
  return {error, type: actionTypes.LOGIN_ERROR};
}

/**
 * The main login action
 * call this on the component as :
 * this.props.login(); or this.props.dispatch(login());
 */
export const loginAttempt = (email, password) => {
  return (dispatch, getState) => {

    //tell app that is logging in
    dispatch(loginRequest(email, password));

    console.log(email,password);
    const { onLogging } = getIsLogging(getState());
    //
    // console.log(getState());
    // console.log(onLogging);
    //
    // //call server for auth
    // Http.post('/m/login', {
    //   'email' : email,
    //   'password' : password,
    //   'type' : 0
    // })
    // .then(response => {
    //   if(reponse.status == 200 && response.status < 300)
    //   {
    //     try {
    //       //TODO - Store Something here
    //       loginSuccess(response);
    //     } catch (error) {
    //       loginError(error);
    //     }
    //   }
    // })
    // .catch(function (error) {
    //   loginError(error);
    // });
  };
}
