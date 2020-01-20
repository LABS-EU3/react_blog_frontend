import {
  GET_ALL_ARTICLES_START,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAIL
} from "../actions/types";

export const initState = {
  loading: false,
  data: []
};

export const getArticlesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES_START:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_ALL_ARTICLES_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
