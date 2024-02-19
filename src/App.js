import { SharedPage } from "./page-layout/SharedPage";
import { FolderPage } from "./page-layout/FolderPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="shared" element={<SharedPage />} />
          <Route path="folder" element={<FolderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
