import React from "react";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>This is Pure Component</h1>;
  }
}

// React.PureComponent is similar to React.Component.
// The difference between them is that React.Component
// doesn’t implement shouldComponentUpdate(), but React.
// PureComponent implements it with a shallow prop and state comparison.

// forceUpdate() when you know deep data structures have changed

// Furthermore, React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree
