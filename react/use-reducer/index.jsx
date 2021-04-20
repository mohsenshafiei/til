import React from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        counter: state.counter + 1,
      };
    case "minus": {
      return {
        counter: state.counter - 1,
      };
    }
    default:
      return state;
  }
};

const Component = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "minus" })}>Minus</button>
    </div>
  );
};
