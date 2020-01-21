import {
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL
} from "../actions/types";

export const initState = {
  loading: false,
  data: []
};

export const getUserProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_START:
      return {
        ...state,
        loading: true
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
