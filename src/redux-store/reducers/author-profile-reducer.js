import {
  GET_AUTHOR_PROFILE_START,
  GET_AUTHOR_PROFILE_SUCCESS,
  GET_AUTHOR_PROFILE_FAIL
} from "../actions/types";

export const initState = {
  loading: false,
  profile: {}
};

export const authorProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_AUTHOR_PROFILE_START:
      return {
        ...state,
        loading: true
      };
    case GET_AUTHOR_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case GET_AUTHOR_PROFILE_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
