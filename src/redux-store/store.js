import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { newPostReducer } from "./reducers/posts-reducer-editing";
import { loginReducer, registerReducer } from "./reducers/user-reducer"

const rootReducer = combineReducers({
  newPost: newPostReducer,
  login: loginReducer,
  registering: registerReducer
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
