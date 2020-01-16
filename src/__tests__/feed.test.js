import React from "react";
import { render, cleanup } from "@testing-library/react";
import Feed from "../pages/Feed";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getArticlesReducer } from "../redux-store/reducers/get-article-reducer";

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(
      getArticlesReducer,
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

afterEach(cleanup);
describe("Article Feed component", () => {
  test("Renders without crashing", () => {
    const { getByText } = renderWithRedux(<Feed />, {
      initialState: {
        articles: { loading: false, data: [{ trending: [], mainFeed: [] }] }
      }
    });
    const heading = getByText(/Trending/i);
    expect(heading).toBeInTheDocument();
  });
  // test("Only displays feed based on user interests if user is logged in", () => {
  //   const { getByText } = renderWithRedux(<Feed />);
  //   const defaultHeading = getByText(/EXPLORE INSIGHTS/i);

  //   if (!localStorage.getItem("token")) {
  //     expect(defaultHeading).toBeInTheDocument();
  //   }
  // });
});
