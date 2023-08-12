import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Capsule from "./Capsule";

jest.mock("./Modal", () => () => <div data-testid="modal" />);

test("renders capsule details", () => {
  const item = {
    type: "Dragon",
    status: "Active",
  };

  const { getByText } = render(<Capsule item={item} />);

  expect(getByText("Type: Dragon")).toBeInTheDocument();
  expect(getByText("Status: Active")).toBeInTheDocument();
});

test("opens modal when clicked", () => {
  const item = {
    type: "Dragon",
    status: "Active",
  };

  const { getByText, getByTestId } = render(<Capsule item={item} />);

  fireEvent.click(getByText("Type: Dragon"));
  const modal = getByTestId("modal");

  expect(modal).toBeInTheDocument();
});
