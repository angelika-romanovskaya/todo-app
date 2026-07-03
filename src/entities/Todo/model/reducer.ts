import { v4 as uuidv4 } from "uuid";
import { TodoState, TodoAction } from "./types";
import { isValidTodoText, sanitizeTodoText } from "@shared/lib/validation";

export const initialTodoState: TodoState = {
	todos: [],
	filter: "all",
};

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
	switch (action.type) {
		case "ADD_TODO": {
			if (!isValidTodoText(action.payload)) {
				return state;
			}

			const newTodo = {
				id: uuidv4(),
				text: sanitizeTodoText(action.payload),
				completed: false,
				createdAt: Date.now(),
			};

			return {
				...state,
				todos: [newTodo, ...state.todos],
			};
		}

		case "TOGGLE_TODO": {
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo,
				),
			};
		}

		case "DELETE_TODO": {
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		}

		case "EDIT_TODO": {
			if (!isValidTodoText(action.payload.text)) {
				return state;
			}

			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, text: sanitizeTodoText(action.payload.text) }
						: todo,
				),
			};
		}

		case "CLEAR_COMPLETED": {
			return {
				...state,
				todos: state.todos.filter((todo) => !todo.completed),
			};
		}

		case "SET_FILTER": {
			return {
				...state,
				filter: action.payload,
			};
		}

		default:
			return state;
	}
}
