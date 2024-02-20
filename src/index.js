import React from "react";
import ReactDOM from "react-dom/client";
import Share from "pages/Share";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "components/App";
import Folder from "pages/Folder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="folder" element={<Folder />} />
				<Route path="share" element={<Share />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
