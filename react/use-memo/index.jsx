import React from "react";

const computeExpensiveValue = () => {
  // DO Something super expensive
  return;
};

const Component = () => {
  const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [
    a,
    b,
  ]);
  return <div>{memoizedValue}</div>;
};

// useMemo returns a memoizedValue

// You may rely on useMemo as a performance optimization, not as a semantic guarantee.
