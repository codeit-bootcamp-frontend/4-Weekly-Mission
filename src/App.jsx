import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import SharedPage from "./page/SharedPage";
import FolderPage from "./page/FolderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
