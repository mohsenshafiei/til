import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement("h1", { className: "classic" }, "Header 1");

const clonedElement = React.cloneElement(element);

ReactDOM.render(clonedElement, document.getElementById("root"));
// <element.type {...element.props} {...props}>{children}</element.type>
// Ref will point to the same element if we clone the element
