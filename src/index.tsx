import React from "react";
import ReactDOM from "react-dom/client";
import Share from "src/pages/SharePage/Share";
import FolderPage from "src/pages/FolderPage/FolderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "src/components/App";
import "./styles/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="folder" element={<FolderPage />} />
        <Route path="share" element={<Share />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
