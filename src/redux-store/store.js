import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { setToken } from '../utilities/authentication';
import { logger } from 'redux-logger';
import { rootReducer } from './reducers'

const middleware = [thunk, setToken, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    applyMiddleware(...middleware),
  )
);

export default store;
