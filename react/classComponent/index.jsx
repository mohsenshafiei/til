import React from "react";

class MyComponent extends React.Component {
	constructor() {
		super(this);
	}

	componentDidMount() {
		console.log("Component mounted");
	}

	componentDidUpdate() {
		console.log("Component did update!");
	}

	render() {
		return <div>This is my component!</div>;
	}
}
