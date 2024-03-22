import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./component/App";
import SharedPage from "./pages/Shared/SharedPage";
import HomePage from "./pages/HomePage/HomePage";
import FolderPage from "./pages/Folder/FolderPage";

const Main = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="shared">
						<Route index element={<SharedPage />} />
					</Route>
					<Route path="folder">
						<Route index element={<FolderPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Main;
