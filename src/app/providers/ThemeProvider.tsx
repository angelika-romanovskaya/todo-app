import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from "react";
import { LocalStorageService } from "@shared/lib/localStorage";

const THEME_STORAGE_KEY = "todo-app-theme";

interface ThemeContextType {
	isDark: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
	isDark: false,
	toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isDark, setIsDark] = useState<boolean>(() => {
		return LocalStorageService.get(THEME_STORAGE_KEY, false);
	});

	useEffect(() => {
		LocalStorageService.set(THEME_STORAGE_KEY, isDark);
		document.documentElement.setAttribute(
			"data-theme",
			isDark ? "dark" : "light",
		);
	}, [isDark]);

	const toggleTheme = useCallback(() => {
		setIsDark((prev: boolean) => !prev);
	}, []);

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
