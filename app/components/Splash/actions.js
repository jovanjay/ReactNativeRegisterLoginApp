/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */
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
const HandShake = () => {
    try {
        const value = await AsyncStorage.getItem('access_token');
    } catch (error) {
    }

    if(value !== null) {
        Http.post('m/handshake', {
            
        })
        .then(response => {
            if(response.status == 200 && response.status < 300)
            {
                try {
                } catch (error) {
                }
            }
            else{
                
            }
        })
        .catch(function (error) {
        });
    }
}

  export default HandShake;