import {
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_START,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  GET_TAGS_START,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAIL,
  UPDATE_USER_INTERESTS_START,
  REMOVE_USER_INTERESTS_SUCCESS,
  ADD_USER_INTERESTS_SUCCESS,
  UPDATE_USER_INTERESTS_FAIL
} from "./types";
import axios from "axios";
import { axiosWithAuth } from "../../utilities/axios/index";
import { apiURL } from '../../utilities/urls';

export const getTags = () => async dispatch => {
  dispatch({ type: GET_TAGS_START });
  try {
    const response = await axios.get(`${apiURL}/articles/tags`);
    dispatch({ type: GET_TAGS_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_TAGS_FAIL });
  }
};


export const getUserBasic = async () => {
  try {
    const response = await axiosWithAuth().get(`${apiURL}/users/basic`);
    return response;
  } catch (err) {
    console.log(err);
  }
}


export const getUserProfile = id => async dispatch => {
  dispatch({ type: GET_USER_PROFILE_START });
  try {
    const response = await axiosWithAuth().get(`${apiURL}/users/${id}`);
    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_USER_PROFILE_FAIL });
  }
};

export const updateUserProfile = (id, data) => async dispatch => {
  dispatch({ type: UPDATE_USER_PROFILE_START });
  try {
    const response = await axiosWithAuth().put(
      `${apiURL}/users/${id}`,
      data
    );
    dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: response.data });
    console.log(response);
  } catch (err) {
    console.log(err);
    dispatch({ type: UPDATE_USER_PROFILE_FAIL });
  }
};

export const updateUserInterests = data => async dispatch => {
  dispatch({ type: UPDATE_USER_INTERESTS_START });
  try {
    if (data.remove) {
      const response = await axiosWithAuth().delete(
        `${apiURL}/interests`,
        { data: data.remove }
      );
      if (response) {
        dispatch({
          type: REMOVE_USER_INTERESTS_SUCCESS,
          payload: response.data.new
        });
      }
    }
    if (data.add) {
      const response = await axiosWithAuth().post(
        `${apiURL}/interests`,
        data.add
      );
      if (response) {
        dispatch({ type: ADD_USER_INTERESTS_SUCCESS, payload: data.add });
      }
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: UPDATE_USER_INTERESTS_FAIL });
  }
};
