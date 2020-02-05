import {
    GET_ALL_NOTIFICATIONS,
    GET_ALL_NOTIFICATIONS_SUCCESS,
    GET_ALL_NOTIFICATIONS_FAILURE,
    GET_SINGLE_NOTIFICATION,
    GET_SINGLE_NOTIFICATION_SUCCESS,
    GET_SINGLE_NOTIFICATION_FAILURE
} from '../actions/types';

export const initialState = {
    loading: false,
    data: [],
    singleNotification: {}
};

export const getArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_NOTIFICATIONS:
        return {
          ...state,
          loading: true
        };
      case GET_ALL_NOTIFICATIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case GET_ALL_NOTIFICATIONS_FAILURE:
        return {
          ...state,
          loading: false
        };
        case GET_SINGLE_NOTIFICATION:
        return {
          ...state,
          loading: true
        };
      case GET_SINGLE_NOTIFICATION_SUCCESS:
        return {
          ...state,
          loading: false,
          singleNotification: action.payload
        };
      case GET_SINGLE_NOTIFICATION_FAILURE:
        return {
          ...state,
          loading: false
        };
      
      default:
        return state;
    }
  };