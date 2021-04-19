import React from "react";
import ReactDOM from 'react-dom';

// const element = React.createElement(type, [props], [...children]);

const container = React.createElement(
  'div',
  { className: 'wrapper'}, 
  React.createElement('h1', {}, 'My Header'), 
  React.createElement('ul', {},
    [
      React.createElement('li', { className: 'e1'}, 'item 1'),
      React.createElement('li', { className: 'e1'}, 'item 2')
      React.createElement('li', { className: 'e1'}, 'item 3')
    ]
  )
);

ReactDOM.render(container, document.getElementById("app"))
