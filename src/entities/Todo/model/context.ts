import { createContext, Dispatch } from "react";
import { TodoState, TodoAction } from "./types";
import { initialTodoState } from "./reducer";

interface TodoContextType {
	state: TodoState;
	dispatch: Dispatch<TodoAction>;
}

export const TodoContext = createContext<TodoContextType>({
	state: initialTodoState,
	dispatch: () => null,
});
