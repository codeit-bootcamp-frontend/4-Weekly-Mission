import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage.tsx";
import FolderPage from "./pages/FolderPage.tsx";
import Homepage from "./pages/Homepage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
