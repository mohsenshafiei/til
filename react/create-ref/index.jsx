import React from "react";
import ReactDOM from "react-dom";

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return <input ref={this.ref} placeholder="simple input" />;
  }
  componentDidMount() {
    this.ref.current.focus();
  }
}
