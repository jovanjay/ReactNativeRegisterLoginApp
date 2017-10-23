import * as actionTypes from '../AppActionTypes';

//Reducer
const DEFAULT_STATE = new Immutable.Map({
  userInfoLoading: false,
  userInfoLoaded:false,
});

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case action.USER_INFO_LOADING:
      break;

    case action.USER_INFO_LOADED:
      break;
  
    default:
      return state;
  }
};
