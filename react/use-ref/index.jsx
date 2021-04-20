import React from "react";

const Component = () => {
  const ref = React.useRef();
  return (
    <div>
      <input ref={ref} placeholder="Wooooo" type="text" />
      <button onClick={() => ref.current.focus()}>Focus On Input</button>
    </div>
  );
};

// useRef is useful for more than the ref attribute.
// It is  handy for keeping any mutable value around
// similar to how you'd use instance fields in classes.
