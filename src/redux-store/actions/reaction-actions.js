import { axiosWithAuth } from "../../utilities/axios/index";

export const postReaction = reaction => async dispatch => {
  console.log(reaction);
  dispatch({
    type: "REACTING_START"
  });
  try {
    let res = await axiosWithAuth().post(
      `http://localhost:5000/api/reactions`,
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
