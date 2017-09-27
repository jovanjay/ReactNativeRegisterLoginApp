/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
import * as actionTypes from '../../AppActionTypes';
import {getLogin} from '../../reducers/loginReducer';
import Http from '../../AppHttp';
import {
  AsyncStorage,
  XMLHttpRequest
} from 'react-native';

//Actions creator for Success Login
export const loginSuccess = (reponse) => {
  return (dispatch, getState) => {
    const {onLogging} = getLogin(getState());
    if(!onLogging)
    {
        dispatch({error, type: actionTypes.LOGIN_SUCCESS});
        NavigationActions.navigate({ routeName: 'Dashboard' });
    }
  };
}

//Actions creator for Login Request
export const loginRequest = (email, password) => {
  const user = {email: email, password: password};
  return { user, type: LOGIN_ATTEMPT };
}

//Action creator for Login Error
export const loginError(error) {
  return {error, type: actionTypes.LOGIN_ERROR};
}

/**
 * The main login action
 * call this on the component as :
 * this.props.login(); or this.props.dispatch(login());
 */
export const login = (user) => {
  return (dispatch, getState) => {
    const {onLogging} = getLogin(getState())
    if(!onLogging) {

      //call server for auth
      Http.post('/m/login', {
        'email' : user.email,
        'password' : user.password,
        'type' : 0
      })
      .then(response => {
        if(reponse.status == 200 && response.status < 300)
        {
          try {
            AsyncStorage.setItem('access_token', JSON.stringify(response.data.access_token));
            AsyncStorage.setItem('expires_in', JSON.stringify(response.data.expires_in));
            AsyncStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
            AsyncStorage.setItem('token_type', JSON.stringify(response.data.token_type));
            dispatch(loginSuccess(response));
          } catch (error) {
            dispatch(loginError(response));
          }
        }
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loginError(response));
      });

      //tell app that is logging in
      dispatch(loginRequest(user.email, user.password));
    }
  };
}
