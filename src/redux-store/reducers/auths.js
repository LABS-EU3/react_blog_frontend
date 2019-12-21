import * as types from "../actions/actionTypes";

const initialState = {
  loading: false,
  register_error: false,
  register_success: false,
  login_error: false,
  login_success: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login_success: true
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        login_error: true,
        loading: false
      };
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false, register_success: true };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false, register_success: false };
    default:
      return state;
  }
};
