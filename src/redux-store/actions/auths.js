import * as types from "./actionTypes";
import axios from "axios";
import { apiURL } from '../../utilities/urls';
import { axiosWithAuth } from "../../utilities/axios/index";

export const register = user => dispatch => {
  dispatch({ type: types.REGISTER_REQUEST });
  axios
    .post(`http://localhost:5000/api/auth/register`, user)
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
    .post(`http://localhost:5000/api/auth/login`, user)
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token, user: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.LOGIN_FAILURE });
    });
}

export const verify = (token, id) => dispatch => {
  dispatch({ type: types.VERIFICATION_START })
  return axios
    .post(`${apiURL}/auth/verify/${id}/${token}`)
    .then(res => {
      dispatch({ type: types.VERIFICATION_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.VERIFICATION_FAILURE });
    });
}

export const declareInterest = (interests) => dispatch => {
  dispatch({ type: types.INTEREST_START })
  return axiosWithAuth()
    .post(`http://localhost:5000/api/interests`, interests)
    .then(res => {
      console.log(res)
      dispatch({ type: types.INTEREST_SUCCESS })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.INTEREST_FAILURE });
    });
}