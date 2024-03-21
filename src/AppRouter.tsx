import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SharePage from "src/pages/SharePage/SharePage";
import FolderPage from "src/pages/FolderPage/FolderPage";
import LayoutOutlet from "src/Components/BasicLayout/LayoutOutlet";
import HeadNav from "./Components/BasicLayout/HeadNav";

function LinkToPages() {
  return (
    <>
      <HeadNav />
      <Link to={"/folder"} className="lb-h2-semibold">
        FolderPage로
        <br />
      </Link>
      <Link to={"/share"} className="lb-h2-semibold">
        SharePage로
      </Link>
    </>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutOutlet />}>
          <Route path="/" element={<LinkToPages />} />
          <Route path="folder" element={<FolderPage />} />
          <Route path="share" element={<SharePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
