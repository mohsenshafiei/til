import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement(type, [props], [...children]);

const ref = React.createRef();
const container = React.createElement(
  "div",
  { className: "wrapper", ref: ref },
  React.createElement("h1", {}, "My Header"),
  React.createElement("ul", {}, [
    React.createElement("li", { className: "e1" }, "item 1"),
    React.createElement("li", { className: "e1" }, "item 2"),
    React.createElement("li", { className: "e1" }, "item 3"),
  ])
);

// ReactDOM.render(container, document.getElementById("app"));

console.log(container);

// {
//   '$$typeof': Symbol(react.element),
//   type: 'div',
//   key: null,
//   ref: { current: null},
//   props: { className: 'wrapper', children: [ [Object], [Object] ] },
//   _owner: null,
//   _store: {}
// }
