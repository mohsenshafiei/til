import React from "react";

const MyComponent = () => {
	const [count, setCount] = React.useState(0);

	const handleAdd = () => {
		setCount(count + 1);
	};

	const handleRemove = () => {
		setCount(count - 1);
	};

	return <div>This is my component</div>;
};

export default MyComponent;
