import React from "react";
import ReactDOM from "react-dom";

const withConsoleLog = (WrappedComponent) => {
  return (props) => {
    const { hello, ...moreProps } = props;
    console.log(`${val} World!`);
    return <WrappedComponent {...moreProps} />;
  };
};

const Component = () => {
  return <h1>Compoent</h1>;
};

const ComponentWithConsole = withConsoleLog(Component);

const App = () => {
  return (
    <main>
      <ComponentWithConsole hello={"Hello"} />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
