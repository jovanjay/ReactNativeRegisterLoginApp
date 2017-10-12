/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
import * as actionTypes from '../../AppActionTypes';
import {getLogin, getIsLogin} from '../../reducers/loginReducers';
import Http from '../../AppHttp';
import { NavigationActions } from 'react-navigation';
import {
  AsyncStorage,
  XMLHttpRequest
} from 'react-native';

//Actions creator for Success Login
export const loginSuccess = (reponse) => {
  console.log('login success dispatched');
  return (dispatch, getState) => {
    const {onLogging} = getLogin(getState());
    const {isLoggedIn} = getIsLogin(getState());
    if(!onLogging && isLoggedIn)
    {
        dispatch({error, type: actionTypes.LOGIN_SUCCESS});
        NavigationActions.navigate({ routeName: 'Dashboard' });
    }
  };
}

//Actions creator for Login Request - not part of dispatch for synchronous calls
export const loginRequest = (email, password) => {
  console.log('login request fired');
  const user = {email: email, password: password};
  return { user, type: actionTypes.LOGIN_ATTEMPT };
}

//Action creator for Login Error - not part of dispatch for synchronous calls
export const loginError = (error) => {
  return {error, type: actionTypes.LOGIN_ERROR};
}

/**
 * The main login action
 * call this on the component as :
 * this.props.login(); or this.props.dispatch(login());
 */
export const login = (user) => {
  return (dispatch) => {

    //tell app that is logging in
    loginRequest(user.email, user.password);
    //
    console.log('Login');
    // console.log(state);
    //
    const { onLogging } = getLogin(getState());
    const { isLoggedIn } = getIsLogin(getState());
    console.log(isLoggedIn);
    console.log(onLogging);
    if(!onLogging && !isLoggedIn) {
      console.log('foo');
    //
    //   //call server for auth
    //   Http.post('/m/login', {
    //     'email' : user.email,
    //     'password' : user.password,
    //     'type' : 0
    //   })
    //   .then(response => {
    //     if(reponse.status == 200 && response.status < 300)
    //     {
    //       try {
    //         //TODO - Store Something here
    //         dispatch(loginSuccess(response));
    //       } catch (error) {
    //         dispatch(loginError(error));
    //       }
    //     }
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //     dispatch(loginError(error));
    //   });
    }
  };
}
