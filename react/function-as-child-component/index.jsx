import React, { useState, useEffect } from "react";

const CurrentTime = ({ children }) => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return children(time);
};

export const App = () => {
	return (
		<div>
			<h1>Welcome to our website</h1>
			<CurrentTime>
				{(time) => <h2>Current Time: {time.toLocaleTimeString()}</h2>}
			</CurrentTime>
		</div>
	);
};