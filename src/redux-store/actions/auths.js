import * as types from "./actionTypes";
import axios from "axios";

export const register = user => dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });
  axios
    .post("http://localhost:5000/api/auth/register", user)
    .then(res => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.token, user: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.REGISTER_FAILURE });
    });
};

export const login = user => dispatch => {
  dispatch({ type: types.LOGIN_START })
  return axios
    .post("http://localhost:5000/api/auth/login", user)
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token, user: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.LOGIN_FAILURE });
    });
}