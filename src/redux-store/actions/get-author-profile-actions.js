import {
  GET_AUTHOR_PROFILE_START,
  GET_AUTHOR_PROFILE_SUCCESS,
  GET_AUTHOR_PROFILE_FAIL
} from "./types";
import { apiURL } from "../../utilities/urls";
import { axiosWithAuth } from "../../utilities/axios/index";
import axios from "axios";

export const getAuthorProfile = id => async dispatch => {
  dispatch({ type: GET_AUTHOR_PROFILE_START });
  try {
    const response = await axios.get(`${apiURL}/users/${id}`);
    dispatch({ type: GET_AUTHOR_PROFILE_SUCCESS, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_AUTHOR_PROFILE_FAIL });
  }
};
