import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NewPage from "../src/components/NewPage/NewPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newPage" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
