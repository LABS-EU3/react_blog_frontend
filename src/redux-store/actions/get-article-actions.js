import axios from "axios";
import {
  GET_ALL_ARTICLES_START,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAIL
} from "./types";

import axiosWithAuth from "../../utilities/axios/index";

export const getArticleFeed = () => async dispatch => {
  dispatch({
    type: GET_ALL_ARTICLES_START
  });
  try {
    let response = await axiosWithAuth().get("http://localhost:3300/api/articles");
    if (response) {
      dispatch({ type: GET_ALL_ARTICLES_SUCCESS, payload: response.data });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ALL_ARTICLES_FAIL });
  }
};
