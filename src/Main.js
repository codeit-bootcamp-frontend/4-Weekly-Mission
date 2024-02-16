import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import HomePage from "./pages/HomePage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="folder" element={<FolderPage />} />
        <Route path="shared" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
