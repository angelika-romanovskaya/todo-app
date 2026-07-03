import React from "react";
import { Button } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "@app/providers";

export const ThemeToggle: React.FC = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<Button
			type="text"
			icon={isDark ? <SunOutlined /> : <MoonOutlined />}
			onClick={toggleTheme}
			aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
			style={{ fontSize: "18px" }}
		/>
	);
};
