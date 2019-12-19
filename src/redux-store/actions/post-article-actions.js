import axios from "axios";

export const handlePublishModal = () => dispatch => {
  dispatch({
    type: "TOGGLE_MODAL"
  });
};

export const publishPost = post => async dispatch => {
  dispatch({
    type: "PUBLISHING_START"
  });
  try {
    let res = await axios.post("http://localhost:3300/articles/publish", post);
    if (res)
      dispatch({
        type: "PUBLISHING_SUCCESS"
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: "PUBLISHING_FAIL" });
  }
};

export const savePostAsDraft = post => async dispatch => {
  dispatch({
    type: "SAVING_START"
  });
  try {
    let res = await axios.post("http://localhost:3300/articles/draft", post);
    if (res)
      dispatch({
        type: "SAVING_SUCCESS"
      });
  } catch (error) {
    console.log(error);
    dispatch({ type: "SAVING_FAIL" });
  }
};
