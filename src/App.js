import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FolderPage } from "page-layout/FolderPage/FolderPage";
import { LinkToButtons } from "page-layout/LinkToButtons";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LinkToButtons />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
