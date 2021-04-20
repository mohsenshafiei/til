import React from "react";

const Component = () => {
  const myFunction = React.useCallback(() => {
    console.log(a, b);
  }, [a, b]);

  return (
    <div>
      <button onClick={() => myFunction()}></button>
    </div>
  );
};

// Returns a memoized callback.

// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

// useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result.
