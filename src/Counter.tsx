import React from "react";

const TestElements = () => {
  const [counter, setCounter] = React.useState(0);

  const delayCount = () =>
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={delayCount}>
        {" "}
        Up
      </button>
      <button
        disabled
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        Dow
      </button>
    </>
  );
};

export default TestElements;
