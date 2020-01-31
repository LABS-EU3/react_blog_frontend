import {
  GET_AUTHOR_PROFILE_START,
  GET_AUTHOR_PROFILE_SUCCESS,
  GET_AUTHOR_PROFILE_FAIL,
  FOLLOW_AUTHOR_START,
  FOLLOW_AUTHOR_SUCCESS,
  FOLLOW_AUTHOR_FAIL
} from "../actions/types";

export const initState = {
  loading: false,
  profile: {},
  followAuthorSuccess: false
};

export const authorProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_AUTHOR_PROFILE_START:
      return {
        ...state,
        loading: true
      };
    case FOLLOW_AUTHOR_START:
      return {
        ...state,
        loading: true,
        followAuthorSuccess: false
      };
    case GET_AUTHOR_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case FOLLOW_AUTHOR_SUCCESS:
      return {
        ...state,
        loading: false,
        followAuthorSuccess: true,
        profile: {
          ...state.profile,
          followers: JSON.parse(state.profile.followers) + 1
        }
      };
    case GET_AUTHOR_PROFILE_FAIL:
      return {
        ...state,
        loading: false
      };
    case FOLLOW_AUTHOR_FAIL:
      return {
        ...state,
        loading: false,
        followAuthorSuccess: false
      };
    default:
      return state;
  }
};
