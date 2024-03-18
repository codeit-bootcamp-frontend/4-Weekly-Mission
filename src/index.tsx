import React from "react";
import ReactDOM from "react-dom/client";
import SharePage from "src/pages/SharePage/SharePage";
import FolderPage from "src/pages/FolderPage/FolderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutOutlet from "src/components/BasicLayout/LayoutOutlet";
import "./styles/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutOutlet />}>
        <Route path="folder" element={<FolderPage />} />
        <Route path="share" element={<SharePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
