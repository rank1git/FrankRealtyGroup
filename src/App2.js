import React, { useState, useReducer } from 'react';
import Todo from './todo';

export const ACTIONS = {
	ADD_TODO: 'add-todo',
	TOGGLE_TODO: 'toggle-todo',
	DELETE_TODO: 'delete-todo',
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO: {
			return [...todos, newTodo(action.payload.name)];
		}
		case ACTIONS.TOGGLE_TODO: {
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				} else {
					return todo;
				}
			});
		}
		case ACTIONS.DELETE_TODO: {
			return todos.filter((todo) => todo.id !== action.payload.id);
		}
		default:
			return todos;
	}
};

const newTodo = (name) => {
	return {
		id: Date.now(),
		name: name,
		complete: false,
	};
};

const App2 = () => {
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
		setName('');
	};

	console.log(todos);
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					placeholder="enter text "
					className="border border-black mt-5 ml-5 pl-2"
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
			})}
		</>
	);
};

export default App2;
