import {
    GET_ALL_NOTIFICATIONS,
    GET_ALL_NOTIFICATIONS_SUCCESS,
    GET_ALL_NOTIFICATIONS_FAILURE,
    GET_SINGLE_NOTIFICATION,
    GET_SINGLE_NOTIFICATION_SUCCESS,
    GET_SINGLE_NOTIFICATION_FAILURE
} from './types';

import { apiURL } from '../../utilities/urls';
import { axiosWithAuth } from "../../utilities/axios/index";

export const getNotifications = () => async dispatch =>{
    dispatch({ type: GET_ALL_NOTIFICATIONS })
    try {
        const response = await axiosWithAuth()
            .get(`${apiURL}/notification`);
            dispatch({ 
                type: GET_ALL_NOTIFICATIONS_SUCCESS, 
                payload: response.data
        })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_NOTIFICATIONS_FAILURE })
    }
}

export const getSingleNotification = (id) => async dispatch => {
    dispatch({ type: GET_SINGLE_NOTIFICATION });
    try {
      const response = await axiosWithAuth()
        .get(`${apiURL}/notifications/${id}`);
      dispatch({ 
          type: GET_SINGLE_NOTIFICATION_SUCCESS, 
          payload: response.data.response 
        });
      console.log(response)
    }
    catch (err) {
      console.log(err);
      dispatch({ type: GET_SINGLE_NOTIFICATION_FAILURE });
    }
  }