import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import App from "./App";
import Counter from "./Counter";

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("should equal to 0", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});

it("should be enabled", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});

it("should be disabled", () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId("button-down")).toBeDisabled();
});

//event testing
// it("increments counter", () => {
//   const { getByTestId } = render(<Counter />);

//   fireEvent.click(getByTestId("button-up"));

//   expect(getByTestId("counter")).toHaveTextContent("1");
// });

// it("decrements counter", () => {
//   const { getByTestId } = render(<Counter />);

//   fireEvent.click(getByTestId("button-down"));

//   expect(getByTestId("counter")).toHaveTextContent("-1");
// });

//asynchronous
it("increments counter after 0.5s", async () => {
  const { getByTestId, getByText } = render(<Counter />);

  fireEvent.click(getByTestId("button-up"));

  const counter = await waitFor(() => getByText("1"));

  expect(counter).toHaveTextContent("1");
});
