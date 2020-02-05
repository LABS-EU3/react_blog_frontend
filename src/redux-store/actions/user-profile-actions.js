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
  UPDATE_USER_INTERESTS_FAIL,
  FOLLOW_USER_START,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  GET_AUTHOR_ARTICLES_START,
  GET_AUTHOR_ARTICLES_SUCCESS,
  GET_AUTHOR_ARTICLES_FAIL,
  DELETE_USER_ARTICLES_START,
  DELETE_USER_ARTICLES_SUCCESS,
  DELETE_USER_ARTICLES_FAIL
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
    const response = await axios.put(
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

export const followAuthor = authorId => async dispatch => {
  dispatch({ type: FOLLOW_USER_START });
  try {
    const res = await axiosWithAuth().post(`${apiURL}/follows`, authorId);
    console.log(res)
    dispatch({ type: FOLLOW_USER_SUCCESS, payload: authorId[0] });
  } catch (err) {
    console.log(err);
    dispatch({ type: FOLLOW_USER_FAIL });
  }
};

export const getAuthorArticles = authorId => async dispatch => {
  dispatch({ type: GET_AUTHOR_ARTICLES_START });
  try {
    const response = await axios.get(`${apiURL}/articles/author/${authorId}`);
    console.log(response);
    dispatch({ type: GET_AUTHOR_ARTICLES_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_AUTHOR_ARTICLES_FAIL });
  }
};

export const deleteArticle = id => async dispatch => {
  dispatch({ type: DELETE_USER_ARTICLES_START });
  try {
    const response = await axios.delete(
      `${apiURL}/articles/${id}`
    );
    dispatch({
      type: DELETE_USER_ARTICLES_SUCCESS,
      payload: response.data.articleId
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: DELETE_USER_ARTICLES_FAIL });
  }
};