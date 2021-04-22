import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const handleClick = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("header"));
  };
  return (
    <div id="root">
      <h1 id="header">Simple Component To Unmount</h1>
      <button onClick={handleClick}>Unmount Component</button>
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
