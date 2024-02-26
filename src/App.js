import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FolderPage } from "page-layout/FolderPage/FolderPage";
import { LinkToButtons } from "page-layout/LinkToButtons";
import { RenameModal } from "feature/RenameModal/RenameModal";
import { AddFolderModal } from "feature/AddFolderModal/AddFolderModal";
import { FolderSharedModal } from "feature/FolderSharedModal/FolderSharedModal";
import { DeleteFolderModal } from "feature/DeleteFolderModal/DeleteFolderModal";
import { DeleteLinkModal } from "feature/DeleteLinkModal/DeleteLinkModal";
import { AddToFolderModal } from "feature/AddToFolderModal/AddToFolderModal";

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
          <Route path="/folderShared" element={<FolderSharedModal />} />
          <Route path="/deleteFolder" element={<DeleteFolderModal />} />
          <Route path="/deleteLink" element={<DeleteLinkModal />} />
          <Route path="/addToFolder" element={<AddToFolderModal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
