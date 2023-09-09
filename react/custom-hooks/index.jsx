import React, { useState } from 'react';

// Custom Hook
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
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

ReactDOM.render(<Counter />, document.getElementById('root'));
