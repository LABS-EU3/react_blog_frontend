import {
    GET_USER_PROFILE_START,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_START,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL
  } from "./types";
  import axios from "axios";

  export const getUserProfile = (id) => async dispatch => {
    dispatch({ type: GET_USER_PROFILE_START });
    try {
      const response = await axios.get(`http://localhost:3300/api/users/${id}`);
      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: response.data.user });
    }
    catch (err) {
      console.log(err);
      dispatch({ type: GET_USER_PROFILE_FAIL });
    }
  };

  export const updateUserProfile = (id, data) => async dispatch => {
    dispatch({ type: UPDATE_USER_PROFILE_START });
    try {
      const response = await axios.put(`http://localhost:3300/api/users/${id}`, data);
      if(response) {
          console.log(response)
      }
    //   dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: response.data.user });
    }
    catch (err) {
      console.log(err);
      dispatch({ type: UPDATE_USER_PROFILE_FAIL });
    }
  };