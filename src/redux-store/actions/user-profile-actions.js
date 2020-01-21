import {
    GET_USER_PROFILE_START,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL
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