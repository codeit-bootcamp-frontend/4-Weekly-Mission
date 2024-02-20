import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import FolderPage from "./pages/FolderPage";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
