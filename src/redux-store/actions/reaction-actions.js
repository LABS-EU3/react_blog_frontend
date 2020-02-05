import { axiosWithAuth } from "../../utilities/axios/index";
import { apiURL } from '../../utilities/urls';

export const postReaction = reaction => async dispatch => {
  console.log(reaction);
  dispatch({
    type: "REACTING_START"
  });
  try {
    let res = await axiosWithAuth().post(
      `${apiURL}/reactions`,
      reaction
    );
    if (res)
      dispatch({
        type: "REACTING_SUCCESS",
        payload: reaction.name
      });
    return res.data;
  } catch (error) {
    console.log(error);
    dispatch({ type: "REACTING_FAIL" });
  }
};
