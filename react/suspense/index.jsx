import React, { Suspense, lazy } from 'react';

// Lazy load the Component
const SomeComponent = lazy(() => import('./SomeComponent'));

function App() {
  return (
    <div>
      <h1>Welcome to our App</h1>
      {/* Wrap the lazily loaded component with Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <SomeComponent />
      </Suspense>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
