// import {
//   fireEvent,
//   render,
//   RenderResult,
//   waitFor,
// } from "@testing-library/react";
// import { Provider } from "react-redux";
// import Counter from "./Counter";
// import { store } from "./store";

// const renderWithRedux = (Component: JSX.Element): RenderResult =>
//   // the ToDoItem component is now "reduxified"
//   render(<Provider store={store}>{Component}</Provider>);

// it("should check initial value to be 0", () => {
//   const { getByTestId } = renderWithRedux(<Counter />);
//   expect(getByTestId("counter")).toHaveTextContent("5");
// });

// it("should increase value", async () => {
//   const { getByTestId, getByText } = renderWithRedux(<Counter />);
//   fireEvent.click(getByTestId("button-up"));
//   expect(getByTestId("counter")).toHaveTextContent("10");
//   //   const counter = await waitFor(() => getByTestId("counter"));

//   //   expect(counter).toHaveTextContent("10");
// });

import { PayloadAction } from "@reduxjs/toolkit";
import reducer, { todoAdded } from "./store/reducers/test";

//checks initial state
test("should return the initial state", () => {
  expect(reducer(undefined, { type: {} })).toEqual([
    {
      text: "Use Redux",
      completed: false,
      id: 0,
    },
  ]);
  console.log(reducer(undefined, { type: {} }));
});

test("should handle a todo being added to an empty list", () => {
  const previousState: any[] = [];
  expect(reducer(previousState, todoAdded("Run the tests"))).toEqual([
    {
      text: "Run the tests",
      completed: false,
      id: 0,
    },
  ]);
});

test("should handle a todo being added to an existing list", () => {
  const previousState = [
    {
      text: "Run the tests",
      completed: true,
      id: 0,
    },
  ];
  expect(reducer(previousState, todoAdded("Use Redux"))).toEqual([
    {
      text: "Run the tests",
      completed: true,
      id: 0,
    },
    {
      text: "Use Redux",
      completed: false,
      id: 1,
    },
  ]);
});
