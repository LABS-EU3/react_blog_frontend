import * as types from "../actions/actionTypes";

const initialLoginState = {
  email: "",
  password: "",
    loading:false,
    error:''
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
      case types.LOGIN_START:
        return {
          ...state,
          loading:false
      };
      case types.LOGIN_SUCCESS:
          return {
              ...state,
              ...action.user,
              loading:false
          };
      case types.LOGIN_FAILURE:
          return {
              ...state,
              error:action.error,
              loading:false
          };
    default:
      return state;
  }
};



const initialRegisterState = {
  registering: false
};


export const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return { registering: true };
    case types.REGISTER_SUCCESS:
      return { registering: false };
    case types.REGISTER_FAILURE:
      return { registering: false };
    default:
      return state;
  }
};