import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "../App";

test("App page renders placeholder text", () => {
  const { getByText } = render(<App />);
  const dummy_text = getByText(/Welcome to our blog publishing platform/i);
  expect(dummy_text).toBeInTheDocument();
});

test("App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
