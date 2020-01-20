import axios from "axios";
import uuid from "uuid";
import { apiURL } from '../../utilities/urls';

import {
  TOGGLE_MODAL,
  PUBLISHING_FAIL,
  PUBLISHING_SUCCESS,
  PUBLISHING_START,
  SAVING_FAIL,
  SAVING_SUCCESS,
  SAVING_START,
  ADD_TAG,
  REMOVE_TAG,
  LOAD_TAGS
} from "./types";

export const handlePublishModal = () => dispatch => {
  dispatch({
    type: TOGGLE_MODAL
  });
};

export const publishPost = post => async dispatch => {
  dispatch({
    type: PUBLISHING_START
  });
  try {
    // let image = await axios.post(`${apiURL}/articles/uploadFile`, post.formData);
    let res = await axios.post(`${apiURL}/articles/publish`, post.article);
    if (res)
      dispatch({
        type: PUBLISHING_SUCCESS
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: PUBLISHING_FAIL });
  }
};

export const savePost = post => async dispatch => {
  dispatch({
    type: SAVING_START
  });
  try {
    let res = await axios.post(`${apiURL}/articles/save`, post);
    if (res)
      dispatch({
        type: SAVING_SUCCESS
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: SAVING_FAIL });
  }
};

export const savePostAsDraft = post => async dispatch => {
  dispatch({
    type: SAVING_START
  });
  try {
    let res = await axios.post(`${apiURL}/articles/draft`, post);
    if (res)
      dispatch({
        type: SAVING_SUCCESS
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: SAVING_FAIL });
  }
};


export const addTag = inputValue => dispatch => {
  dispatch({
    type: ADD_TAG,
    payload: { id: uuid(), name: inputValue }
  });
};

export const removeTag = id => dispatch => {
  dispatch({
    type: REMOVE_TAG,
    payload: id
  });
};

export const loadTags = propTags => dispatch => {
  if (propTags) {
    dispatch({
      type: LOAD_TAGS,
      payload: propTags
    });
  }
};

// state => ({
//   selectedTags: [
//     ...state.selectedTags,
//     {
//       index: state.selectedTags.length + 1,
//       displayValue: "#" + inputValue
//     }
//   ]
// }),
