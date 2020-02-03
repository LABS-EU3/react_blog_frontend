import {
  GET_ALL_TAGS_START,
  GET_ALL_TAGS_SUCCESS,
  GET_ALL_TAGS_FAIL,
  GET_USERS_TO_FOLLOW_START,
  GET_USERS_TO_FOLLOW_SUCCESS,
  GET_USERS_TO_FOLLOW_FAIL,
  FOLLOW_USERS_START,
  FOLLOW_USERS_SUCCESS,
  FOLLOW_USERS_FAIL
} from "../actions/types";

const initState = {
  loading: false,
  tags: [],
  users: [] 
};

export const onBoardingReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_TAGS_START:
      return {
        ...state,
        loading: true
      };
      case FOLLOW_USERS_START:
      return {
        ...state,
        loading: true
      };
    case GET_USERS_TO_FOLLOW_START:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: Array.from(new Set(action.payload.map(a => a.name))).map(name => {
          return action.payload.find(a => a.name === name);
        })
      };
    case GET_USERS_TO_FOLLOW_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
      case FOLLOW_USERS_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case GET_ALL_TAGS_FAIL:
      return {
        ...state,
        loading: false
      };
    case GET_USERS_TO_FOLLOW_FAIL:
      return {
        ...state,
        loading: false
      };
      case FOLLOW_USERS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
