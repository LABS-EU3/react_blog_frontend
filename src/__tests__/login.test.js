import React from "react";
import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import Login from "../pages/Login";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { authReducer } from "../redux-store/reducers/auths";

const renderWithRedux = (
  ui,
  { initialState, store = createStore(authReducer, initialState) } = {}
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

afterEach(cleanup);

describe("Login component", () => {
  test("Login component mounts without crashing", () => {
    const { getByText } = renderWithRedux(<Login />, {
      initialState: { auth: { loading: true } }
    });
    const text = getByText(/Dont have an account yet/i);
    expect(text).toBeInTheDocument();
  });
});
