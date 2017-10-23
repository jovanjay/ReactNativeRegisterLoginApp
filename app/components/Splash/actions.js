/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
import Immutable from 'immutable';
import {
  AsyncStorage
} from 'react-native';
import * as actionTypes from '../../AppActionTypes';
import Http from '../../AppHttp';
import { NavigationActions } from 'react-navigation';

import {
    APP_URL,
    BASIC_AUTH_UNAME,
    BASIC_AUTH_PASSWORD
} from 'react-native-dotenv';

export const loadingError = (error) => {
    console.info('Loading Error ');
    return {error,type: actionTypes.LOADING_ERROR}
}                                                                                

/**
 * Checks if the current access token is valid
 */
export const handshake = () => {
    return async (dispatch, getState) => {
        try {
            if(!getState().splashReducer.get('isLoading'))
            {
                dispatch({
                    type : actionTypes.LOADING
                });
            
                const token = await AsyncStorage.getItem('access_token');
                token = token.replace(/\"/g,'');
                const access_token = 'Bearer ';
                console.log(access_token.concat(token));
                if(token.length > 0) {
                    Http.get('/api/user', {
                        headers: {
                            Authorization: access_token.concat(token)
                        }
                    })
                    .then(response => {
                        if(response.status == 200 && response.status < 300) {
                            if(response.data.id > 0) {
                                AsyncStorage.setItem('user_info', JSON.stringify(response.data));
                                dispatch(NavigationActions.navigate({ routeName: 'Dashboard' }));
                            }
                            else
                            {
                                //Route to Login to refresh tokens
                            }
                        }else {
                            console.log('failed to load');
                        }
                    })
                    .catch(function (error) {
                        dispatch(loadingError(error));
                        dispatch(NavigationActions.navigate({ routeName: 'Main' }));
                    });
                }else {
                    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
                }
            }
        } catch (error) {
            dispatch(loadingError(error));
        }
    };
}