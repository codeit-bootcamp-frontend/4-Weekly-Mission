import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedPage from "./page/SharedPage";
import FolderPage from "./page/FolderPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
