import React from 'react';

// Layout Component
const Layout = ({ header, sidebar, content, footer }) => (
  <div>
    <header>
      {header}
    </header>

    <div className="main">
      <aside>
        {sidebar}
      </aside>

      <main>
        {content}
      </main>
    </div>

    <footer>
      {footer}
    </footer>
  </div>
);

// Usage
const App = () => (
  <Layout 
    header={<div>My Header</div>}
    sidebar={<div>My Sidebar</div>}
    content={<div>My Content</div>}
    footer={<div>My Footer</div>}
  />
);

ReactDOM.render(<App />, document.getElementById('root'));
