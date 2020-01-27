import { axiosWithAuth } from "../../utilities/axios/index";
import { apiURL } from "../../utilities/urls";

export const publishPost = post => async dispatch => {
  dispatch({
    type: "REACTING_START"
  });
  try {
    let res = await axiosWithAuth().post(`${apiURL}/articles/publish`, post);
    if (res)
      dispatch({
        type: "REACTING_SUCCESS"
      });
    return res.data;
  } catch (error) {
    console.log(error);
    dispatch({ type: "REACTING_FAIL" });
  }
};
