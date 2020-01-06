import {
  TOGGLE_MODAL,
  PUBLISHING_FAIL,
  PUBLISHING_SUCCESS,
  PUBLISHING_START,
  SAVING_FAIL,
  SAVING_SUCCESS,
  SAVING_START,
  ADD_TAG,
  REMOVE_TAG,
  LOAD_TAGS
} from "../actions/types";

export const initialState = {
  showModal: false,
  tags: [],
  isPublishing: false,
  isSaving: false
};

export const newPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      };
    case PUBLISHING_START:
      return {
        ...state,
        isPublishing: true
      };

    case PUBLISHING_SUCCESS:
      return {
        ...state,
        isPublishing: true
      };

    case PUBLISHING_FAIL:
      return {
        ...state,
        isPublishing: false
      };

    case SAVING_START:
      return {
        ...state,
        isSaving: true
      };

    case SAVING_SUCCESS:
      return {
        ...state,
        isSaving: true
      };

    case SAVING_FAIL:
      return {
        ...state,
        isSaving: false
      };

    case LOAD_TAGS:
      return {
        ...state,
        tags: [...state.tags, action.payload]
      };

    case ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload]
      };

    case REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag.id !== action.payload)
      };

    default:
      return state;
  }
};
