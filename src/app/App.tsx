import { HomePage } from "@pages/home/HomePage";
import { App as AntApp } from "antd";
import "./styles/global.css";
import { AntdProvider, ThemeProvider, TodoProvider } from "./providers";

function App() {
	return (
		<ThemeProvider>
			<AntdProvider>
				<AntApp>
					<TodoProvider>
						<HomePage />
					</TodoProvider>
				</AntApp>
			</AntdProvider>
		</ThemeProvider>
	);
}

export default App;
