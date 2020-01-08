import React from "react";
import { render, cleanup } from "@testing-library/react";
import Feed from "../pages/Feed";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getArticlesReducer } from "../redux-store/reducers/get-article-reducer";

const renderWithRedux = (
  ui,
  { initialState, store = createStore(getArticlesReducer, initialState) } = {}
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
describe("Article Feed comopnent", () => {
  test("Renders without crashing", () => {
    const { getByText } = renderWithRedux(<Feed />);
    const heading = getByText(/Trending/i);
    expect(heading).toBeInTheDocument();
  });
});
