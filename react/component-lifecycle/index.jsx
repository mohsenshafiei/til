import React from "react";

// Each compnent has these 4 phases
class MyComponent extends React.Component {
  // Mounting
  constructor() {}
  static getDerivedStateFromProps() {}
  render() {}
  componentDidMount() {}

  // Updating
  static getDerivedStateFromProps() {}
  shouldComponentUpdate() {}
  render() {}
  getSnapshotBeforeUpdate() {}
  componentDidUpdate() {}

  // Unmounting
  componentWillUnmount() {}

  // Error Handling
  static getDerivedStateFromError() {}
  componentDidCatch() {}
}
