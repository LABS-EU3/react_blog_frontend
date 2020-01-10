import { authReducer } from "./auths";
import { combineReducers } from "redux";
import { newPostReducer } from "./posts-reducer-editing";
import { viewArticlesReducer } from './view-articles-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  newPost: newPostReducer,
  articles: viewArticlesReducer,
});