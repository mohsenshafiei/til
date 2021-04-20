import React from "react";

const Component = () => {
  const [title, setTitle] = React.useState("Title");
  const [count, setCount] = React.useState(0);
  const [inc, setInc] = React.useState(0);
  const [dec, setDec] = React.useState(0);
  const [expensive, setExpensive] = React.useState(() => {
    const initialState = someExpensiveComputation();
    return initialState;
  });

  const someExpensiveComputation = () => {
    let res = 0;
    let counter = 0;
    while (counter < 100000) {
      res += counter;
      counter++;
    }
    return res;
  };

  return (
    <div>
      <button onClick={() => setTitle("My Title")} />
      <button onClick={() => setCount(count + 1)} />
      <button onClick={() => setCount((prevInc) => prevInc + 1)} />
      <button onClick={() => setCount((prevDec) => prevDec - 1)} />
    </div>
  );
};

export default Component;

// If the initial state is the result of an expensive computation,
// you may provide a function instead, which will be executed only on the initial render:
