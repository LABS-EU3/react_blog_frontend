import {
  GET_ALL_TAGS_START,
  GET_ALL_TAGS_SUCCESS,
  GET_ALL_TAGS_FAIL
} from "./types";
import axios from "axios";
import { axiosWithAuth } from "../../utilities/axios/index";

export const getTags = () => async dispatch => {
  dispatch({ type: GET_ALL_TAGS_START });
  try {
    const response = await axios.get(
      `http://localhost:5000/api/articles/tags`
    );
    console.log(response)
    dispatch({ type: GET_ALL_TAGS_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ALL_TAGS_FAIL });
  }
};
