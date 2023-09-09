import React from "react";

const MyComponent = () => {
	const ref = React.useRef(null);

	const handleClick = () => {
		console.log("Clicked!");
	};

	return (
		<div>
			<h1>My Component</h1>
			<button ref={ref} onClick={handleClick}></button>
		</div>
	);
};

class MyClassComponent extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	render() {
		return <div ref={this.myRef}>My Class Component</div>;
	}
}

export default MyComponent;
