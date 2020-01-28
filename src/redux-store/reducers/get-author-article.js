import * as types from '../actions/types';

export const initialState = {
    loading: false,
    userArticles: []   
};


export const authorArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_ARTICLES_START:
            return { ...state, loading: true };
        case types.GET_USER_ARTICLES_SUCCESS:
            return {
                loading: false,
                userArticles: action.payload,
            };
        case types.GET_USER_ARTICLES_FAIL:
            return { ...state, loading: false };
        default:
            return state;
    }
};


