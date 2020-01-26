import {
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_START,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  GET_TAGS_START,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAIL,
  UPDATE_USER_INTERESTS_START,
  REMOVE_USER_INTERESTS_SUCCESS,
  ADD_USER_INTERESTS_SUCCESS,
  UPDATE_USER_INTERESTS_FAIL
} from "../actions/types";

export const initState = {
  loading: false,
  data: [],
  tags: []
};

export const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_START ||
      UPDATE_USER_PROFILE_START ||
      GET_TAGS_START ||
      UPDATE_USER_INTERESTS_START:
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
      case UPDATE_USER_PROFILE_SUCCESS: 
      return {
        ...state,
        loading: false,
        data: {...action.payload}
      }
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload
      };
    case ADD_USER_INTERESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          interests: [
            ...state.data.interests,
            ...action.payload.map(interest => {
              return { name: interest };
            })
          ]
        }
      };
    case REMOVE_USER_INTERESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          interests: action.payload
        }
      };
    case GET_USER_PROFILE_FAIL ||
      UPDATE_USER_PROFILE_FAIL ||
      GET_TAGS_FAIL ||
      UPDATE_USER_INTERESTS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};