import { authReducer } from "./auths";
import { combineReducers } from "redux";
import { newPostReducer } from "./posts-reducer-editing";
import { getArticlesReducer } from "./get-article-reducer";
import { userProfileReducer } from "./user-profile-reducer";
import { reactionReducer } from "./reactions";
import { authorArticleReducer } from "./get-author-article";
import { onBoardingReducer } from "./onboarding-reducer";
import { authorProfileReducer } from "./author-profile-reducer"

export const rootReducer = combineReducers({
  auth: authReducer,
  newPost: newPostReducer,
  articles: getArticlesReducer,
  userProfile: userProfileReducer,
  reaction: reactionReducer,
  userArticles: authorArticleReducer,
  onboarding: onBoardingReducer,
  authorProfile: authorProfileReducer
});