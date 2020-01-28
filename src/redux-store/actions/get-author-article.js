import * as types from "./types";
import axios from "axios";

export const getAuthorArticle = id => async dispatch => {
  dispatch({ type: types.GET_USER_ARTICLES_START });
  try {
    const response = await axios.get(
      `http://localhost:5000/api/articles/author/1`
    );
    dispatch({ type: types.GET_USER_ARTICLES_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.GET_USER_ARTICLES_FAIL });
  }
};

export const deleteAuthorArticle = id => async dispatch => {
  dispatch({ type: types.DELETE_USER_ARTICLES_START });
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/articles/${id}`
    );
    dispatch({
      type: types.DELETE_USER_ARTICLES_SUCCESS,
      payload: response.data.articleId
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.DELETE_USER_ARTICLES_FAIL });
  }
};
