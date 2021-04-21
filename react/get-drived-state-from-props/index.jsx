import React from "react";

class MyComponent extends React.Component {
  constructor() {
    this.state = {
      isScrollingDown: false,
      lastRow: null,
    };
  }
  getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      };
    }
    // Return null to indicate no change to state.
    return null;
  }
}

//  It enables a component to update its internal state as the result of changes in props.

// It should return an object to update the state, or null to update nothing.

// Note that this method is fired on every render, regardless of the cause.
// This is in contrast to UNSAFE_componentWillReceiveProps, which only fires
// when the parent causes a re-render and not as a result of a local setState.

// Deriving state leads to verbose code and makes your components difficult to think about.
