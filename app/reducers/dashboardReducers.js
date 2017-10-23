import Immutable from 'immutable';
import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_STATE = new Immutable.Map({
  userInfoLoading: false,
  userInfoLoaded:false,
  userInfo:{}
});

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case action.USER_INFO_LOADING:
      return state.merge({
        userInfoLoading: true,
        userInfoLoaded: false,
      });
      break;

    case action.USER_INFO_LOADED:
      return state.merge({
        userInfoLoading: false,
        userInfoLoaded: true,
        userInfo: action.user_info
      });
      break;
  
    default:
      return state;
  }
};

export const getUserInfoStatus = (state) => ({
  userInfoIsLoading : state.dashboardReducer.get('userInfoLoading'),
  userInfoLoaded : state.dashboardReducer.get('userInfoLoaded')
});
