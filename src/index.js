import React from "react";
import ReactDOM from "react-dom/client";
import Folder from "components/Folder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="share" element={<Folder />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
