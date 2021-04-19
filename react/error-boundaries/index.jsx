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
