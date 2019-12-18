import * as types from "../actions/actionTypes";

export const setLoginSuccess = (user) => {
    return {
        type: types.LOGIN_SUCCESS,
        user: user
    };
}


export const setLoginFailure = (error) => {
    return {
      type: types.LOGIN_FAILURE,
      error: error
    };
  }