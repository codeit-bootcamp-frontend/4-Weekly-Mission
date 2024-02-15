import React from "react";
import ReactDOM from "react-dom/client";
import FolderShare from "components/FolderShare";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "components/App";
import FolderLinkAdd from "components/FolderLinkAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="folder" element={<FolderLinkAdd />} />
				<Route path="share" element={<FolderShare />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
