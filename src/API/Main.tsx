import { BrowserRouter, Route, Routes } from "react-router-dom";
import FolderPage from "../Pages/FolderPage";
import SharedPage from "../Pages/SharedPage";
import React from "react";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/folder" element={<FolderPage />} />
        <Route path="/shared" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
