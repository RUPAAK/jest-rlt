import React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { store } from "./store";

const renderWithRedux = (component: JSX.Element): RenderResult =>
  // the ToDoItem component is now "reduxified"
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

// it("should take a snapshot", () => {
//   const { asFragment } = renderWithRedux();
//   expect(asFragment()).toMatchSnapshot();
// });

it("should check initial value to be 0", () => {
  // const { getByTestId } = renderWithRedux(<App/>);
  // expect(getByTestId("test")).toHaveTextContent("5");
});

// it("should equal to 0", () => {
//   const { getByTestId } = renderWithRedux(<Counter />);
//   expect(getByTestId("counter")).toHaveTextContent("0");
// });

// it("should be enabled", () => {
//   const { getByTestId } = renderWithRedux(<Counter />);
//   expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
// });

// it("should be disabled", () => {
//   const { getByTestId } = renderWithRedux(<Counter />);
//   expect(getByTestId("button-down")).toBeDisabled();
// });

// //event testing
// // it("increments counter", () => {
// //   const { getByTestId } = renderWithRedux(<Counter />);

// //   fireEvent.click(getByTestId("button-up"));

// //   expect(getByTestId("counter")).toHaveTextContent("1");
// // });

// // it("decrements counter", () => {
// //   const { getByTestId } = renderWithRedux(<Counter />);

// //   fireEvent.click(getByTestId("button-down"));

// //   expect(getByTestId("counter")).toHaveTextContent("-1");
// // });

// //asynchronous
// it("increments counter after 0.5s", async () => {
//   const { getByTestId, getByText } = renderWithRedux(<Counter />);

//   fireEvent.click(getByTestId("button-up"));

//   const counter = await waitFor(() => getByText("1"));

//   expect(counter).toHaveTextContent("1");
// });

// // it('check')
