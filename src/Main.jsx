import "./Main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FolderSharedPage from "./pages/FolderSharedPage";
import FolderPage from "./pages/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shared" element={<FolderSharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
