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

/**
 * Checks if the current access token is valid
 */
export const handshake = () => {
    return async (dispatch, getState) => {
        console.log('Hand Shake');
        try {
            if(!getState().splashReducer.get('isLoading'))
            {
                dispatch({
                    type : actionTypes.LOADING
                });
            
                const token = await AsyncStorage.getItem('access_token');
                if(token.length > 0) {
                    console.log('requesting...');
                    Http.get('api/user', {
                        headers : {
                            'Authorization': 'Bearer ' + token,
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => {
                        console.log(response.data);
                        if(response.status == 200 && response.status < 300)
                        {
                            try {
                                dispatch(NavigationActions.navigate({ routeName: 'Dashboard' }));
                            } catch (error) {
                                console.log(error)
                            }
                        }
                        else{
                            
                            console.log(response.status)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
                else{
                    console.log('Go to main');
                    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
                }
            }
        } catch (error) {
        }
    };
}
