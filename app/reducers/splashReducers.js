import Immutable from 'immutable';
import * as actionTypes from '../lib/AppActionTypes';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../lib/AppNavigator';

//Reducer
const DEFAULT_STATE = new Immutable.Map({
    isLoading: false,
    isLoaded: false,
    loadingError: false,
    refreshToken: false,
});

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case actionTypes.LOADING:
            return state.merge({
                isLoading: true,
                isLoaded: false
            });
            break;
        case actionTypes.LOADING_ERROR:
            return state.merge({
                isLoading: false,
                isLoaded: false,
                loadingError: true,
            });
            break;
        case actionTypes.LOADED:
            return state.merge({
                isLoading: false,
                isLoaded: true,
            });
            break;
        case actionTypes.REFRESH_TOKEN:
            return state.merge({
                isLoading: false,
                isLoaded: true,
                refreshToken: true,
            });
        default:
            return state;
    }
}