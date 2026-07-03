export interface ITodo {
	id: string;
	text: string;
	completed: boolean;
	createdAt: number;
}

export type FilterType = "all" | "active" | "completed";

export interface TodoState {
	todos: ITodo[];
	filter: FilterType;
}

export type TodoAction =
	| { type: "ADD_TODO"; payload: string }
	| { type: "TOGGLE_TODO"; payload: string }
	| { type: "DELETE_TODO"; payload: string }
	| { type: "EDIT_TODO"; payload: { id: string; text: string } }
	| { type: "CLEAR_COMPLETED" }
	| { type: "SET_FILTER"; payload: FilterType };
