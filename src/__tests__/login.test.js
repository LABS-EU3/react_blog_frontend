import React from "react";
import { render, cleanup, fireEvent, getByRole } from "@testing-library/react";
import ReactDOM from "react-dom";
import Login from "../pages/Login";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { authReducer } from "../redux-store/reducers/auths";

const initState = {
  loading: false,
  register_error: false,
  register_success: false,
  login_error: false,
  login_success: false
};

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
      initialState: { auth: { initState } }
    });
    const text = getByText(/Dont have an account yet/i);
    expect(text).toBeInTheDocument();
  });

  test("All elements of form render correctly", () => {
    const { container, getByPlaceholderText } = renderWithRedux(<Login />, {
      initialState: { auth: { initState } }
    });
    const submitBtn = container.querySelector(".button");
    const emailField = getByPlaceholderText("Email");
    const pwdField = getByPlaceholderText("Password");

    expect(emailField).toBeInTheDocument();
    expect(pwdField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});
