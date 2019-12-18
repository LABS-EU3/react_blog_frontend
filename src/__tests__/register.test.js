import React from "react";
import { render, cleanup } from "@testing-library/react";
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

afterEach(cleanup);

describe("Register component", () => {
  test("Component mounts without crashing", () => {
    const { getByText } = renderWithRedux(<Register />);
    const heading = getByText(/Try Insight for Free/i);
    expect(heading).toBeInTheDocument();
  });
  test("Button has relevant text content based on whether request is loading", () => {
    const { getByText } = renderWithRedux(<Register />, {
      initialState: { registering: { loading: true } }
    });
    
    const submitRegisterCredsBtn = document.querySelector('[id="register-submit"]');
    expect(submitRegisterCredsBtn).toHaveTextContent(/Loading../i);
    expect(submitRegisterCredsBtn).not.toHaveTextContent(/Try for Free/i);
  });
});
