import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { createStore } from "redux";
import { newPostReducer } from "../redux-store/reducers/posts-reducer-editing";

import { Provider } from "react-redux";

function renderWithRedux(
  ui,
  { initialState, store = createStore(newPostReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

afterEach(cleanup);

describe("The structure of the editor component", () => {
  test("the buttons mount and fire correctly", () => {
    const { getByText } = renderWithRedux(<NavBar />);
    const publishButton = getByText(/Publish/i);
    const draftButton = getByText(/Save for later/i);
    expect(publishButton).toBeInTheDocument();
    expect(draftButton).toBeInTheDocument();
  });

  test("the assets mount correctly", () => {
    const { getByAltText } = renderWithRedux(<NavBar />);
    const logo = getByAltText(/logo/i);
    const icon = document.querySelector("svg");
    expect(logo).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
