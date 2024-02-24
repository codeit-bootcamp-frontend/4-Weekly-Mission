import Apps from "./components/Apps";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShearedPage from "./page/ShearedPage";
import FolderAllPage from "./page/FolderAllPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apps />}>
          <Route path="shared" element={<ShearedPage />} />
          <Route path="folder" element={<FolderAllPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
