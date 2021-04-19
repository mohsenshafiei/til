import React from "react";
import ReactDOM from "react-dom";

// React.forwardRef should return a React.Node

const Element = React.forwardRef((props, ref) => {
  return <h1 ref={ref}>Header</h1>;
});

const Root = () => {
  const ref = React.createRef();
  return <Element ref={ref} />;
};

ReactDOM.render(Root, document.getElementById("root"));
