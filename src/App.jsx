import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedPage } from "./pages/SharedPage";
import { FolderPage } from "./pages/FolderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FolderPage />} />
        <Route path="shared" element={<SharedPage />} />
      </Routes>
    </BrowserRouter>
  );
}
