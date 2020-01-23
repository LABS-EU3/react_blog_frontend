import {
    GET_USER_PROFILE_START,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_START,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,
    GET_TAGS_START,
    GET_TAGS_SUCCESS,
    GET_TAGS_FAIL
  } from "./types";
  import axios from "axios";

  export const getTags = () => async dispatch => {
    dispatch({ type: GET_TAGS_START });
    try {
      const response = await axios.get(`http://localhost:5000/api/articles/tags`);
      console.log(response)
      dispatch({ type: GET_TAGS_SUCCESS, payload: response.data});
    }
    catch (err) {
      console.log(err);
      dispatch({ type: GET_TAGS_FAIL });
    }
  }

  export const getUserProfile = (id) => async dispatch => {
    dispatch({ type: GET_USER_PROFILE_START });
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${id}`);
      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: response.data});
    }
    catch (err) {
      console.log(err);
      dispatch({ type: GET_USER_PROFILE_FAIL });
    }
  };

  export const updateUserProfile = (id, data) => async dispatch => {
    dispatch({ type: UPDATE_USER_PROFILE_START });
    try {
      const response = await axios.put(`http://localhost:5000/api/users/${id}`, data);
      dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: response.data});
    console.log(response)
    }
    catch (err) {
      console.log(err);
      dispatch({ type: UPDATE_USER_PROFILE_FAIL });
    }
  };