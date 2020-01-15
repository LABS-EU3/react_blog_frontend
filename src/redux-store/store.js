import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { newPostReducer } from "./reducers/posts-reducer-editing";
import { authReducer } from "./reducers/auths";
import { getArticlesReducer } from "./reducers/get-article-reducer";

const rootReducer = combineReducers({
  newPost: newPostReducer,
  auth: authReducer,
  articles: getArticlesReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
