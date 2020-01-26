import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import EditProfile from "../pages/EditProfile.js";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { userProfileReducer } from "../redux-store/reducers/user-profile-reducer";

const defaultState = {
  loading: false,
  data: [],
  tags: []
};

afterEach(cleanup);

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(
      userProfileReducer,
      initialState,
      compose(applyMiddleware(thunk))
    )
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store
  };
}

describe("Edit Profile component", () => {
  it("Renders without crashing", () => {
    const dummyToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJpYXQiOjE1ODAwNTU3MjgsImV4cCI6MTU4MDE0MjEyOH0.KJBwGnrLKdhQRX4RZP7_bPnFLbYNGmTdpjmkh5YH1a8";
    localStorage.setItem("token", dummyToken);
    const { getByText } = renderWithRedux(<EditProfile />, {
      initialState: { userProfile: defaultState }
    });
    const btn = getByText(/Edit Profile/i);
    expect(btn).toBeInTheDocument();
  });
  it("Renders without crashing", () => {
    const dummyToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJpYXQiOjE1ODAwNTU3MjgsImV4cCI6MTU4MDE0MjEyOH0.KJBwGnrLKdhQRX4RZP7_bPnFLbYNGmTdpjmkh5YH1a8";
    localStorage.setItem("token", dummyToken);
    const { getByText, getByPlaceholderText } = renderWithRedux(
      <EditProfile />,
      {
        initialState: { userProfile: defaultState }
      }
    );
    const btn = getByText(/Edit Profile/i);
    fireEvent.click(btn, "click");
    const fullnameInputField = getByPlaceholderText("Full Name");
    expect(fullnameInputField).toBeInTheDocument();
  });
});
