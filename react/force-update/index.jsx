import React from "react";

const MyComponent = () => {
	const [, forceRender] = useState(0);

	const reRender = () => {
		forceRender((n) => !n);
	};
	return (
		<div>
			<button onClick={reRender}>Force Update</button>
		</div>
	);
};
