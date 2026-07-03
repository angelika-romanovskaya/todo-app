import React, { useReducer, useEffect } from "react";
import { TodoContext } from "@entities/Todo/model/context";
import { todoReducer, initialTodoState } from "@entities/Todo/model/reducer";
import { LocalStorageService } from "@shared/lib/localStorage";
import { STORAGE_KEYS } from "@shared/config/constants";

interface TodoProviderProps {
	children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(
		todoReducer,
		initialTodoState,
		(initial) => {
			const savedTodos = LocalStorageService.get(
				STORAGE_KEYS.TODOS,
				initial.todos,
			);
			const savedFilter = LocalStorageService.get(
				STORAGE_KEYS.FILTER,
				initial.filter,
			);
			return {
				todos: savedTodos,
				filter: savedFilter,
			};
		},
	);

	useEffect(() => {
		LocalStorageService.set(STORAGE_KEYS.TODOS, state.todos);
	}, [state.todos]);

	useEffect(() => {
		LocalStorageService.set(STORAGE_KEYS.FILTER, state.filter);
	}, [state.filter]);

	return (
		<TodoContext.Provider value={{ state, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};
