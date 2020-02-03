import {
  GET_AUTHOR_PROFILE_START,
  GET_AUTHOR_PROFILE_SUCCESS,
  GET_AUTHOR_PROFILE_FAIL,
  GET_AUTHOR_ARTICLES_START,
  GET_AUTHOR_ARTICLES_SUCCESS,
  GET_AUTHOR_ARTICLES_FAIL,
  FOLLOW_AUTHOR_START,
  FOLLOW_AUTHOR_SUCCESS,
  FOLLOW_AUTHOR_FAIL
} from "./types";
import { apiURL } from "../../utilities/urls";
import { axiosWithAuth } from "../../utilities/axios/index";
import axios from "axios";

export const getAuthorProfile = id => async dispatch => {
  dispatch({ type: GET_AUTHOR_PROFILE_START });
  try {
    const response = await axios.get(`${apiURL}/users/${id}`);
    console.log(response);
    dispatch({ type: GET_AUTHOR_PROFILE_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_AUTHOR_PROFILE_FAIL });
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

export const followAuthor = authorId => async dispatch => {
  dispatch({ type: FOLLOW_AUTHOR_START });
  try {
    const response = await axiosWithAuth().post(`${apiURL}/follows`, authorId);
    dispatch({ type: FOLLOW_AUTHOR_SUCCESS, payload: authorId[0] });
  } catch (err) {
    console.log(err);
    dispatch({ type: FOLLOW_AUTHOR_FAIL });
  }
};
