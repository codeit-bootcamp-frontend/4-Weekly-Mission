import React from "react";
import ReactDOM from "react-dom/client";
import Share from "src/pages/Share";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "src/components/App";
import Folder from "src/pages/Folder";
import "./index.css";
import "./styles/reset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
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
