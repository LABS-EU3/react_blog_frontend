import React from "react";
import { render, cleanup } from "@testing-library/react";
import Feed from "../pages/Feed";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getArticlesReducer } from "../redux-store/reducers/get-article-reducer";

const initState = {
  articles: {
    loading: false,
    data: {
      trending: [
        { id: 1, title: "Test Article 1", coverImageUrl: "" },
        { id: 2, title: "Test Article 2", coverImageUrl: "" },
        { id: 3, title: "Test Article 3", coverImageUrl: "" },
        { id: 4, title: "Test Article 4", coverImageUrl: "" },
        { id: 5, title: "Test Article 5", coverImageUrl: "" }
      ],
      mainFeed: []
    }
  }
};

const userWithInterests = {
  articles: {
    loading: false,
    data: {
      trending: [
        { id: 1, title: "Test Article 1", coverImageUrl: "" },
        { id: 2, title: "Test Article 2", coverImageUrl: "" },
        { id: 3, title: "Test Article 3", coverImageUrl: "" },
        { id: 4, title: "Test Article 4", coverImageUrl: "" },
        { id: 5, title: "Test Article 5", coverImageUrl: "" }
      ],
      interests: [
        { id: 6, title: "Test Article 6", coverImageUrl: "", body: '[{"type":"paragraph","data":{"text":"In 2020, it seems almost pointless to bemoan the pervasiveness of technology."}}]' },
        { id: 7, title: "Test Article 7", coverImageUrl: "", body: '[{"type":"paragraph","data":{"text":"In 2020, it seems almost pointless to bemoan the pervasiveness of technology."}}]'}
      ]
    }
  }
};

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
      initialState: initState
    });
    const heading = getByText(/Trending/i);
    expect(heading).toBeInTheDocument();
  });
  test("Renders relevant heading for main feed if user has interests", () => {
    const { getByText, queryByText } = renderWithRedux(<Feed />, {
      initialState: userWithInterests
    });
    const userHasInterestsHeading = getByText(/INSIGHTS FROM YOUR INTERESTS/i);
    const defaultHeading = queryByText(/EXPLORE INSIGHTS/i);
    expect(userHasInterestsHeading).toBeInTheDocument();
    expect(defaultHeading).not.toBeInTheDocument();
  });
});
