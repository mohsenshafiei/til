import React, { useState } from "react";

// A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
const useIsCustomHook = (arg) => {
  const [isCustomHook, setIsCustomHook] = React.useState(false);
  React.useEffect(() => {
    setIsCustomHook(true);
  }, arg);
  return isCustomHook;
};

const Component = () => {
  const isCustomHook = useIsCustomHook(false);
  return <div>Custom Hook</div>;
};

// Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature.

// Without naming custom hooks start with use, we wouldn’t be able to automatically check for violations of rules of Hooks

// Custom Hook
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialCount);

  return { count, increment, decrement, reset };
}

// Usage in a component
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
