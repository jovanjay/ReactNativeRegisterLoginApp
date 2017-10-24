import Immutable from 'immutable';
import * as actionTypes from '../lib/AppActionTypes';

//Reducer
const DEFAULT_STATE = new Immutable.Map({
  userInfoLoading: false,
  userInfoLoaded:false,
  error: {},
  userInfo:{}
});

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.USER_INFO_LOADING:
      return state.merge({
        userInfoLoading: true,
        userInfoLoaded: false,
      });
      break;

    case actionTypes.USER_INFO_LOADED:
      return state.merge({
        userInfoLoading: false,
        userInfoLoaded: true,
        userInfo: action.userInfo
      });
      break;

    case actionTypes.USER_INFO_ERROR:
      return state.merge({
        error : action
      });
  
    default:
      return state;
  }
};

//action creator
export const getUserInfoStatus = (state) => ({
  userInfoIsLoading : state.dashboardReducer.get('userInfoLoading'),
  userInfoLoaded : state.dashboardReducer.get('userInfoLoaded')
});
