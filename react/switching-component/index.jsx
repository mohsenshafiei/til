import React from "react";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

const PAGES = {
	Home: Home,
	About: About,
	Contact: Contact,
};

const Page = (props) => {
	const Handler = PAGES[props.page] || Home;
	return <Handler {...props} />;
};

export const App = () => {
	return (
		<div>
			<Page />
		</div>
	);
};
