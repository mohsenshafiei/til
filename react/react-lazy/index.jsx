import React from "react";
import ReactDOM from "react-dom";

const OtherComponent = React.lazy(() => import("./OtherComponent"));

const Element = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </React.Suspense>
  );
};
