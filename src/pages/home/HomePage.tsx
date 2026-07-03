import React from "react";
import { TodoWidget } from "@widgets/TodoWidget";

export const HomePage: React.FC = () => {
	return (
		<div
			style={{
				height: "100vh",
				padding: "40px 20px",
				boxSizing: "border-box",
			}}
		>
			<TodoWidget />
		</div>
	);
};
