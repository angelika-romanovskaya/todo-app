import React from "react";
import { TodoWidget } from "@widgets/TodoWidget";
import "./HomePage.css";

export const HomePage: React.FC = () => {
	return (
		<div className="home-container">
			<TodoWidget />
		</div>
	);
};
