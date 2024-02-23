import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FolderPage } from "page-layout/FolderPage/FolderPage";
import { LinkToButtons } from "page-layout/LinkToButtons";
import { RenameModal } from "feature/RenameModal/RenameModal";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LinkToButtons />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/folder" element={<FolderPage />} />
          <Route path="/modals" element={<RenameModal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
