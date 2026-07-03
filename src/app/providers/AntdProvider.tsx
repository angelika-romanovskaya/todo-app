import React from "react";
import { ConfigProvider, theme } from "antd";
import { useTheme } from "./ThemeProvider";

export const AntdProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { isDark } = useTheme();

	return (
		<ConfigProvider
			theme={{
				algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: {
					colorPrimary: "#1677ff",
					borderRadius: 8,
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};
