import {
  GET_ALL_ARTICLES_START,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAIL,
  GET_SINGLE_START,
  GET_SINGLE_SUCCESS,
  GET_SINGLE_FAIL,
  GET_REACTIONS_FAIL,
  GET_REACTIONS_START,
  GET_REACTIONS_SUCCESS
} from "./types";
import { apiURL } from "../../utilities/urls";

import { axiosWithAuth } from "../../utilities/axios/index";

export const getArticleFeed = () => async dispatch => {
  dispatch({ type: GET_ALL_ARTICLES_START });
  try {
    const response = await axiosWithAuth().get(`${apiURL}/articles`);
    dispatch({ type: GET_ALL_ARTICLES_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ALL_ARTICLES_FAIL });
  }
};

export const getSingleArticle = id => async dispatch => {
  dispatch({ type: GET_SINGLE_START });
  try {
    const response = await axiosWithAuth().get(`${apiURL}/articles/${id}`);
    dispatch({ type: GET_SINGLE_SUCCESS, payload: response.data.response });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_SINGLE_FAIL });
  }
};


export const getSingleArticleToEdit = id => async dispatch => {
  console.log("hhhh")
  try {
    const response = await axiosWithAuth().get(`${apiURL}/articles/${id}`);
    console.log("hhhh")
    dispatch({ type: "GET_ARTICLE_TO_EDIT_SUCCESS", payload: response.data.response });
  } catch (err) {
    console.log(err);
  }
};




export const getArticleReactions = id => async dispatch => {
  dispatch({ type: GET_REACTIONS_START });
  try {
    const response = await axiosWithAuth().get(`${apiURL}/reactions/${id}`);
    dispatch({ type: GET_REACTIONS_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_REACTIONS_FAIL });
  }
};

export const postLike = id => async dispatch => {
  dispatch({ type: "POST_LIKE_START" });
  try {
    const response = await axiosWithAuth().post(`${apiURL}/articles/like/${id}`);
    dispatch({ type: "POST_LIKE_SUCCESS", payload: response.data.newLikeCount });
  } catch (err) {
    console.log(err);
    dispatch({ type: "POST_LIKE_FAIL" });
  }
};
