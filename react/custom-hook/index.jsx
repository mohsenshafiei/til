import React from "react";

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
