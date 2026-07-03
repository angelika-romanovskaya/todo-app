import React from "react";
import { Checkbox } from "antd";
import { useTodos } from "@entities/Todo/model/hooks";
import { ITodo } from "@entities/Todo/model/types";

interface ToggleTodoProps {
	todo: ITodo;
}

export const ToggleTodo: React.FC<ToggleTodoProps> = ({ todo }) => {
	const { toggleTodo } = useTodos();

	return (
		<Checkbox
			checked={todo.completed}
			onChange={() => toggleTodo(todo.id)}
			aria-label={`Mark "${todo.text}" as ${todo.completed ? "incomplete" : "complete"}`}
		/>
	);
};
