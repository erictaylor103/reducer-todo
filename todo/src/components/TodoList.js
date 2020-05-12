import React from 'react';

const TodoList = ({ todos, toggleTodo }) => {
	return (
		<div>
			<h1>Todo List:</h1>
			{todos.map((todo) => (
				<div
					key={todo.id}
					onClick={() => toggleTodo(todo.id)}					
					className={todo.completed ? 'completed' : ''}
					style={{
						textDecoration: todo.completed ? 'line-through' : 'none',
					}}>
					<p>
                    {todo.item}
                    </p>
				</div>
			))}
		</div>
	);
};

export default TodoList;