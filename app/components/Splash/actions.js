/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
import Immutable from 'immutable';
import {
  AsyncStorage
} from 'react-native';
import * as actionTypes from '../../lib/AppActionTypes';
import Http from '../../lib/AppHttp';
import { NavigationActions } from 'react-navigation';

import {
    APP_END_POINT_USER_META
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
        console.log('loading');
        try {
            if(!getState().splashReducer.get('isLoading'))
            {
                dispatch({
                    type : actionTypes.LOADING
                });
            
                const token = await AsyncStorage.getItem('access_token');
                if(token.length > 0) {
                    token = token.replace(/\"/g,'');
                    const access_token = 'Bearer ';
                    
                    Http.get(APP_END_POINT_USER_META, {
                        headers: {
                            Authorization: access_token.concat(token)
                        }
                    })
                    .then(response => {
                        if(response.status == 200 && response.status < 300) {
                            console.log(response.data);
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
