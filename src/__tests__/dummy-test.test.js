import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("App page renders placeholder text", () => {
  const { getByText } = render(<App />);
  const dummy_text = getByText(/Welcome to our blog publishing platform/i);
  expect(dummy_text).toBeInTheDocument();
});
