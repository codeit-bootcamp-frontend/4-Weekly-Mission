import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FolderPage } from "page-layout/FolderPage/FolderPage";
import { LinkToButtons } from "page-layout/LinkToButtons";
import { RenameModal } from "feature/RenameModal/RenameModal";
import { AddFolderModal } from "feature/AddFolderModal/AddFolderModal";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LinkToButtons />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/folder" element={<FolderPage />} />
          <Route path="/renameModal" element={<RenameModal />} />
          <Route path="/addFolderModal" element={<AddFolderModal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
