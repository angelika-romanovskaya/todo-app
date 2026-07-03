import { useContext, useCallback, useMemo } from "react";
import { TodoContext } from "./context";
import { FilterType } from "./types";
import { FILTER_TYPES } from "@shared/config/constants";

export function useTodoContext() {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error("useTodoContext must be used within TodoProvider");
	}
	return context;
}

export function useTodos() {
	const { state, dispatch } = useTodoContext();

	const addTodo = useCallback(
		(text: string) => dispatch({ type: "ADD_TODO", payload: text }),
		[dispatch],
	);

	const toggleTodo = useCallback(
		(id: string) => dispatch({ type: "TOGGLE_TODO", payload: id }),
		[dispatch],
	);

	const deleteTodo = useCallback(
		(id: string) => dispatch({ type: "DELETE_TODO", payload: id }),
		[dispatch],
	);

	const editTodo = useCallback(
		(id: string, text: string) =>
			dispatch({ type: "EDIT_TODO", payload: { id, text } }),
		[dispatch],
	);

	const clearCompleted = useCallback(
		() => dispatch({ type: "CLEAR_COMPLETED" }),
		[dispatch],
	);

	const setFilter = useCallback(
		(filter: FilterType) => dispatch({ type: "SET_FILTER", payload: filter }),
		[dispatch],
	);

	const filteredTodos = useMemo(() => {
		switch (state.filter) {
			case FILTER_TYPES.ACTIVE:
				return state.todos.filter((todo) => !todo.completed);
			case FILTER_TYPES.COMPLETED:
				return state.todos.filter((todo) => todo.completed);
			default:
				return state.todos;
		}
	}, [state.todos, state.filter]);

	const stats = useMemo(
		() => ({
			total: state.todos.length,
			active: state.todos.filter((todo) => !todo.completed).length,
			completed: state.todos.filter((todo) => todo.completed).length,
		}),
		[state.todos],
	);

	return {
		state,
		todos: state.todos,
		filter: state.filter,
		filteredTodos,
		stats,
		addTodo,
		toggleTodo,
		deleteTodo,
		editTodo,
		clearCompleted,
		setFilter,
	};
}
