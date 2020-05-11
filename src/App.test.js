import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders material ui xs 12", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/xs=12/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders second test", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/xs=12/i);
  expect(linkElement).toBeInTheDocument();
});
