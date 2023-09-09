import React from "react";

const ParentComponent = (props) => {
	return (
		<div>
			{React.Children.map(props.children, (child) => {
				return React.cloneElement(child, { className: "my-class" });
			})}
		</div>
	);
};

export const App = () => {
	return (
		<ParentComponent>
			<h1>Hello</h1>
			<p>World</p>
		</ParentComponent>
	);
};
