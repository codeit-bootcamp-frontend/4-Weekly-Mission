import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharePage from "src/pages/SharePage/SharePage";
import FolderPage from "src/pages/FolderPage/FolderPage";
import LayoutOutlet from "src/Components/BasicLayout/LayoutOutlet";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutOutlet />}>
          <Route path="folder" element={<FolderPage />} />
          <Route path="share" element={<SharePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
