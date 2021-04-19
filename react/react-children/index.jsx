import React from "react";
import ReactDOM from "react-dom";

// React.Children provides utilities for working with props.children
const element = (props) => {
  const { children = [] } = props;
  React.Children.map(children, (child) =>
    React.cloneElement(child, { style: { ...child.props.style } })
  );
  React.Children.forEach(children, (child) => console.log(child));
  React.Children.count(children);
  React.Children.toArray(children); // returns flatten array of childrens with keys assigned to each element

  return <div>Hello World!</div>;
};
