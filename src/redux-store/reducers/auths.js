import * as types from "../actions/actionTypes";

const initialState = {
  user: null,
  loading: false,
  register_error: false,
  register_success: false,
  login_error: false,
  login_success: false,
  verification_error: false,
  verification_success: false,
  interest_success: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INTEREST_START:
      return {
        ...state,
        loading: true
      };
    case types.INTEREST_SUCCESS:
      return {
        ...state,
        interest_success: true,
        loading: false,
      };
    case types.INTEREST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.VERIFICATION_START:
      return {
        ...state,
        loading: true
      };
    case types.VERIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        verification_success: true,
        user: action.payload
      };
    case types.VERIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        verification_error: true
      };
    case types.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login_success: true,
        user: action.user
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
