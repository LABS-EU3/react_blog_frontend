import React from 'react';
import ReactDOM from 'react-dom';
import { userReducer } from "./redux-store/reducers/user-reducer";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { loginReducer } from "./redux-store/reducers/user-reducer";
import { registerReducer } from "./redux-store/reducers/user-reducer";

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

const bigReducer = combineReducers({
  login: loginReducer.loginReducer,
  loading: registerReducer

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  bigReducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
  );
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { userReducer } from "./redux-store/reducers/user-reducer";
// import { Provider } from "react-redux";
// import { combineReducers, createStore, applyMiddleware, compose } from "redux";

// const bigReducer = combineReducers({
//   user: userReducer
// });

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   bigReducer,
//   composeEnhancer(applyMiddleware(thunk, logger))
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
