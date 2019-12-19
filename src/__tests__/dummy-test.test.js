import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("App page renders placeholder text", () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const dummy_text = getByText(/Write Good Articles Effortlessy/i);
  expect(dummy_text).toBeInTheDocument();
});

test("App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
