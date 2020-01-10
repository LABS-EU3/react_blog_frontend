import {
    VIEW_ARTICLES,
    VIEW_ARTICLES_SUCCESS,
    VIEW_ARTICLES_FAIL
} from "../actions/types";

export const initialState = {
    articles: [],
    isFetching: false,
    error: ""
}

export const viewArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                isFetching: false,
                error: ""
            }
        case VIEW_ARTICLES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}
