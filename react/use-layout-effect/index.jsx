import React from "react";

// Basically we should use useLayoutEffect when we need to do measurment or we want to to update on the DOM

const Component = () => {
  const ref = React.useRef();
  const [x, setX] = React.useState(0);

  // The signature is the same with useEffect
  React.useLayoutEffect(() => {
    console.log(ref.value);
  }, [x]);
  return (
    <div>
      <h1></h1>
      <button ref={ref} onClick={() => setX(x ? 0 : 1)}>
        Change
      </button>
    </div>
  );
};

// useLayoutEffect: If you need to mutate the DOM and/or do need to perform measurements

// useEffect: If you don't need to interact with the DOM at all or your DOM changes
// are unobservable (seriously, most of the time you should use this).
