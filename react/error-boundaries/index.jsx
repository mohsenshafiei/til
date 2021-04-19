import React from "react";
import ReactDOM from "react-dom";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const Root = () => {
  return (
    <div>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <OtherComponentv />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

ReactDOM.render(Root, document.getElementById("root"));

// As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.

// Error boundaries only catch errors in the components below them in the tree.

// Error boundaries do not catch errors for:
// Event handlers (learn more)
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)

// If you need to catch an error inside an event handler, use the regular JavaScript try / catch
