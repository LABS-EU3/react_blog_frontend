import * as types from "./actionTypes";
import axios from "axios";

export const register = user => dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });
  axios
    .post("http://localhost:3300/api/auth/register", user)
    .then(res => {
    //   alert("Welcome to Insight " + res.data.username);
      dispatch({ type: types.REGISTER_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      alert("Please enter valid credentials");
      dispatch({ type: types.REGISTER_FAILURE });
    });
};