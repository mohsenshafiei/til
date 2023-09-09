import React from "react";

const ControlledForm = () => {
	const [textInput, setTextInput] = React.useState("");

	const handleChange = (event) => {
		setTextInput(event.target.value);
	};

	const handleSubmit = (event) => {
		alert("A text was submitted: " + textInput);
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Text Input:
				<input type="text" value={textInput} onChange={handleChange} />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default ControlledForm;
