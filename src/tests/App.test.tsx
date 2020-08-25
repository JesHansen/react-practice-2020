import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders learn react link", () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />{" "}
    </BrowserRouter>
  );
  const jumbotron = getByText(/Jabber Dabber/i);
  expect(jumbotron).toBeInTheDocument();
});
