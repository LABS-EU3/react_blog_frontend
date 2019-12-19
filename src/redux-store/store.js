import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { newPostReducer } from "./reducers/posts-reducer-editing";

const rootReducer = combineReducers({
  newPost: newPostReducer
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
