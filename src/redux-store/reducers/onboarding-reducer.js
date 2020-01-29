import {
    GET_ALL_TAGS_START,
    GET_ALL_TAGS_SUCCESS,
    GET_ALL_TAGS_FAIL,
  } from "../actions/types";

  const initState = {
      loading: false,
      tags: [],
      users: []
  }

  export const onBoardingReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_ALL_TAGS_START:
        return {
          ...state,
          loading: true
        };
      case GET_ALL_TAGS_SUCCESS:
        return {
          ...state,
          loading: false,
          tags: action.payload
        };
      case GET_ALL_TAGS_FAIL:
        return {
          ...state,
          loading: false
        };   
      default:
        return state;
    }
  };