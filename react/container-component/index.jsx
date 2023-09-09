import React from "react";

// Presentational component
const TodoList = ({ todos, onTodoClick }) => {
	return (
		<ul>
			{todos.map((todo, index) => (
				<li key={index} onClick={() => onTodoClick(index)}>
					{todo.text}
				</li>
			))}
		</ul>
	);
};

// Container component
export const TodoListContainer = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetchTodosFromAPI().then((fetchedTodos) => {
			setTodos(fetchedTodos);
		});
	}, []);

	const handleTodoClick = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	}

	return <TodoList todos={todos} onTodoClick={handleTodoClick} />;
};
