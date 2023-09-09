import React, { useReducer } from "react";

// Define the types of actions our reducer will handle
const actionTypes = {
	increment: "INCREMENT",
	decrement: "DECREMENT",
};

// Our reducer function to handle state changes based on the provided action
const counterReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.increment:
			return { count: state.count + 1 };
		case actionTypes.decrement:
			return { count: state.count - 1 };
		default:
			throw new Error(`Unsupported action type: ${action.type}`);
	}
};

// Our component
const Counter = () => {
	const [state, dispatch] = useReducer(counterReducer, { count: 0 });
	const increment = () => dispatch({ type: actionTypes.increment });
	const decrement = () => dispatch({ type: actionTypes.decrement });

	return (
		<div>
			Count: {state.count}
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	);
};

ReactDOM.render(<Counter />, document.getElementById("root"));
