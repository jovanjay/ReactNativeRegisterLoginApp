/**
 * Action creator
 * https://github.com/reactjs/redux/issues/291
 */

import Immutable from 'immutable';
import {
  AsyncStorage
} from 'react-native';
import * as actionTypes from '../../lib/AppActionTypes';
import { getUserInfoStatus } from '../../reducers/dashboardReducers';
import Http from '../../lib/AppHttp';
import { NavigationActions } from 'react-navigation';

export const loadingError = (error) => {
    console.info('Loading Error ');
    return {error,type: actionTypes.LOADING_ERROR}
}        

 /**
 * Checks if the current access token is valid
 */
export const userinfo = () => {
    return async (dispatch, getState) => {
        dispatch({
            type : actionTypes.USER_INFO_LOADING
        });

        const {userInfoIsLoading,userInfoLoaded} = getUserInfoStatus(getState());

        if(!userInfoIsLoading) {
            try {
                const user_info = await AsyncStorage.getItem('user_info');
                if(user_info.id > 0)
                {
                    dispatch({
                        user_info : user_info,
                        type : actionTypes.USER_INFO_LOADED
                    });
                }
            } catch (error) {
                dispatch(loadingError(error));
            }
        } else {
            dispatch(loadingError({}));
        }
    };
}