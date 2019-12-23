import { authReducer } from "./auths";
import { combineReducers } from "redux";
import { newPostReducer } from "./posts-reducer-editing";

export const rootReducer = combineReducers({
  auth: authReducer,
  newPost: newPostReducer,
});