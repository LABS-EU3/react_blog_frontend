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
  UPDATE_USER_INTERESTS_FAIL,
  FOLLOW_USER_START,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  GET_AUTHOR_ARTICLES_START,
  GET_AUTHOR_ARTICLES_SUCCESS,
  GET_AUTHOR_ARTICLES_FAIL,
  DELETE_USER_ARTICLES_START,
  DELETE_USER_ARTICLES_SUCCESS,
  DELETE_USER_ARTICLES_FAIL
} from "../actions/types";

export const initState = {
  loading: false,
  data: [],
  tags: [],
  articles: [],
  followAuthorSuccess: false
};

export const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_START ||
      GET_AUTHOR_ARTICLES_START ||
      FOLLOW_USER_START ||
      UPDATE_USER_PROFILE_START ||
      GET_TAGS_START ||
      DELETE_USER_ARTICLES_START ||
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
    case GET_AUTHOR_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      };
    case DELETE_USER_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: state.articles.filter(
          article => article.id !== parseInt(action.payload)
        )
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload }
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        followAuthorSuccess: true,
        data: {
          ...state.data,
          followers: [...state.data.followers, action.payload]
        }
      };
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
      FOLLOW_USER_FAIL ||
      GET_AUTHOR_ARTICLES_FAIL ||
      DELETE_USER_ARTICLES_FAIL ||
      UPDATE_USER_INTERESTS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
