import React from "react";

const Component = React.memo(() => {
  const [x, setX] = React.useState(0);
  return <h1>React Memo Example</h1>;
});

// React.memo is a higher order component.

// It checks the props and as long as the props are the same it will return the same component

// React.memo only checks for prop changes.

const MyComponent = (props) => {
  /* render using props */
};

const areEqual = (prevProps, nextProps) => {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
};

// We can customize the equality check
export default React.memo(MyComponent, areEqual);
