import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Register from "../pages/Register";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { registerReducer } from "../redux-store/reducers/user-reducer";

const renderWithRedux = (
  ui,
  { initialState, store = createStore(registerReducer, initialState) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store
  };
};

describe("Register component", () => {
  test("Component mounts without crashing", () => {
     renderWithRedux(<Register />);
  });
});
