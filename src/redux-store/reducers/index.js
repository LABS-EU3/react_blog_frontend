import { authReducer } from "./auths";
import { combineReducers } from "redux";
import { newPostReducer } from "./posts-reducer-editing";
<<<<<<< HEAD
import { viewArticlesReducer } from './view-articles-reducer';
=======
import { getArticlesReducer } from "./get-article-reducer";
>>>>>>> 84c3c6652e5610729064577ce6d78c79c93780bb

export const rootReducer = combineReducers({
  auth: authReducer,
  newPost: newPostReducer,
<<<<<<< HEAD
  articles: viewArticlesReducer,
=======
  articles: getArticlesReducer
>>>>>>> 84c3c6652e5610729064577ce6d78c79c93780bb
});