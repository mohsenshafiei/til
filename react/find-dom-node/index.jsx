import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    ReactDOM.findDOMNode(this.refs.myinput).focus();
  }

  render() {
    return (
      <>
        <input type="text" ref="myinput" />
        <input
          type="button"
          value="Click to focus input"
          onClick={this.handleClick}
        />
      </>
    );
  }
}

export default MyComponent;

//  It has been deprecated in StrictMode.

// When a component renders to null or false,
// findDOMNode returns null. When a component renders
// to a string, findDOMNode returns a text DOM node
// containing that value.

// In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.
