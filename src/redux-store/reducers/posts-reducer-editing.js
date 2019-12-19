import {
  TOGGLE_MODAL,
  PUBLISHING_FAIL,
  PUBLISHING_SUCCESS,
  PUBLISHING_START,
  SAVING_FAIL,
  SAVING_SUCCESS,
  SAVING_START
} from "../actions/types";

const initialState = {
  showModal: false,
  blocks: [],
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

    default:
      return state;
  }
};
