import React from 'react';
import { ACTIONS } from './App2.js';

const Todo = ({ todo, dispatch }) => {
	return (
		<div>
			<span className={todo.complete ? 'text-gray-400 m-1' : 'text-black m-1'}>
				{todo.name}
			</span>
			<button
				onClick={() =>
					dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
				}
				className="bg-gray-300 border border-black m-1 p-1"
			>
				Toggle
			</button>
			<button
				onClick={() =>
					dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
				}
				className="bg-gray-300 border border-black m-1 p-1"
			>
				Delete
			</button>
		</div>
	);
};

export default Todo;
// style={{ color: todo.complete ? '#AAA' : '#000' }}
