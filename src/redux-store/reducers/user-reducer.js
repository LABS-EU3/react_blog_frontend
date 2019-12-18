import * as types from "../actions/actionTypes";

const initialLoginState = {
  username: "",
  password: ""
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {};
    default:
      return state;
  }
};

const initialRegisterState = {
  loading: false,
  success: false
};

export const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return { loading: true };
    case types.REGISTER_SUCCESS:
      return { loading: false, success: true };
    case types.REGISTER_FAILURE:
      return { loading: false, success: false };
    default:
      return state;
  }
};
