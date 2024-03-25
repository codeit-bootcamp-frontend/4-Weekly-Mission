import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gnb from "./components/Gnb/Gnb";
import HomePage from "./pages/HomePage/HomePage";
import SharedPage from "./pages/SharedPage/SharedPage";
import FolderPage from "./pages/FolderPage/FolderPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
